# TASK: Add FrenchieFam Digital Section

You are authorized to read, edit, and write files in this directory. Do not just output code snippets. You must actually modify the files and save the changes.

## 1. Update `index.html`
- **Nav Link:** Find the link `<a href="#services">Services</a>` and add this immediately below it: `<a href="#frenchiefam-digital">FrenchieFam Digital</a>`
- **New Section:** Find the link that says `<a class="text-link" href="https://frenchiefam.dev/gutierrez-handyman-booking/">`. Immediately AFTER the closing `</section>` that contains this link, insert the following HTML:
`html
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
`",
",

Append this exact CSS to the bottom of the file:
`css
/* FrenchieFam Digital */
@media (min-width: 640px) {
  #frenchiefam-digital .digital-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
`",
",

Once you have written to the files, read the newly modified lines of `index.html` and `style.css` to confirm the changes exist, and print a success message.
