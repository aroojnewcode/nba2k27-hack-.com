import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

const productHub = '/products/nba-2k27-hack/';
const productHubEn = '/en/products/nba-2k27-hack/';

export default defineConfig({
  site: 'https://nba2k27hack.net',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt-br', 'fr', 'de'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  redirects: {
    '/cheats/': productHubEn,
    '/cheats/lite/': productHubEn,
    '/cheats/pro/': productHubEn,
    '/cheats/elite/': `${productHubEn}elite/`,
    '/cheats/compare/': '/en/blog/nba-2k27-lite-vs-elite/',
    '/contact/': '/support/',
    '/blog/': '/en/blog/',
    '/faq/': '/en/faq/',
    '/forum/': '/en/forum/',
    '/about/': '/en/about/',
    '/support/': '/en/support/',
    '/privacy/': '/en/privacy/',
    '/terms/': '/en/terms/',
    '/products/nba-2k27-hack/': productHubEn,
    '/products/nba-2k27-hack/utilities/': `${productHubEn}utilities/`,
    '/products/nba-2k27-hack/elite/': `${productHubEn}elite/`,
    '/products/nba-2k27-hack/hwid-spoofer/': `${productHubEn}hwid-spoofer/`,
    '/products/nba-2k27-hack/unlock-all/': `${productHubEn}unlock-all/`,
    '/products/nba-2k27-hack/ugc/': `${productHubEn}ugc/`,
    '/products/dota-2-cheats/': productHubEn,
    '/products/dota-2-cheats/utilities/': `${productHubEn}utilities/`,
    '/products/dota-2-cheats/elite/': `${productHubEn}elite/`,
    '/products/dota-2-cheats/lite/': productHubEn,
    '/products/dota-2-cheats/pro/': productHubEn,
    '/products/dota-2-cheats/hwid-spoofer/': `${productHubEn}hwid-spoofer/`,
    '/products/dota-2-cheats/ugc/': `${productHubEn}ugc/`,
    '/products/dota-2-cheats/unlock-all/': `${productHubEn}unlock-all/`,
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
