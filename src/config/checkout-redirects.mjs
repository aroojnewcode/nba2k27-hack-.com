/** ZADEYO affiliate checkout — all product CTAs resolve here. */
export const ZADEYO_NBA_2K27_CHECKOUT =
  'https://zadeyo.com/go/UROOJ?to=%2Fproducts%2Fnba-2k27';

/** Checkout destinations keyed by internal product id (server-side redirect targets). */
export const CHECKOUT_URLS = {
  nba2k27: ZADEYO_NBA_2K27_CHECKOUT,
  skinChanger: ZADEYO_NBA_2K27_CHECKOUT,
  hwidSpoofer: ZADEYO_NBA_2K27_CHECKOUT,
  ugc: ZADEYO_NBA_2K27_CHECKOUT,
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/nba-2k27', CHECKOUT_URLS.nba2k27],
  ['/go/nba-2k27/', CHECKOUT_URLS.nba2k27],
  ['/go/dota-2', CHECKOUT_URLS.nba2k27],
  ['/go/dota-2/', CHECKOUT_URLS.nba2k27],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
