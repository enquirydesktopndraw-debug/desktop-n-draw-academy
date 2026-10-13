# Deploying the new app (separate from the old one)

The old app (desktop-n-draw-app.pages.dev) stays untouched.

## 1. New GitHub repo
- Create a new repository, for example desktop-n-draw-academy (Private is fine).
- Upload everything from this folder, keeping the folders (assets, functions, admin).
  Easiest from a computer: unzip, then drag all files and folders into GitHub's "Upload files".

## 2. New Cloudflare Pages project
- Workers & Pages -> Create -> Pages -> Connect to Git -> choose the new repo.
- Production branch: main. Build command: leave empty. Build output directory: .  (a single dot)
- Save and Deploy. You get a new link ending in .pages.dev.

## 3. Turn on Art Review
Follow ART_REVIEW_SETUP.md (KV namespace named ART_KV, secret ADMIN_PASSWORD, then Retry deployment).

## 4. Test on two Android phones (Chrome)
- Home: Subscribe and Share buttons work.
- Install app appears in the Chrome menu (and the Install app button on Home).
- PDFs tab opens www.desktopndraw.com.
- Learn and Challenges look and work as before.
- Studio: open "Draw an apple" on Home, go through all steps, close the app, reopen: it resumes where you stopped.
- Art Review: send a test artwork, then open /admin/ and see it.

## 5. Go live
- Share the new link. When ready, you can point your own domain to this project.
