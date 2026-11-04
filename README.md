# Haaps — website

Lead-generation website for **Haaps**, a digital marketing agency in Bangalore.
Built with Next.js (App Router) and Tailwind CSS.

## Pages

| Route | What's on it |
|---|---|
| `/` | Purple hero with tilted reels, services ticker, 8 expanding service panels, counters, AI automation, process, reels coverflow, testimonials, lead form |
| `/services` | All 8 services in detail, each with "Get a quote" and WhatsApp buttons |
| `/about` | Story, values, process, team |
| `/contact` | Full lead form, contact cards, map, FAQ |

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Before going live

Search the code for `TODO` and `[` placeholders. The main ones:

- `src/lib/site.ts` — phone, WhatsApp number, email, address, social links, domain. The counter numbers in `stats` are dummy values.
- `src/app/about/page.tsx` — founding story and team names/photos.
- `src/app/contact/page.tsx` — FAQ answers and the map address.
- Testimonials (`src/components/Sections.tsx`) and reel thumbnails (`src/components/ReelsCoverflow.tsx`, hero reels in `src/app/page.tsx`).

## Leads

The forms post to `/api/lead`. Set `LEAD_WEBHOOK_URL` (see `.env.example`) to forward each lead as JSON — for example to a Google Apps Script that appends to a Google Sheet, or a Zapier/Make webhook that emails the team. Without it, leads are only written to the server log.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com). Add `LEAD_WEBHOOK_URL` under Project → Settings → Environment Variables.
