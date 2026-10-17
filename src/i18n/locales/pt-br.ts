import { buildLocale } from './buildLocale';
import { ptBrMap } from './maps/ptBrMap';
import { ptBrOverrides } from './overrides/pt-br';

export const ptBr = buildLocale('pt-br', ptBrMap, ptBrOverrides);
