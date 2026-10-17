import { buildLocale } from './buildLocale';
import { deMap } from './maps/deMap';
import { deOverrides } from './overrides/de';

export const de = buildLocale('de', deMap, deOverrides);
