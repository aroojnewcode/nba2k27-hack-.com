import { getTranslations } from '../i18n';
import { SITE_DOMAIN as INDEXNOW_HOST_NAME } from './site';
import { normalizeSeoPath } from './pageSeo';
import { getPageSeoForLocale } from './localeSeo';
import { normalizeLocale, stripLocaleFromPath } from '../utils/locale';

export const SITE_ORIGIN = `https://${getTranslations('en').site.domain}`;

import { NBA_OG_IMAGE } from '../data/nbaImages';

export const DEFAULT_OG_IMAGE = NBA_OG_IMAGE;

export const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID as string | undefined;

/** @example @nba2k27hack */
export const TWITTER_SITE = import.meta.env.PUBLIC_TWITTER_SITE as string | undefined;

export const TWITTER_CREATOR = import.meta.env.PUBLIC_TWITTER_CREATOR as string | undefined;

/** Comma-separated profile URLs (X, YouTube, etc.) for Organization sameAs. */
export function getOrganizationSameAs(): string[] {
  const raw = import.meta.env.PUBLIC_ORG_SAME_AS as string | undefined;
  if (!raw?.trim()) return [];
  return raw
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

export const INDEXNOW_KEY = import.meta.env.INDEXNOW_KEY as string | undefined;

export function canonicalUrl(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return `${SITE_ORIGIN}${path}`;
}

export function absoluteAssetUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

export function resolvePageSeo(
  pathname: string,
  locale?: string | null,
): { title: string; description: string } {
  const loc = normalizeLocale(locale);
  const { path } = stripLocaleFromPath(pathname);
  const normalized = normalizeSeoPath(path);
  const entry = getPageSeoForLocale(loc, normalized);
  if (entry) return entry;
  const t = getTranslations(loc);
  return { title: t.site.title, description: t.site.description };
}

export function pageTitle(keyword: string, brand = getTranslations('en').site.name): string {
  const suffix = ` | ${brand}`;
  const max = 60;
  if (`${keyword}${suffix}`.length <= max) return `${keyword}${suffix}`;
  const trimmed = keyword.slice(0, Math.max(20, max - suffix.length - 1)).trim();
  return `${trimmed}${suffix}`;
}

export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;

export const RSS_FEED_PATH = '/rss.xml';

/** Used by IndexNow postbuild script. */
export const INDEXNOW_HOST = INDEXNOW_HOST_NAME;
