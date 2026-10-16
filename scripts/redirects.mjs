/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/nba-2k27-hack/'],
  ['/cheats/', '/products/nba-2k27-hack/'],
  ['/cheats/lite', '/products/nba-2k27-hack/'],
  ['/cheats/lite/', '/products/nba-2k27-hack/'],
  ['/cheats/pro', '/products/nba-2k27-hack/'],
  ['/cheats/pro/', '/products/nba-2k27-hack/'],
  ['/cheats/elite', '/products/nba-2k27-hack/elite/'],
  ['/cheats/elite/', '/products/nba-2k27-hack/elite/'],
  ['/cheats/compare', '/blog/nba-2k27-lite-vs-elite/'],
  ['/cheats/compare/', '/blog/nba-2k27-lite-vs-elite/'],
  ['/products/dota-2-cheats', '/products/nba-2k27-hack/'],
  ['/products/dota-2-cheats/', '/products/nba-2k27-hack/'],
  ['/products/dota-2-cheats/utilities', '/products/nba-2k27-hack/utilities/'],
  ['/products/dota-2-cheats/utilities/', '/products/nba-2k27-hack/utilities/'],
  ['/products/dota-2-cheats/elite', '/products/nba-2k27-hack/elite/'],
  ['/products/dota-2-cheats/elite/', '/products/nba-2k27-hack/elite/'],
  ['/products/nba-2k27-hack/utilities', '/products/nba-2k27-hack/utilities/'],
  ['/products/nba-2k27-hack', '/products/nba-2k27-hack/'],
  ['/products/nba-2k27-hack/account-recovery', '/products/nba-2k27-hack/ugc/'],
  ['/products/nba-2k27-hack/account-recovery/', '/products/nba-2k27-hack/ugc/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
