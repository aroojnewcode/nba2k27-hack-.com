import type { SiteLocale } from '../../../utils/locale';
import { deMap } from './deMap';
import { esMap } from './esMap';
import { frMap } from './frMap';
import { ptBrMap } from './ptBrMap';

/** Merged English → locale dictionaries (strong tier). */
export function getStringMap(locale: SiteLocale): Readonly<Record<string, string>> {
  switch (locale) {
    case 'es':
      return esMap;
    case 'pt-br':
      return ptBrMap;
    case 'fr':
      return frMap;
    case 'de':
      return deMap;
    default:
      return {};
  }
}
