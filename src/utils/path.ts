import { PRODUCT_BASE } from '../config/site';
import { LOCALES, localizedInternalPath, normalizeLocale } from './locale';

function hasLocalePrefix(pathname: string): boolean {
  for (const loc of LOCALES) {
    const prefix = `/${loc}`;
    if (pathname === prefix || pathname === `${prefix}/` || pathname.startsWith(`${prefix}/`)) {
      return true;
    }
  }
  return false;
}

/** Normalize internal paths to match trailingSlash: 'always' and canonical URLs. */
export function withTrailingSlash(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }
  const [pathname, hash = ''] = path.split('#');
  const normalized = pathname === '/' || pathname.endsWith('/') ? pathname : `${pathname}/`;
  return hash ? `${normalized}#${hash}` : normalized;
}

/** Former /cheats/* URLs → current routes (301 targets match astro.config + scripts/redirects.mjs). */
export const LEGACY_PATH_MAP: Record<string, string> = {
  '/cheats': PRODUCT_BASE,
  '/cheats/': PRODUCT_BASE,
  '/cheats/lite': PRODUCT_BASE,
  '/cheats/lite/': PRODUCT_BASE,
  '/cheats/pro': PRODUCT_BASE,
  '/cheats/pro/': PRODUCT_BASE,
  '/cheats/elite': `${PRODUCT_BASE}elite/`,
  '/cheats/elite/': `${PRODUCT_BASE}elite/`,
  '/cheats/compare': '/blog/nba-2k27-lite-vs-elite/',
  '/cheats/compare/': '/blog/nba-2k27-lite-vs-elite/',
  '/contact': '/support/',
  '/contact/': '/support/',
};

export function normalizeInternalPath(href: string, locale?: string | null): string {
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('/go/')) {
    return href;
  }

  const hashIndex = href.indexOf('#');
  const rawPath = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : '';

  let pathname = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  pathname = LEGACY_PATH_MAP[pathname] ?? pathname;
  pathname = withTrailingSlash(pathname);

  if (!hasLocalePrefix(pathname)) {
    pathname = localizedInternalPath(locale ?? 'en', pathname);
  }

  return pathname + hash;
}

export const ROUTES = {
  home: '/',
  blog: '/blog/',
  forum: '/forum/',
  products: PRODUCT_BASE,
  productsElite: `${PRODUCT_BASE}elite/`,
  productsUtilities: `${PRODUCT_BASE}utilities/`,
  faq: '/faq/',
  terms: '/terms/',
  about: '/about/',
  support: '/support/',
  privacy: '/privacy/',
} as const;

export function blogPostPath(slug: string, locale?: string | null): string {
  return localizedInternalPath(locale ?? 'en', `/blog/${slug}/`);
}

export function forumPostPath(slug: string, locale?: string | null): string {
  return localizedInternalPath(locale ?? 'en', `/forum/${slug}/`);
}

export function forumIndexPath(locale?: string | null, category?: string): string {
  const base = localizedInternalPath(locale ?? 'en', '/forum/');
  if (!category || category === 'all') return base;
  const join = base.includes('?') ? '&' : '?';
  return `${base}${join}category=${encodeURIComponent(category)}`;
}

export function localizedRoute(
  locale: string | null | undefined,
  route: (typeof ROUTES)[keyof typeof ROUTES],
): string {
  return localizedInternalPath(normalizeLocale(locale), route);
}

/** @deprecated Use productPath — cheat tier pages live under products. */
export function cheatPath(slug: string, locale?: string | null): string {
  return productPath(slug, locale);
}

export function productPath(slug: string, locale?: string | null): string {
  return localizedInternalPath(locale ?? 'en', `${PRODUCT_BASE}${slug}/`);
}

export function productsUtilitiesPath(locale?: string | null): string {
  return localizedInternalPath(locale ?? 'en', `${PRODUCT_BASE}utilities/`);
}
