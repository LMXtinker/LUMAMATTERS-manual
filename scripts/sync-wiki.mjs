// Generates src/content/docs/ from wiki/ (kept as the single copy, also published to the GitHub Wiki).
// - title from the first "# " heading (Starlight renders the title itself)
// - links "Page.md#x" -> "/LUMAMATTERS-manual/manual/page/#x"
// - Home.md -> manual/index page with hero (doc template, so the sidebar shows)
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync, cpSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'wiki');
// manual pages live under /manual/; the site root is the landing page (public/index.html)
const out = join(root, 'src', 'content', 'docs', 'manual');
const docsRoot = join(root, 'src', 'content', 'docs');
const BASE = '/LUMAMATTERS-manual';

rmSync(docsRoot, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
cpSync(join(src, 'images'), join(out, 'images'), { recursive: true });

const slug = (n) => n.toLowerCase();
// image refs become ./images/x; refs to files missing in wiki/images are dropped with a warning
const fixImgs = (t, page) =>
  t.replace(/!\[([^\]]*)\]\(images\/([^)]+)\)(\n*)/g, (m, alt, file, nl) => {
    if (existsSync(join(src, "images", file))) return `![${alt}](./images/${file})${nl}`;
    console.warn(`sync-wiki WARNING: ${page} references missing image images/${file}, dropped`);
    return "";
  });
const fixLinks = (t) =>
  t.replace(/\]\(([A-Za-z0-9_-]+)\.md(#[^)]*)?\)/g, (_, p, h = '') =>
    p === 'Home' ? `](${BASE}/manual/${h})` : `](${BASE}/manual/${slug(p)}/${h.toLowerCase()})`);

for (const f of readdirSync(src)) {
  if (!f.endsWith('.md') || f.startsWith('_')) continue;
  const name = f.slice(0, -3);
  let text = readFileSync(join(src, f), 'utf8').replace(/\r\n/g, '\n');
  const m = text.match(/^# (.+)\n+/);
  const title = m ? m[1].trim() : name.replace(/-/g, ' ');
  if (m) text = text.slice(m[0].length);
  text = fixImgs(fixLinks(text), f);
  let fm;
  let file = `${slug(name)}.md`;
  if (name === 'Home') {
    file = 'index.md';
    fm = [
      'title: LUMAMATTERS',
      'description: "Desk planner for projection mapping. Place projectors from maker data in your 3D venue. Run photometric analysis and check overlap and pixel size."',
      'template: doc',
      'hero:',
      '  tagline: "A desk planner for projection mapping. Load your venue in 3D and place projectors from maker data. Run photometric analysis and check overlap and pixel size."',
      '  image:',
      `    html: '<img src="${BASE}/brand/wordmark-hero.png" alt="LumaMatters" width="1100" height="188">'`,
      // the demo / manual / download buttons live in the top bar (src/components/SocialIcons.astro)
    ];
  } else {
    fm = [`title: ${JSON.stringify(title)}`];
  }
  writeFileSync(join(out, file), `---\n${fm.join('\n')}\n---\n\n${text}`);
}
console.log('sync-wiki: done');
