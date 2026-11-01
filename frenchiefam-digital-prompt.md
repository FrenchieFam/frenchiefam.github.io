PROMPT 15 — Inject FrenchieFam Digital Section into index.html.

Read index.html and style.css at project root first. 

═══════════════════════════════════════════════════════════════
OBJECTIVE
═══════════════════════════════════════════════════════════════
Add a new B2B section for "FrenchieFam Digital" (Bilingual GBP setup and transcription) to the existing website.

Scope IN:
  1. Nav Link: Add the new section to the navigation.
  2. HTML: Add the new section immediately after the existing Handyman booking link.
  3. CSS: Add a media query to make the new cards a grid.

═══════════════════════════════════════════════════════════════
CHANGE 1 — NAV LINK (index.html)
═══════════════════════════════════════════════════════════════
Find the link:
  <a href="#services">Services</a>

Immediately below it, add:
  <a href="#frenchiefam-digital">FrenchieFam Digital</a>

═══════════════════════════════════════════════════════════════
CHANGE 2 — NEW SECTION (index.html)
═══════════════════════════════════════════════════════════════
Find the link:
  <a class="text-link" href="https://frenchiefam.dev/gutierrez-handyman-booking/">

Immediately AFTER the closing </section> that contains this link, insert the following HTML exactly as shown:

<section id="frenchiefam-digital" style="margin-top: 48px;">
  <p class="eyebrow">Digital Services</p>
  <h2>FrenchieFam Digital</h2>
  <p>Bilingual Google Business Profile setup and Spanish/English transcription for local businesses.</p>
  <div class="digital-grid" style="display: grid; gap: 20px; margin-top: 24px;">
    <div class="card">
      <h3>Bilingual GBP Setup</h3>
      <p>Get found when customers search in Spanish. Free audit included.</p>
      <a class="button" href="mailto:frenchiefamdigital@gmail.com?subject=Free%20GBP%20Audit%20Request">Get a Free Audit</a>
    </div>
    <div class="card">
      <h3>Spanish/English Transcription</h3>
      <p>Accurate, fast transcription for audio and video.</p>
      <a class="button" href="https://www.fiverr.com/" target="_blank">View Transcription Services</a>
    </div>
  </div>
</section>

═══════════════════════════════════════════════════════════════
CHANGE 3 — CSS (style.css)
═══════════════════════════════════════════════════════════════
Append this exact CSS to the bottom of the file:

/* FrenchieFam Digital */
@media (min-width: 640px) {
  #frenchiefam-digital .digital-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

═══════════════════════════════════════════════════════════════
VERIFICATION
═══════════════════════════════════════════════════════════════
X1. Read the modified lines of index.html to confirm the nav link and new section are present.
X2. Read the modified lines of style.css to confirm the media query is present.
X3. Print "CHANGES APPLIED SUCCESSFULLY" and STOP.
