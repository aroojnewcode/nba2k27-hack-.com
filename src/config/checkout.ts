import { CHECKOUT_URLS, ZADEYO_NBA_2K27_CHECKOUT } from './checkout-redirects.mjs';

export { ZADEYO_NBA_2K27_CHECKOUT };

/** ZADEYO affiliate checkout — used on all Buy / Get Hack / access CTAs. */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for /go/[slug]/ legacy redirect pages (still supported server-side). */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  nba2k27: 'nba-2k27',
  skinChanger: 'skin-changer',
  hwidSpoofer: 'hwid-spoofer',
  ugc: 'ugc',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Checkout URL for product CTAs (all products → NBA 2K27 on ZADEYO). */
export function checkoutPath(product: CheckoutProduct = 'nba2k27'): string {
  return CHECKOUT[product];
}

export const PRIMARY_CHECKOUT_PATH = ZADEYO_NBA_2K27_CHECKOUT;

/** Map internal product slugs to checkout URL (all → NBA 2K27 on ZADEYO). */
export function checkoutForSlug(_slug: string): string {
  return ZADEYO_NBA_2K27_CHECKOUT;
}

function checkoutFromGoPath(href: string): string {
  const match = href.match(/^\/go\/([^/?#]+)/);
  const slug = match?.[1];
  const product = (slug && CHECKOUT_SLUG_TO_PRODUCT[slug]) || 'nba2k27';
  return checkoutPath(product);
}

/** Resolve blog CTA or legacy href values to the ZADEYO checkout URL. */
export function resolveCheckoutHref(href: string): string {
  if (href.startsWith('/go/')) {
    return checkoutFromGoPath(href);
  }

  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }

  if (href.includes('zadeyo.com/go/UROOJ') || href.includes('zadeyo.com/products/nba-2k27')) {
    return ZADEYO_NBA_2K27_CHECKOUT;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}&`) || href.startsWith(`${url}/`)) {
      return checkoutPath(product);
    }
  }

  if (href.includes('%2Fproducts%2Fcloud-dma') || href.includes('/products/cloud-dma')) {
    return ZADEYO_NBA_2K27_CHECKOUT;
  }
  if (href.includes('%2Fproducts%2Fskin-changer') || href.includes('/products/skin-changer')) {
    return checkoutPath('skinChanger');
  }
  if (href.includes('%2Fproducts%2Fhwid-spoofer') || href.includes('/products/hwid-spoofer')) {
    return checkoutPath('hwidSpoofer');
  }
  if (href.includes('%2Fproducts%2Fugc') || href.includes('/products/ugc')) {
    return checkoutPath('ugc');
  }
  if (
    href.includes('%2Fproducts%2Fnba-2k27') ||
    href.includes('/products/nba-2k27') ||
    href.includes('%2Fproducts%2Fdota-2') ||
    href.includes('/products/dota-2')
  ) {
    return ZADEYO_NBA_2K27_CHECKOUT;
  }

  return href;
}
