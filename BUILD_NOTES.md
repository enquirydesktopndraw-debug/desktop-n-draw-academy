# Desktop N Draw Creative Hub — Working Improvement Build

This is a local working build based on the ZIP supplied by the user. It has not been deployed.

## Implemented in this build
- Supplied verified-by-user EP 01–05 YouTube and Google Drive PDF URLs are mapped to the first five course lessons.
- EP 06–30 show Coming Soon rather than fabricated video/PDF URLs.
- Mini Arts no longer show fake YouTube IDs or generic Drive-home links; they are marked Upload Pending.
- Five artwork reference images supplied by the user are included under `assets/`.
- Each of the five references has an in-app tutorial with canvas/layer setup, drawing sequence, brush recommendations, HEX colours, shading/highlights and export steps.
- Challenge progress is stored in browser localStorage on this device.
- Existing original logo, theme, PWA manifest start URL and service worker were preserved.

## Limitations / not yet implemented
- Challenge Shuffle currently uses the five supplied images only. A larger curated/original reference pool is needed for truly fresh batches while guaranteeing two anime references.
- Tutorial brush sizes are starting recommendations for the stated canvas dimensions; they may need adjustment to match the current ibisPaint X version and personal style.
- Art Review is still a local preview only. It does not securely upload, store, or send artwork and has no admin authentication/replies.
- Gallery remains browser-local prototype functionality; there is no cloud backup.
- Store/₹49 checkout and automatic PDF delivery are not implemented. No payment URLs are fabricated.
- This ZIP has not been deployed to GitHub, Cloudflare Pages, or the separate public website.

## Local testing
- `node --check app.js` passed.
- Please test on a mobile browser before any deployment; a syntax check is not a full interactive/browser regression test.

## Local source validation (2026-10-11)
- Verified `app.js` JavaScript syntax with `node --check app.js` (passed).
- Confirmed the supplied EP 01–05 video/PDF URLs are present in source code; URL availability/content was not independently tested.
- This ZIP is a source package only. It has not been pushed to GitHub or deployed to Cloudflare Pages.
- Before public deployment, test the updated source in a preview and confirm the live Learn page no longer serves an older cached build. Do not change `www.desktopndraw.com`.

## Version 2 project (new repo) - changes from the live app
- Colours, theme, Learn, Challenges, Gallery and Art Review pages: unchanged.
- index.html now links manifest.webmanifest, the icons and apple-touch-icon in the head (the live file did not, so Chrome could not offer Install app).
- Home: Subscribe and Share app buttons at the very top.
- New PDFs tab (bottom bar): paid pack card that opens www.desktopndraw.com, plus a note pointing to the free episode PDFs in Learn.
- Removed the "mobile-test-build" meta tag.
- Not built yet: Art Review backend (upload and admin view), Razorpay checkout inside the app, Gallery improvements.

## Art Review backend (added)
- Real upload to Cloudflare Pages Functions + Workers KV. See ART_REVIEW_SETUP.md.
- Private admin inbox at /admin/ (password in the ADMIN_PASSWORD secret).
- Removed the duplicate Rs 49 pack from the Learn tab (it lives in the PDFs tab only).
- Function logic was tested with a fake KV store (submit, validation, limits, admin auth, update, delete). The live Cloudflare setup and the page layout were not tested on a real phone.

## Learn Studio (added)
- New Studio view (opened from the "Draw an apple" card on Home): Apple Construction Sketch, setup plus 5 steps, step cards, tips, common mistakes, saved progress (localStorage key dndStudioProgress), optional keep-screen-on.
- Reference image: assets/lessons/apple-reference.png (a simple placeholder drawn for this lesson; replace it with your own artwork any time, same file name).
- "Share to ibisPaint X" appears only if the phone supports sharing files. It cannot paste into a layer automatically. Download and import steps are always shown.
- sw.js cache is now v4 and includes the apple reference.
- Brush and menu names must be checked on a real phone before launch.
