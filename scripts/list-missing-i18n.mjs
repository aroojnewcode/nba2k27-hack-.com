import { readFileSync } from 'node:fs';

const strings = readFileSync('scripts/i18n-en-strings.txt', 'utf8')
  .split('\n')
  .map((s) => s.trim())
  .filter(
    (s) =>
      s &&
      !s.startsWith('#') &&
      !s.startsWith('/') &&
      !s.includes('.ts') &&
      !s.includes('@') &&
      !s.startsWith('sm:') &&
      s.length > 2 &&
      !/^[0-9]+$/.test(s) &&
      s !== 'EN' &&
      s !== 'nba2k27hack.net',
  );

const mapSrc = readFileSync('src/i18n/locales/maps/esMap.ts', 'utf8');
const keys = [...mapSrc.matchAll(/^  '((?:\\'|[^'])*)':/gm)].map((m) => m[1].replace(/\\'/g, "'"));
const keySet = new Set(keys);
const missing = strings.filter((s) => !keySet.has(s));
console.log('translatable', strings.length, 'mapped', strings.length - missing.length, 'missing', missing.length);
for (const line of missing) console.log(line);
