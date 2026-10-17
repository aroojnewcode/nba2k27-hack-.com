import { buildLocale } from './buildLocale';
import { frMap } from './maps/frMap';
import { frOverrides } from './overrides/fr';

export const fr = buildLocale('fr', frMap, frOverrides);
