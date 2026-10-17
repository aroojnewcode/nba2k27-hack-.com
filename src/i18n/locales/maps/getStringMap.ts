import type { SiteLocale } from '../../../utils/locale';
import { deMap } from './deMap';
import { esMap } from './esMap';
import { frMap } from './frMap';
import { ptBrMap } from './ptBrMap';
import { forumUiMapForLocale } from './forumUiByLocale';
import { deMarketUiExtras, frMarketUiExtras, ptBrMarketUiExtras } from './marketUiExtras';

/** Merged English → locale dictionaries (strong tier). */
export function getStringMap(locale: SiteLocale): Readonly<Record<string, string>> {
  switch (locale) {
    case 'es':
      return { ...esMap, ...forumUiMapForLocale('es') };
    case 'pt-br':
      return { ...ptBrMap, ...ptBrMarketUiExtras, ...forumUiMapForLocale('pt-br') };
    case 'fr':
      return { ...frMap, ...frMarketUiExtras, ...forumUiMapForLocale('fr') };
    case 'de':
      return { ...deMap, ...deMarketUiExtras, ...forumUiMapForLocale('de') };
    default:
      return {};
  }
}
