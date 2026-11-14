# FrenchieFam portfolio deployment

This is a buildless HTML/CSS/JavaScript GitHub Pages site.
Production domain: https://frenchiefam.dev
Repository: https://github.com/FrenchieFam/frenchiefam.github.io
Preserve CNAME and the existing Pages configuration.

## Current redesign
Redesign prepared on redesign/automation-home; approved for publication to main.
Homepage: index.html, home.css, home.js.
The earlier homepage is retained as earlier-work.html and uses style.css.
The original project directories and sample media are retained.
The simulation workflow is missed-call-simulation.n8n.json (manual, inactive).

## Preview
From this repository:
python3 -m http.server 8770 --bind 0.0.0.0
Open http://100.115.92.26:8770 from ChromeOS while Linux is running.
Stop the server with Ctrl+C when finished. The VM IP can change.
An offline self-contained review copy is in Chromebook Downloads:
FrenchieFam-Website-Preview.html (open in Chrome with Ctrl+O).
Its earlier-work link goes to the current live portfolio until publication.

## Review before publication
Confirm contact email, copy, navigation, demo behavior, and mobile layout.
The owner approved this redesign for publication on 2026-11-14.
Publish using the existing Pages source; do not create a
second hosting project or change DNS just to deploy this redesign.

## Validation completed
- JavaScript syntax, HTML IDs/labels/anchors, local resource paths, CNAME.
- HTTP 200 for homepage, styles, script, favicon, manifest, archive, workflow.
- Actual Chrome interactions: business name, opt-out, duplicate, anonymous,
  permission, completed dial, reset.
- Actual iframe viewports at 1280 and 390 CSS px: no horizontal overflow.
- Screenshots inspected in both layouts and the normal Chrome viewport.
- The workflow's n8n runtime import remains unverified; it is labeled.

## Scope
No claims of existing automation clients, earnings, deployed SMS, or message
delivery. The homepage collects no form data and loads no external assets.
Email opens the visitor's email app. Old project pages retain their earlier
content and are not represented as current automation delivery promises.
