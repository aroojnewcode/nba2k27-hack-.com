import { en } from '../../en';
import { translateSafe } from '../../translateSafe';
import { frMap } from '../maps/frMap';
import { strongUiSlice } from './strongUiSlice';

export const frOverrides = translateSafe(strongUiSlice(en), frMap);
