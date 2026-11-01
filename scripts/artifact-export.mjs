// Copies dist/ to dist-artifact/ with relative links, so the manual can be published as a
// claude.ai Artifact (unknown host path). Run after `npm run build`.
// - "/LUMAMATTERS-manual/x/" in HTML -> "../x/index.html" (no reliance on directory index)
// - the search script computes its base from the page's favicon link at runtime
// - demo/ is left out; demo links point to the public demo on GitHub Pages
import { cpSync, rmSync, readdirSync, readFileSync, writeFileSync, statSync, renameSync, mkdirSync } from 'node:fs';
import { join, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'dist');
const out = join(root, 'dist-artifact');
const BASE = '/LUMAMATTERS-manual/';
const PUBLIC = 'https://lmxtinker.github.io/LUMAMATTERS-manual/';

// clear the contents, not the folder itself (a shell may have it open on Windows)
mkdirSync(out, { recursive: true });
for (const n of readdirSync(out)) rmSync(join(out, n), { recursive: true, force: true });
cpSync(src, out, { recursive: true, filter: (p) => !relative(src, p).startsWith('demo') && !p.endsWith('.xml') && !p.endsWith('404.html') });

// the Artifact service reserves top-level names starting with "_": _astro/ -> astro/
renameSync(join(out, '_astro'), join(out, 'astro'));
rmSync(join(out, '.nojekyll'), { force: true });

function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

for (const file of walk(out)) {
  const rel = relative(out, file).split(sep).join('/');
  const depth = rel.split('/').length - 1;
  if (file.endsWith('.html')) {
    const up = depth ? '../'.repeat(depth) : './';
    let html = readFileSync(file, 'utf8');
    html = html.replaceAll(`${BASE}demo/`, `${PUBLIC}demo/`);
    // page links: directory -> directory/index.html, keep #anchors
    html = html.replace(/(href|src)="\/LUMAMATTERS-manual\/([^"#?]*)([^"]*)"/g, (_, attr, path, rest) => {
      const target = path === '' || path.endsWith('/') ? `${path}index.html` : path;
      return `${attr}="${up}${target}${rest}"`;
    });
    html = html.replace(/(?<!github\.io)\/LUMAMATTERS-manual\//g, up); // srcset and other leftovers, not full public URLs
    writeFileSync(file, html);
  } else if (file.endsWith('.css')) {
    writeFileSync(file, readFileSync(file, 'utf8').replaceAll(BASE, '../'.repeat(depth)));
  } else if (/Search\.astro.*\.js$/.test(file)) {
    const base = "new URL(document.querySelector('link[rel=\"shortcut icon\"],link[rel=icon]').getAttribute('href').replace(/favicon\\.png$/,''),location.href).pathname";
    let js = readFileSync(file, 'utf8');
    js = js.replaceAll('`/LUMAMATTERS-manual/`', `(${base})`); // search base, bundle path, chunk preload
    writeFileSync(file, js);
  }
}
for (const file of walk(out).filter((f) => /\.(html|css|js)$/.test(f))) {
  const text = readFileSync(file, 'utf8');
  if (text.includes('_astro/')) writeFileSync(file, text.replaceAll('_astro/', 'astro/'));
}
// the Artifact service serves only web types: Pagefind's binary chunks get a ".wasm" suffix
for (const file of walk(join(out, 'pagefind'))) {
  if (/\.(pf_fragment|pf_index|pf_meta|pagefind)$/.test(file)) renameSync(file, `${file}.wasm`);
}
for (const name of ['pagefind.js', 'pagefind-worker.js']) {
  const file = join(out, 'pagefind', name);
  let js = readFileSync(file, 'utf8');
  for (const ext of ['pf_fragment', 'pf_index', 'pf_meta', 'pagefind']) js = js.replaceAll(`.${ext}\``, `.${ext}.wasm\``);
  writeFileSync(file, js);
}
const left = walk(out).filter((f) => /\.(html|css|js)$/.test(f) && readFileSync(f, 'utf8').includes(BASE));
console.log(`artifact-export: ${walk(out).length} files, base left in: ${left.map((f) => relative(out, f)).join(', ') || 'none'}`);
