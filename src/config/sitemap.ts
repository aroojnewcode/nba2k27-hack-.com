import type { SitemapItem } from '@astrojs/sitemap';
import { blogPosts } from '../data/blog';
import { LOCALES } from '../utils/locale';
import { parseBlogDate } from '../utils/schema';

const LOCALELESS_ROUTE_PREFIXES = [
  '/blog/',
  '/products/',
  '/faq/',
  '/forum/',
  '/about/',
  '/support/',
  '/privacy/',
  '/terms/',
] as const;

function pathnameFromUrl(url: string): string {
  const path = new URL(url).pathname;
  return path.endsWith('/') ? path : `${path}/`;
}

function hasLocalePrefix(path: string): boolean {
  return LOCALES.some((loc) => path === `/${loc}/` || path.startsWith(`/${loc}/`));
}

function isLocalelessAppRoute(path: string): boolean {
  if (path === '/') return false;
  if (hasLocalePrefix(path)) return false;
  return LOCALELESS_ROUTE_PREFIXES.some((prefix) => path.startsWith(prefix) || path === prefix);
}

function blogSlugFromPath(path: string): string | undefined {
  const match = path.match(/\/blog\/([^/]+)\/$/);
  return match?.[1];
}

export function sitemapSerialize(item: SitemapItem): SitemapItem | undefined {
  const path = pathnameFromUrl(item.url);

  if (path.includes('/404') || path.startsWith('/go/') || path.includes('/rss.xml')) {
    return undefined;
  }

  if (path.startsWith('/forum/') && path !== '/forum/') {
    return undefined;
  }

  /** Bare `/` duplicates `/en/` and may still be flagged when hosts serve legacy redirect shells. */
  if (path === '/') {
    return undefined;
  }

  /** Legacy locale-less URLs (404 or 301 only — not valid sitemap entries). */
  if (isLocalelessAppRoute(path)) {
    return undefined;
  }

  if (path.endsWith('/forum/') && !path.match(/\/forum\/[^/]+\/$/)) {
    item.priority = 0.8;
    item.changefreq = 'daily';
    return item;
  }

  const blogSlug = blogSlugFromPath(path);
  if (blogSlug) {
    const post = blogPosts.find((p) => p.slug === blogSlug);
    item.priority = 0.7;
    item.changefreq = 'monthly';
    if (post) {
      item.lastmod = parseBlogDate(post.date);
    }
    return item;
  }

  if (path.endsWith('/blog/')) {
    item.priority = 0.9;
    item.changefreq = 'weekly';
    return item;
  }

  if (path.includes('/products/')) {
    item.priority = 0.8;
    item.changefreq = 'weekly';
    return item;
  }

  if (
    path.endsWith('/about/') ||
    path.endsWith('/support/') ||
    path.endsWith('/privacy/') ||
    path.endsWith('/terms/') ||
    path.endsWith('/faq/')
  ) {
    item.priority = 0.5;
    item.changefreq = 'yearly';
    return item;
  }

  if (path.endsWith('/en/') || path.match(/\/[a-z]{2}(-[a-z]+)?\/$/)) {
    item.priority = 1;
    item.changefreq = 'weekly';
    return item;
  }

  item.priority = 0.6;
  item.changefreq = 'monthly';
  return item;
}
