// Copies the files that must stay at their old URLs into dist/ after the build.
import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
for (const f of ['demo', 'assets', 'privacy.html', 'impressum.html', '.nojekyll']) {
  if (!existsSync(join(root, f))) continue;
  cpSync(join(root, f), join(dist, f), { recursive: true });
}
console.log('copy-static: done');
