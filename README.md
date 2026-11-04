# Haaps — website

Lead-generation website for **Haaps**, a digital marketing agency in Bangalore.
Built with Next.js (App Router) and Tailwind CSS, exported as a **static site** (plain HTML/CSS/JS),
so it runs on GitHub Pages, Hostinger or any normal web hosting.

## Pages

| Route | What's on it |
|---|---|
| `/` | Purple hero with tilted reels, services ticker, 8 expanding service panels, counters, AI automation, process, reels coverflow, testimonials, lead form |
| `/services/` | All 8 services in detail, each with "Get a quote" and WhatsApp buttons |
| `/about/` | Story, values, process, team |
| `/contact/` | Full lead form, contact cards, map, FAQ |

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # writes the finished website to the out/ folder
npm run lint
```

## Hosting

### GitHub Pages (automatic)

Every push to `main` builds the site and publishes it with `.github/workflows/deploy-pages.yml`.
The site appears at **https://haaps1.github.io/haaps/**.

One-time setup: repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.

### Hostinger (or any cPanel / Apache hosting)

1. Run `npm install` and then `npm run build` on your computer. Leave `NEXT_PUBLIC_BASE_PATH` empty.
2. Upload **everything inside the `out/` folder** (including the hidden `.htaccess`) to `public_html` in Hostinger's File Manager.

The site then runs at the root of your domain, e.g. `https://haaps.in/`.

## Leads (contact forms)

The site has no server, so forms work in one of two ways:

- **Default:** submitting opens WhatsApp with the visitor's details filled in, sent to `whatsappNumber` in `src/lib/site.ts`.
- **Email / Google Sheet:** create a free form on [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) and set
  `NEXT_PUBLIC_FORM_ENDPOINT` (plus `NEXT_PUBLIC_FORM_ACCESS_KEY` for Web3Forms). Leads then arrive by email.
  - For GitHub Pages, add them as repo **Settings → Secrets and variables → Actions → Variables** named `FORM_ENDPOINT` and `FORM_ACCESS_KEY`.
  - For a Hostinger build, put them in `.env.local` before running `npm run build` (see `.env.example`).

## Before going live

Search the code for `TODO` and `[` placeholders. The main ones:

- `src/lib/site.ts`: phone, WhatsApp number, email, address, social links and domain. The counter numbers in `stats` are dummy values.
- `src/app/about/page.tsx`: founding story, team names and photos.
- `src/app/contact/page.tsx`: FAQ answers and the map address.
- Testimonials (`src/components/Sections.tsx`) and reel thumbnails (`src/components/ReelsCoverflow.tsx`, hero reels in `src/app/page.tsx`).
