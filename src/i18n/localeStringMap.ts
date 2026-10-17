import { normalizeLocale } from '../utils/locale';
import { getStringMap } from './locales/maps/getStringMap';
import { isStrongTranslationLocale } from './translationPolicy';

/** Map a single English UI string to the active locale (falls back to English). */
export function localizeUiString(text: string, locale?: string | null): string {
  const loc = normalizeLocale(locale);
  if (loc === 'en' || !isStrongTranslationLocale(loc)) return text;
  const map = getStringMap(loc);
  return map[text] ?? text;
}

const SKIP_OBJECT_KEYS = new Set(['slug', 'href', 'src', 'icon', 'kind', 'variant', 'type']);

export function localizeUiStrings<T>(value: T, locale?: string | null, parentKey?: string): T {
  const loc = normalizeLocale(locale);
  if (loc === 'en' || !isStrongTranslationLocale(loc)) return value;

  if (typeof value === 'string') {
    if (parentKey && SKIP_OBJECT_KEYS.has(parentKey)) return value;
    return localizeUiString(value, loc) as T;
  }
  if (Array.isArray(value)) {
    return value.map((entry) => localizeUiStrings(entry, loc)) as T;
  }
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(value)) {
      out[key] = localizeUiStrings(child, loc, key);
    }
    return out as T;
  }
  return value;
}
