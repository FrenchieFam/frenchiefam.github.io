'use strict';
// Decision logic shared with the local missed-call prototype. No network requests.
function decide(event) {
  const result = { mode: 'simulation', smsSent: false, providerVerified: false };
  if (!event || typeof event !== 'object' || Array.isArray(event)) {
    return { ...result, outcome: 'invalid', reason: 'Expected a call event object.' };
  }
  const status = typeof event.DialCallStatus === 'string' ? event.DialCallStatus : '';
  // Do not fall back to parent CallStatus: it does not describe the dial attempt.
  if (!status) return { ...result, outcome: 'invalid', reason: 'DialCallStatus is required; parent CallStatus is not a substitute.' };
  if (status === 'completed') return { ...result, outcome: 'skip', reason: 'Dial attempt completed. Do not classify it as missed. Voicemail may also complete a dial attempt.' };
  if (!['busy', 'no-answer'].includes(status)) return { ...result, outcome: 'skip', reason: 'This demo only drafts a response for busy or no-answer outcomes.' };
  if (!/^\+[1-9]\d{7,14}$/.test(event.From || '')) return { ...result, outcome: 'invalid', reason: 'Caller number is missing, anonymous, or not in international +number format.' };
  if (!/^\+[1-9]\d{7,14}$/.test(event.To || '') || event.From === event.To) return { ...result, outcome: 'invalid', reason: 'A different business number in international +number format is required.' };
  if (typeof event.CallSid !== 'string' || !/^[A-Za-z0-9_-]{6,100}$/.test(event.CallSid)) return { ...result, outcome: 'invalid', reason: 'A call identifier is required to build a deduplication key.' };
  if (event.optedOut !== false) return { ...result, outcome: 'blocked', reason: 'Demo opt-out state is unknown or opted out. No draft prepared.' };
  if (event.permissionConfirmed !== true) return { ...result, outcome: 'blocked', reason: 'Demo permission assumption has not been confirmed. No draft prepared.' };
  if (event.alreadyProcessed !== false) return { ...result, outcome: 'blocked', reason: 'Call is already processed or its deduplication state is unknown.' };
  const name = typeof event.businessName === 'string' ? event.businessName.trim() : '';
  if (!name || name.length > 60 || /[\r\n\u0000-\u001f]/.test(name)) return { ...result, outcome: 'invalid', reason: 'A business name of 1–60 characters is required.' };
  return { ...result, outcome: 'draft', reason: 'Simulated missed dial attempt passed the demo checks.', deduplicationKey: 'missed-call:' + event.CallSid, draft: { to: event.From, from: event.To, text: `${name}: Sorry we missed your call. What can we help you with? Reply STOP to opt out.` }, limitations: 'Inputs are simulated. No signature, permission, opt-out, SMS capability, or durable duplicate check was verified.' };
}

const $ = id => document.getElementById(id);
function updateDemo() {
  const r=decide({DialCallStatus:$('status').value,CallSid:'SIMULATED_CALL_001',From:$('anonymous').checked?'anonymous':'+12025550101',To:'+12025550102',businessName:$('business').value,optedOut:$('optout').checked,permissionConfirmed:$('permission').checked,alreadyProcessed:$('duplicate').checked});
  const labels={draft:'A follow-up draft is ready.',skip:'No follow-up for this outcome.',blocked:'Stop here. No draft prepared.',invalid:'Check the caller details.'};
  $('outcome').textContent=labels[r.outcome];
  $('reason').textContent=r.reason;
  $('message').textContent=r.draft?r.draft.text:'No text draft for this scenario.';
  $('message-state').textContent=r.draft?'Draft only · Nothing sent':'Skipped or blocked · Nothing sent';
}
for(const e of document.querySelectorAll('#scenario input, #scenario select'))e.addEventListener('input',updateDemo);
$('scenario').addEventListener('submit',e=>e.preventDefault());
$('scenario').addEventListener('reset',()=>setTimeout(updateDemo,0));
updateDemo();
