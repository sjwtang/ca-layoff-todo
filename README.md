# I Got Laid Off

A simple starting guide for people laid off in California — a day / week / month checklist of the most urgent logistical steps, with expandable details and official source links.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43127](http://127.0.0.1:43127).

## Build

```bash
npm run build
npm run preview
```

## Contact form (email delivery)

Suggestions from the footer form are emailed via [Formspree](https://formspree.io):

1. Create a free Formspree form and set the notification email to yours.
2. Copy the form endpoint (looks like `https://formspree.io/f/xxxxxxxx`).
3. Create a `.env` file in the project root:

```bash
cp .env.example .env
```

4. Set `VITE_FORMSPREE_ENDPOINT` to that URL, then restart the dev server.

## Notes

- Checkmarks are stored in the browser (`localStorage`) only — nothing is sent to a server.
- The dog doodle and a custom handwritten font can be dropped in later; the site currently uses Caveat + Patrick Hand from Google Fonts.

This site is general information, not legal advice.
