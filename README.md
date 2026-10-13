# Desktop N Draw Creative Hub — PWA prototype

This package updates the existing mobile-first app while preserving the supplied original logo and the PWA `start_url: "./"` fix.

## Included
- Premium yellow + deep-purple responsive UI with mobile bottom navigation.
- Learning hub for Ibis Paint X Complete Course, 30 Mini Arts and worksheet practice.
- YouTube gallery with official channel link and device-local custom video link list.
- Drawing challenge prompts and checklist progress saved locally in the current browser.
- Private Art Review front-end preview with local image preview and question form.
- PWA service worker cache version bumped so installed clients can receive the new interface.

## Important limitations — not production backend
- Custom gallery links and challenge checklist are stored in local browser storage on this device only. They do not sync to other visitors and are not an owner/admin publishing system.
- Art Review is preview-only. It does not upload or submit artwork. Secure private submissions and admin replies require a backend, authenticated accounts, protected storage, authorization rules, and abuse controls.
- No real-time LIVE status/schedule is claimed. No payment processing, Razorpay verification, or automatic PDF delivery is implemented. The ₹49 pack is described as planned, not as a working checkout.
- No analytics dashboard or fabricated stats are included.
- No website files are changed by this package.

## Deploy
Upload the contents of `desktop-n-draw-app-main` to the app's existing Cloudflare Pages / GitHub repository root, or replace the corresponding files in the repository and commit to the configured production branch. Keep the existing Pages build command blank and output directory `.` if that is how the current project is configured. After deploy, close/reopen the installed PWA; if stale assets persist, clear site data or reinstall the PWA.

## Quick checks
- `index.html`, `styles.css`, `app.js`, `manifest.webmanifest`, and `sw.js` are in the project root.
- The manifest start URL remains `./`.
- Original logo files are retained unchanged.


## Current scope (front-end prototype)
- Premium yellow/purple responsive Creative Hub with mobile navigation.
- Learn section, video gallery, drawing challenges, and Private Art Review preview.
- Gallery links and ordering are stored locally in this browser only; YouTube thumbnails load from YouTube when available.
- Art Review only previews a selected image and feedback request in the current page. It does not upload, privately store, or send submissions.
- No Supabase/backend, authentication, admin inbox, payment processing, or automatic PDF delivery is included in this version.
- Keep the original logo files unchanged. Deploy the contents of this folder to the existing app project only; do not replace the separate website.
