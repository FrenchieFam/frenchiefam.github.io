'use strict';
// Scenario shortcuts only; the same home.js decision logic renders the result.
(()=>{
 for(const button of document.querySelectorAll('[data-scenario]')){
  button.addEventListener('click',()=>{
   const get=id=>document.getElementById(id),scenario=button.dataset.scenario;
   get('business').value='Example Handyman';get('permission').checked=true;
   for(const id of ['optout','duplicate','anonymous'])get(id).checked=false;
   get('status').value=scenario==='voicemail'?'completed':'no-answer';
   if(scenario==='optout')get('optout').checked=true;
   if(scenario==='duplicate')get('duplicate').checked=true;
   get('status').dispatchEvent(new Event('input',{bubbles:true}));
  });
 }
})();
