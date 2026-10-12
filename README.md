# I Got Laid Off

A simple starting guide for people laid off in California — a day / week / month checklist of the most urgent logistical steps, with expandable details and official source links.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Push this repo to GitHub (use **Create repo** in the Cursor agent view if you haven’t yet).
2. In [Vercel](https://vercel.com): **Add New Project** → import the GitHub repo.
3. Framework preset: **Vite** (build `npm run build`, output `dist`).
4. Add env var `VITE_FORMSPREE_ENDPOINT` (see below), then Deploy.
5. `vercel.json` already rewrites routes so `/contact` works as a SPA.

## Contact form (email delivery)

Suggestions from the contact form are emailed via [Formspree](https://formspree.io):

1. Create a free Formspree form and set the notification email to yours.
2. Copy the form endpoint (looks like `https://formspree.io/f/xxxxxxxx`).
3. Locally: `cp .env.example .env` and set `VITE_FORMSPREE_ENDPOINT`, then restart the dev server.
4. On Vercel: Project → Settings → Environment Variables → add the same `VITE_FORMSPREE_ENDPOINT`, then redeploy.

## Notes

- Checkmarks are stored in the browser (`localStorage`) only — nothing is sent to a server.
- Unique visitor numbers are assigned once per browser and remembered in `localStorage` so refreshes don’t re-count you.
- The dog doodle can be dropped in later; the site uses Inter Display.

This site is general information, not legal advice.
