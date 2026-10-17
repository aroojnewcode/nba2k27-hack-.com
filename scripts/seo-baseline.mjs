/**
 * Regenerate .seo-baseline/fields.txt from dist HTML after `npm run build`.
 * Usage: node scripts/seo-baseline.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { resolveDistOutputDir } from './resolve-dist-output.mjs';

const root = process.cwd();
const distDir = resolveDistOutputDir(root);

const routes = [
  'index.html',
  'blog/index.html',
  'faq/index.html',
  'products/nba-2k27-hack/index.html',
  'products/nba-2k27-hack/elite/index.html',
  'blog/nba-2k27-hack-setup-guide/index.html',
];

function extract(html, pattern) {
  const m = html.match(pattern);
  return m ? m[1].replace(/&amp;/g, '&').trim() : '';
}

const blocks = [];

for (const rel of routes) {
  const filePath = path.join(distDir, rel);
  if (!fs.existsSync(filePath)) {
    console.warn(`seo-baseline: skip missing ${rel}`);
    continue;
  }
  const html = fs.readFileSync(filePath, 'utf8');
  const title = extract(html, /<title>([^<]*)<\/title>/i);
  const description = extract(html, /<meta name="description" content="([^"]*)"/i);
  const canonical = extract(html, /<link rel="canonical" href="([^"]*)"/i);
  const robots = extract(html, /<meta name="robots" content="([^"]*)"/i);
  const label = rel === 'index.html' ? '/' : `/${rel.replace(/index\.html$/, '')}`;

  blocks.push(
    `=== ${label} ===`,
    title,
    description,
    canonical,
    robots,
    '1',
    '1',
    '',
  );
}

const outDir = path.join(root, '.seo-baseline');
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'fields.txt');
fs.writeFileSync(outPath, blocks.join('\n'), 'utf8');
console.log(`seo-baseline: wrote ${path.relative(root, outPath)} (${routes.length} routes)`);
