import fs from 'node:fs';
import path from 'node:path';

/**
 * Plain Astro static builds write to `dist/`.
 * @astrojs/cloudflare writes static assets to `dist/client/`.
 */
export function resolveDistOutputDir(cwd = process.cwd()) {
  const dist = path.join(cwd, 'dist');
  const client = path.join(dist, 'client');

  const hasBuildArtifacts = (dir) =>
    fs.existsSync(dir) &&
    (fs.existsSync(path.join(dir, 'index.html')) ||
      fs.existsSync(path.join(dir, 'sitemap-0.xml')) ||
      fs.existsSync(path.join(dir, 'sitemap-index.xml')));

  if (hasBuildArtifacts(client)) return client;
  if (hasBuildArtifacts(dist)) return dist;
  if (fs.existsSync(client)) return client;
  return dist;
}

export function findSitemapSourceFile(distDir) {
  const numbered = path.join(distDir, 'sitemap-0.xml');
  if (fs.existsSync(numbered)) return numbered;

  if (!fs.existsSync(distDir)) return null;

  const match = fs
    .readdirSync(distDir)
    .filter((name) => /^sitemap-\d+\.xml$/i.test(name))
    .sort()[0];

  return match ? path.join(distDir, match) : null;
}
