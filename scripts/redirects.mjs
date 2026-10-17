/** Static path redirects (301). Keys are pathname without query/hash. */
const productHubEn = '/en/products/nba-2k27-hack/';

export const PATH_REDIRECTS = new Map([
  ['/blog', '/en/blog/'],
  ['/blog/', '/en/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', productHubEn],
  ['/cheats/', productHubEn],
  ['/cheats/lite', productHubEn],
  ['/cheats/lite/', productHubEn],
  ['/cheats/pro', productHubEn],
  ['/cheats/pro/', productHubEn],
  ['/cheats/elite', `${productHubEn}elite/`],
  ['/cheats/elite/', `${productHubEn}elite/`],
  ['/cheats/compare', '/en/blog/nba-2k27-lite-vs-elite/'],
  ['/cheats/compare/', '/en/blog/nba-2k27-lite-vs-elite/'],
  ['/products/dota-2-cheats', productHubEn],
  ['/products/dota-2-cheats/', productHubEn],
  ['/products/dota-2-cheats/utilities', `${productHubEn}utilities/`],
  ['/products/dota-2-cheats/utilities/', `${productHubEn}utilities/`],
  ['/products/dota-2-cheats/elite', `${productHubEn}elite/`],
  ['/products/dota-2-cheats/elite/', `${productHubEn}elite/`],
  ['/products/nba-2k27-hack', productHubEn],
  ['/products/nba-2k27-hack/', productHubEn],
  ['/products/nba-2k27-hack/utilities', `${productHubEn}utilities/`],
  ['/products/nba-2k27-hack/utilities/', `${productHubEn}utilities/`],
  ['/products/nba-2k27-hack/elite', `${productHubEn}elite/`],
  ['/products/nba-2k27-hack/elite/', `${productHubEn}elite/`],
  ['/products/nba-2k27-hack/hwid-spoofer', `${productHubEn}hwid-spoofer/`],
  ['/products/nba-2k27-hack/hwid-spoofer/', `${productHubEn}hwid-spoofer/`],
  ['/products/nba-2k27-hack/unlock-all', `${productHubEn}unlock-all/`],
  ['/products/nba-2k27-hack/unlock-all/', `${productHubEn}unlock-all/`],
  ['/products/nba-2k27-hack/ugc', `${productHubEn}ugc/`],
  ['/products/nba-2k27-hack/ugc/', `${productHubEn}ugc/`],
  ['/products/nba-2k27-hack/account-recovery', `${productHubEn}ugc/`],
  ['/products/nba-2k27-hack/account-recovery/', `${productHubEn}ugc/`],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

/** Non-locale forum URLs → English forum (pages live under /en/forum/). */
export function resolveForumLegacyRedirect(pathname) {
  if (pathname === '/forum' || pathname === '/forum/') {
    return '/en/forum/';
  }

  const match = /^\/forum\/([^/]+)\/?$/.exec(pathname);
  if (match?.[1]) {
    return `/en/forum/${match[1]}/`;
  }

  return null;
}

export function resolvePathRedirect(pathname) {
  const forumLegacy = resolveForumLegacyRedirect(pathname);
  if (forumLegacy) return forumLegacy;

  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
