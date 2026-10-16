import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const source = path.join(root, 'public/images/gameplay/nba-2k27-park-scoreboard.png');
const outDir = path.join(root, 'public/images/og');
const output = path.join(outDir, 'nba-2k27-hack-og.webp');

if (!fs.existsSync(source)) {
  console.warn('generate-og-image: source PNG missing, skipping.');
  process.exit(0);
}

fs.mkdirSync(outDir, { recursive: true });

await sharp(source)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .webp({ quality: 86, effort: 4 })
  .toFile(output);

console.log(`Wrote ${path.relative(root, output)} (1200×630)`);
