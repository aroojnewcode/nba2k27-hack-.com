export const LOCALES = ['en', 'es', 'pt-br', 'fr', 'de'] as const;

export type SiteLocale = (typeof LOCALES)[number];

export const localeLabels: Record<SiteLocale, string> = {
  en: 'English (EN)',
  es: 'Spanish (ES)',
  'pt-br': 'Portuguese — Brazil (PT-BR)',
  fr: 'French (FR)',
  de: 'German (DE)',
};

export const localeCodes: Record<SiteLocale, string> = {
  en: 'EN',
  es: 'ES',
  'pt-br': 'PT',
  fr: 'FR',
  de: 'DE',
};

export const hreflangTags: Record<SiteLocale, string> = {
  en: 'en',
  es: 'es',
  'pt-br': 'pt-BR',
  fr: 'fr',
  de: 'de',
};

import type { AstroGlobal } from 'astro';

/** Prefer `[locale]` route param so translations match the URL (static `[locale]` pages). */
export function pageLocale(astro: Pick<AstroGlobal, 'currentLocale' | 'params'>): SiteLocale {
  const fromParam = astro.params.locale;
  if (typeof fromParam === 'string' && fromParam.length > 0) {
    return normalizeLocale(fromParam);
  }
  return normalizeLocale(astro.currentLocale);
}

export function normalizeLocale(locale?: string | null): SiteLocale {
  const raw = (locale ?? 'en').toLowerCase();
  if (raw === 'pt' || raw === 'pt_br' || raw === 'pt-br') return 'pt-br';
  if (LOCALES.includes(raw as SiteLocale)) return raw as SiteLocale;
  return 'en';
}

export function htmlLang(locale: SiteLocale): string {
  return hreflangTags[locale];
}

/** Internal path with locale prefix (site uses `prefixDefaultLocale: true`). */
export function localizedInternalPath(locale: SiteLocale | string | null | undefined, pathname: string): string {
  const loc = normalizeLocale(locale);
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return `/${loc}${path === '/' ? '/' : path}`;
}

/** Strip leading locale segment from pathname (trailing slash preserved). */
export function stripLocaleFromPath(pathname: string): { locale: SiteLocale; path: string } {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;

  for (const loc of LOCALES) {
    const prefix = `/${loc}`;
    if (path === prefix || path === `${prefix}/`) {
      return { locale: loc, path: '/' };
    }
    if (path.startsWith(`${prefix}/`)) {
      const rest = path.slice(prefix.length);
      return { locale: loc, path: rest.startsWith('/') ? rest : `/${rest}` };
    }
  }

  return { locale: 'en', path };
}
