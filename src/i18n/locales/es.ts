import { buildLocale } from './buildLocale';
import { esMap } from './maps/esMap';
import { esOverrides } from './overrides/es';

export const es = buildLocale('es', esMap, esOverrides);
