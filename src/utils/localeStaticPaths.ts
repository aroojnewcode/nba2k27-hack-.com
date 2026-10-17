import { LOCALES, type SiteLocale } from './locale';

export type LocaleRouteParams = {
  locale: string;
};

/** Static paths for `src/pages/[locale]/…` (all configured locales). */
export function localeStaticPaths() {
  return LOCALES.map((locale) => ({ params: { locale } }));
}

export function combineWithLocales<T extends Record<string, string | undefined>>(
  entries: { params: T }[],
): { params: T & LocaleRouteParams }[] {
  return localeStaticPaths().flatMap((loc) =>
    entries.map((entry) => ({
      params: {
        ...entry.params,
        locale: loc.params.locale,
      },
    })),
  );
}

export function localeFromParams(locale: string): SiteLocale {
  return locale as SiteLocale;
}
