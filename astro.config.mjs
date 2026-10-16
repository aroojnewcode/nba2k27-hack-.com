import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

const productHub = '/products/nba-2k27-hack/';

export default defineConfig({
  site: 'https://nba2k27hack.net',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': productHub,
    '/cheats/lite/': productHub,
    '/cheats/pro/': productHub,
    '/cheats/elite/': `${productHub}elite/`,
    '/cheats/compare/': '/blog/nba-2k27-lite-vs-elite/',
    '/contact/': '/support/',
    '/products/dota-2-cheats/': productHub,
    '/products/dota-2-cheats/utilities/': `${productHub}utilities/`,
    '/products/dota-2-cheats/elite/': `${productHub}elite/`,
    '/products/dota-2-cheats/lite/': productHub,
    '/products/dota-2-cheats/pro/': productHub,
    '/products/dota-2-cheats/hwid-spoofer/': `${productHub}hwid-spoofer/`,
    '/products/dota-2-cheats/ugc/': `${productHub}ugc/`,
    '/products/dota-2-cheats/unlock-all/': `${productHub}unlock-all/`,
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => {
        if (page.includes('/404') || page.includes('/go/')) return false;
        try {
          const path = new URL(page, 'https://nba2k27hack.net').pathname.replace(/\/$/, '') || '/';
          if (path.startsWith('/forum/') && path !== '/forum') return false;
        } catch {
          return true;
        }
        return true;
      },
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
      assetsInlineLimit: 2048,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('embla-carousel') || id.includes('@starwind-ui/runtime')) {
              return 'carousel';
            }
          },
        },
      },
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
