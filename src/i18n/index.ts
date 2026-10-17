export type { Translations } from './types';
export { en } from './en';
import { en } from './en';
import { es } from './locales/es';
import { ptBr } from './locales/pt-br';
import { fr } from './locales/fr';
import { de } from './locales/de';
import type { Translations } from './types';
import { LOCALES, localeLabels, normalizeLocale, type SiteLocale } from '../utils/locale';

export { LOCALES, localeLabels, normalizeLocale };
export {
  STRONG_TRANSLATION_LOCALES,
  LIGHT_TRANSLATION_LOCALES,
  isStrongTranslationLocale,
  isLightTranslationLocale,
  useLightLongFormContent,
  useStrongProductCopy,
} from './translationPolicy';
export type { SiteLocale };

const translations: Record<SiteLocale, Translations> = {
  en,
  es,
  'pt-br': ptBr,
  fr,
  de,
};

export function getTranslations(locale?: string | null): Translations {
  return translations[normalizeLocale(locale)] ?? en;
}

/** @deprecated Use getTranslations(Astro.currentLocale ?? 'en') in Astro files. */
export const t = en;

export function avatarSrc(style: string, seed: string) {
  return `https://api.dicebear.com/9.x/${style}/png?seed=${seed}&size=28&backgroundColor=0a0d10,7f3dee,181f26,e9a82f,11161b`;
}
