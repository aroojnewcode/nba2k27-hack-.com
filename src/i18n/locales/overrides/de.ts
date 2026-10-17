import { en } from '../../en';
import { translateSafe } from '../../translateSafe';
import { deMap } from '../maps/deMap';
import { strongUiSlice } from './strongUiSlice';

export const deOverrides = translateSafe(strongUiSlice(en), deMap);
