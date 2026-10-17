import { LOCALES, type SiteLocale } from '../utils/locale';

/**
 * Full UI + marketing copy for these markets (see language switcher).
 * English is the source catalog; ES / PT-BR / FR / DE use merged strong string maps.
 */
export const STRONG_TRANSLATION_LOCALES: readonly SiteLocale[] = LOCALES;

/** Reserved for future locales (e.g. IT, NL): nav + buttons only, long-form stays English. */
export const LIGHT_TRANSLATION_LOCALES: readonly string[] = [];

export function isStrongTranslationLocale(locale?: string | null): boolean {
  const raw = (locale ?? 'en').toLowerCase();
  return STRONG_TRANSLATION_LOCALES.some((loc) => loc === raw || (raw === 'pt' && loc === 'pt-br'));
}

export function isLightTranslationLocale(locale?: string | null): boolean {
  const raw = (locale ?? '').toLowerCase();
  return LIGHT_TRANSLATION_LOCALES.includes(raw);
}

/** Blog / forum article bodies: light (English) on all locales until localized posts exist. */
export function useLightLongFormContent(_locale?: string | null): boolean {
  return true;
}

/** Product detail paragraphs, acquisition steps, and spec lists use strong maps when available. */
export function useStrongProductCopy(locale?: string | null): boolean {
  return isStrongTranslationLocale(locale);
}
