# Desktop N Draw Creative Hub — Combined Improvement Plan

This package is based on the latest Session 2 Learn-updated frontend ZIP. It is a local working package only: nothing has been deployed, and the public website has not been changed.

## 1. Ibis Paint X Complete Course — Beginner to Advanced
- Keep the 30-episode roadmap and fixed identity: “IBIS PAINT X MASTERCLASS / EPISODE XX”.
- Levels: Beginner (1–5), Drawing Tools (6–10), Selection & Advanced Layers (11–16), Digital Art Techniques (17–24), Advanced Ibis Paint X (25–30).
- Each published episode should show its verified YouTube video URL and the Google Drive study PDF URL from that video's description.
- Episodes without a verified public video link must display “Coming Soon”. Do not invent links.
- Episode topics: Introduction; Full Interface; Brush Tool; Eraser Tool; Layers; Stabilizer; Color Tool; Bucket/Fill; Eyedropper; Transform; Magic Wand; Lasso; Clipping; Alpha Lock; Blending Modes; Layer Folder; Line Art; Base Coloring; Shadows & Highlights; Gradient & Blending; Hair Coloring; Skin Coloring; Eyes & Facial Details; Glow/Lighting; Filters; Text/Typography; Perspective/Background; Texture/Materials; Export/Save/Transparent PNG; Complete Artwork from Blank Canvas to Final Artwork.

## 2. 30 MINI ARTS — Small Drawings, Big Skills!
- Separate experience from the Masterclass, with project artwork thumbnails, difficulty, and practice focus.
- Show verified YouTube and study PDF links only when supplied/confirmed; unpublished videos show “Upload Pending” or “Coming Soon”.
- Preserve the beginner-to-advanced 30-project sequence.

## 3. Drawing Challenges
- Show five artworks at once; Shuffle chooses five randomly from a larger curated pool.
- At least two of the five visible references must be anime-related.
- Each challenge should include a verified/appropriately licensed or original reference image, title, step-by-step guide, checklist, and progress state.
- Guide fields: canvas setup; construction sketch; line art; brush name/size/opacity; layer order and actions; HEX colors; shading/highlights; clipping/blending; cleanup and export.
- Candidate categories: Anime Portrait, Anime Character, Cute Chibi, Nature & Lighting, Fantasy Scene.
- Do not treat search thumbnails as approved references or invent source links. Curated reference assets and detailed guides need verification before release.

## 4. Gallery — Personal Gallery + Public Portfolio
- Personal gallery and public portfolio are both desired.
- Artwork fields: title, date, category, optional notes, brushes/colors/layers.
- Categories/filters: Ibis Paint X Masterclass, 30 Mini Arts, Challenge Art, Original Artwork.
- Features requested: upload artwork from phone, before/after comparison, favorites, search, progress summary, artwork detail view, optional Desktop N Draw watermark, save/share controls.
- Every artwork needs an explicit Private/Public choice. Private is the safe default; public sharing only by user choice.
- Storage is intentionally undecided. Compare device storage and cloud storage before implementing. Warn that clearing browser data may remove local-only data; do not claim cloud backup exists.

## 5. Existing constraints
- Preserve original Desktop N Draw logo and premium yellow/deep-purple design.
- Keep mobile-first/PWA behavior, including `manifest.webmanifest` start URL `./` and `sw.js`.
- Do not modify or deploy the separate public website `https://www.desktopndraw.com/`.
- No deployment has been performed by creating this ZIP.
- Do not fake YouTube metrics, payment verification, persistent review storage, cloud backup, or episode/PDF links.

## Important implementation note
This document captures all currently approved improvement requirements. The included app frontend is the latest Session 2 ZIP; the improvements that require verified video/PDF URLs, curated artwork references, secure/public storage, or additional implementation are not represented as already completed. Review this plan and implement in the app only after the user authorizes the next step.


## Testing build: dummy links
- Ibis Paint course episodes and all 30 Mini Arts now show visibly labelled DEMO YouTube links and DEMO study-PDF links.
- The YouTube URLs deliberately contain `VIDEO_ID_PENDING` and are not real videos. The PDF link opens Google Drive home, not a lesson PDF.
- Replace every placeholder only after deployment succeeds and actual public episode/share links have been verified. Do not publish these demo links as final learning resources.
- No website changes or deployment were performed while preparing this ZIP.

## Current working build update (2026-10-11)
- Replaced demo episode links with the supplied EP 01–05 YouTube and PDF links.
- Episodes EP 06–30 no longer expose fake URLs; they display Coming Soon.
- Mini Arts no longer expose fake video IDs or Drive-home placeholders; they show Upload Pending until real links are supplied.
- Added the five user-supplied artwork reference images to `assets/` and built five detailed in-app tutorial cards with canvas setup, layer plans, brush recommendations, HEX palettes, shading, highlights and export steps.
- Challenge Shuffle selects a batch of five from the current five supplied references, enforcing at least two anime-related references. With only five references currently supplied, shuffle changes the batch ordering/selection only within this five-image pool; a larger pool is needed for genuinely new batches.
- Artwork completion state remains local to the browser/device.
- Not implemented in this build: authenticated private Art Review backend, cloud gallery storage, secure admin replies, verified checkout/payment delivery, and deployment. These need additional backend/service setup and must not be described as active.
