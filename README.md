# NBA 2K27 HACK

Marketing site for **nba2k27hack.net** — Astro + Tailwind.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:4321/ or http://127.0.0.1:4321/ (first start can take ~15–30s while Astro compiles).

### Localhost shows “Error” or won’t load

A stuck Astro process on port **4321** often causes this (browser gets a blank error page instead of the site).

```bash
npx astro dev stop
npm run dev
```

If it still says another server is running:

```bash
npm run dev:reset
```

Wait until the terminal prints `astro … ready` and the Local URL, then refresh. The **home page** can take up to ~30s on the first request while Vite compiles. If `npm` fails with **ENOSPC**, free disk space on `C:` and try again.

## Build

```bash
npm run build
npm run preview
```

## SEO & search consoles

1. Copy `.env.example` to `.env` (and set the same variables in your host’s production env).
2. Required for ownership + indexing:
   - `PUBLIC_GOOGLE_SITE_VERIFICATION` — HTML tag value from [Google Search Console](https://search.google.com/search-console)
   - `PUBLIC_BING_SITE_VERIFICATION` — `msvalidate.01` content from [Bing Webmaster Tools](https://www.bing.com/webmasters)
   - `INDEXNOW_KEY` — random 32+ char string; `npm run build` writes `dist/{KEY}.txt` and pings IndexNow (host must serve that file at `https://nba2k27hack.net/{KEY}.txt`)
3. After deploy, submit `https://nba2k27hack.net/sitemap.xml` in GSC and Bing.
4. Forum **hub** (`/forum/`) is in the sitemap; thread URLs are `noindex, follow` and **excluded** from the sitemap.
5. Re-run Lighthouse on the live URL after deploy (CDN/Brotli affects performance scores).

Redirects for legacy `/products/dota-2-cheats/*` and `/cheats/*` live in `astro.config.mjs` only.
