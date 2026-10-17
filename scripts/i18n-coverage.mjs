/**
 * Reports strong-map coverage for ES / PT-BR / FR / DE (keys vs scripts/i18n-en-strings.txt).
 * Run: node scripts/i18n-coverage.mjs
 */
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { esMap } from '../src/i18n/locales/maps/esMap.ts';
import { deMap } from '../src/i18n/locales/maps/deMap.ts';
import { frMap } from '../src/i18n/locales/maps/frMap.ts';
import { ptBrMap } from '../src/i18n/locales/maps/ptBrMap.ts';

const maps = { es: esMap, de: deMap, fr: frMap, 'pt-br': ptBrMap };

const raw = readFileSync(new URL('./i18n-en-strings.txt', import.meta.url), 'utf8');
const strings = raw
  .split('\n')
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith('#') && !line.startsWith('/') && !line.includes('.ts'));

for (const [loc, map] of Object.entries(maps)) {
  let hit = 0;
  for (const s of strings) {
    if (map[s]) hit++;
  }
  const pct = strings.length ? ((100 * hit) / strings.length).toFixed(1) : '0';
  console.log(`${loc}: ${hit}/${strings.length} (${pct}%) strong-map coverage`);
}
