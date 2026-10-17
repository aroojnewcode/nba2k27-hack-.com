import { en } from '../../en';
import { translateSafe } from '../../translateSafe';
import { ptBrMap } from '../maps/ptBrMap';
import { strongUiSlice } from './strongUiSlice';

export const ptBrOverrides = translateSafe(strongUiSlice(en), ptBrMap);
