import type { Translations } from '../types';
import { en } from '../en';
import { deepMerge } from '../deepMerge';
import { translateSafe } from '../translateSafe';
import { BLOG_INDEX_TITLE_BY_LOCALE, HOME_SEO_BY_LOCALE } from '../../config/localeSeo';
import type { SiteLocale } from '../../utils/locale';
import { localeCodes } from '../../utils/locale';
import { getStringMap } from './maps/getStringMap';
import { isStrongTranslationLocale } from '../translationPolicy';

export function buildLocale(
  locale: SiteLocale,
  map?: Readonly<Record<string, string>>,
  extras: Partial<Translations> = {},
): Translations {
  const stringMap = map ?? getStringMap(locale);
  const translated = translateSafe(en, isStrongTranslationLocale(locale) ? stringMap : {});
  const home = HOME_SEO_BY_LOCALE[locale];
  const blogTitle = BLOG_INDEX_TITLE_BY_LOCALE[locale];

  const blogHomeTitles: Record<SiteLocale, string> = {
    en: 'BLOGS AND UPDATES',
    es: 'BLOG Y ACTUALIZACIONES',
    'pt-br': 'BLOG E ATUALIZAÇÕES',
    fr: 'BLOG ET ACTUALITÉS',
    de: 'BLOG & UPDATES',
  };

  return deepMerge(translated, {
    site: {
      ...translated.site,
      title: home.title,
      description: home.description,
    },
    blog: {
      ...translated.blog,
      title: blogTitle,
      latestTitle: blogTitle,
      homeTitle: blogHomeTitles[locale],
    },
    ui: {
      ...translated.ui,
      languageCode: localeCodes[locale],
    },
    ...extras,
  });
}
