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

**Deploy:** Publish only the **`dist/`** folder (Astro output). Do not upload the repo root—especially the legacy `/index.html` at project root, which is not part of the site.

Optional after build: `node scripts/seo-baseline.mjs` refreshes [`.seo-baseline/fields.txt`](.seo-baseline/fields.txt) for SEO regression checks.

## SEO & search consoles

1. Copy `.env.example` to `.env` for local builds (verification tags are baked in at build time).
2. Set the **same variables** in **Cloudflare Pages → Settings → Environment variables** (Production, and Preview if you want them on preview builds):
   - `PUBLIC_GOOGLE_SITE_VERIFICATION` — `content` value from the HTML tag in [Google Search Console](https://search.google.com/search-console)
   - `PUBLIC_BING_SITE_VERIFICATION` — `msvalidate.01` content from [Bing Webmaster Tools](https://www.bing.com/webmasters)
   - `INDEXNOW_KEY` — random 32+ character string (letters/numbers)
   - `INDEXNOW_HOST` — `nba2k27hack.net` (optional; default in `scripts/indexnow.mjs`)
   - `PUBLIC_DISCORD_INVITE_URL` — your Discord invite (hero **Join Discord** button)
3. Trigger a **production build** after env vars are set so meta verification tags and IndexNow run (`npm run build` writes `dist/{INDEXNOW_KEY}.txt` and pings IndexNow when the key is set).
4. Confirm `https://nba2k27hack.net/{INDEXNOW_KEY}.txt` returns the key as plain text.
5. Submit `https://nba2k27hack.net/sitemap.xml` in GSC and Bing.
6. Forum **hub** (`/forum/`) is in the sitemap; thread URLs are `noindex, follow` and **excluded** from the sitemap.
7. Re-run Lighthouse / PageSpeed on the live URL after deploy (CDN/Brotli affects performance scores).

Redirects for legacy `/products/dota-2-cheats/*` and `/cheats/*` live in `astro.config.mjs` only.
