import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const widths = [320, 400, 512, 640, 960];
const dirs = [
  'public/images/gameplay',
  'public/images/gameplay/hero',
  'public/images/blog',
];

async function optimizeDir(relativeDir) {
  const dir = path.join(root, relativeDir);
  if (!fs.existsSync(dir)) return;

  const files = fs
    .readdirSync(dir)
    .filter((file) => /\.(png|jpe?g)$/i.test(file) && !/-\d+\.webp$/i.test(file))
    .filter((file) => {
      const base = file.replace(/\.(png|jpe?g)$/i, '');
      const jpg = `${base}.jpg`;
      const jpeg = `${base}.jpeg`;
      if (/\.png$/i.test(file) && (fs.existsSync(path.join(dir, jpg)) || fs.existsSync(path.join(dir, jpeg)))) {
        return false;
      }
      return true;
    });

  await Promise.all(
    files.map(async (file) => {
      const input = path.join(dir, file);
      const base = file.replace(/\.(png|jpe?g)$/i, '');

      await Promise.all(
        widths.map(async (width) => {
          const output = path.join(dir, `${base}-${width}.webp`);
          await sharp(input)
            .resize({ width, withoutEnlargement: true })
            .webp({ quality: 82, effort: 4 })
            .toFile(output);
          console.log(`Wrote ${path.relative(root, output)}`);
        }),
      );
    }),
  );
}

for (const dir of dirs) {
  await optimizeDir(dir);
}

console.log('Image optimization complete.');
