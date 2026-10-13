# Art Review setup (Cloudflare, one time)

What it does: viewers send artwork (PNG, JPG or WebP, up to 5 MB) from the Art Review tab. Only you can see it, on www.your-site/admin/. Nothing is public.

## Files (all in the repo root)
- index.html (Art Review form now uploads for real)
- sw.js (skips /api and /admin)
- _headers
- admin/index.html (your private inbox)
- functions/_lib/util.js
- functions/api/submit.js
- functions/api/admin/list.js, image.js, update.js, delete.js

## Cloudflare steps
1. Cloudflare dashboard -> Storage & Databases -> KV -> Create a namespace, name it art-review.
2. Workers & Pages -> your Pages project -> Settings -> Bindings -> Add -> KV namespace.
   Variable name: ART_KV (exactly). Namespace: art-review. Save.
3. Same project -> Settings -> Variables and secrets -> Add. Type: Secret. Name: ADMIN_PASSWORD. Value: a long password only you know (12+ characters). Save.
4. Deployments -> latest deployment -> Retry deployment (bindings apply to new deployments).
5. Test: open /admin/ and log in. Then send a test artwork from the app and press Refresh in the inbox (new items can take up to a minute to appear).

## Limits (Cloudflare KV free plan)
- 1,000 writes per day. Each artwork uses 3 writes, so about 300 artworks per day.
- 1 GB storage, about 200 artworks of 5 MB. Delete artwork you have finished reviewing.
- Each person can send 5 artworks per hour.

## Privacy notes
- Only a nickname (optional), the question and the image are stored. No email or phone is collected.
- Add a Privacy Policy page before launch. India's DPDP Act treats anyone under 18 as a child and asks for verifiable parental consent when processing a child's personal data. Ask a lawyer how this applies to uploads.
