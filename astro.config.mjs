import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { readdirSync } from 'node:fs';

// Manual pages moved back from /manual/<page>/ to /<page>/: keep /manual/* redirecting so older app links keep working.
const redirects = Object.fromEntries([
  ['/manual/', '/LUMAMATTERS-manual/'],
  ...readdirSync('./wiki')
    .filter((f) => f.endsWith('.md') && !f.startsWith('_') && f !== 'Home.md')
    .map((f) => f.slice(0, -3).toLowerCase())
    .map((s) => [`/manual/${s}/`, `/LUMAMATTERS-manual/${s}/`]),
]);

// Pages are generated from wiki/ by scripts/sync-wiki.mjs (wiki/ stays the single copy).
export default defineConfig({
  site: 'https://lmxtinker.github.io',
  base: '/LUMAMATTERS-manual',
  trailingSlash: 'always',
  redirects,
  integrations: [
    starlight({
      title: 'LUMAMATTERS Manual',
      description: 'User manual for LUMAMATTERS, a desk planner for projection mapping. Place projectors from maker data in your 3D venue. Run photometric analysis and check overlap and pixel size.',
      // Pagefind search is built in and runs fully in the browser (no external service).
      pagefind: true,
      // No Google Fonts / CDN: IBM Plex is self-hosted (src/styles/fonts, OFL).
      social: [
        { icon: 'github', label: 'Releases', href: 'https://github.com/LMXtinker/LUMAMATTERS-releases/releases' },
      ],
      logo: { src: './src/assets/wordmark-h28@2x.png', alt: 'LumaMatters', replacesTitle: true },
      favicon: '/favicon.png',
      head: [
        { tag: 'meta', attrs: { name: 'color-scheme', content: 'dark' } },
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://lmxtinker.github.io/LUMAMATTERS-manual/assets/og-image.png' } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
      ],
      // Dark only: the app and the RGB wordmark have no light version.
      components: {
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
        SocialIcons: './src/components/SocialIcons.astro',
      },
      customCss: ['./src/styles/luma.css'],
      sidebar: [
        { label: 'Home', link: '/' },
        { label: "What's new", slug: 'whats-new' },
        {
          label: 'Getting started',
          items: ['install', 'first-start-and-workspace', 'projects-and-snapshots', 'several-machines'],
        },
        {
          label: 'Interface',
          items: ['interface-tour', 'menus', 'outliner', 'properties', 'summary-and-history', '3d-view', 'view-modes', 'keyboard-shortcuts'],
        },
        {
          label: 'Workflow',
          items: ['blender-export-and-import', 'placing-projectors', 'analysis', 'setups-and-compare', 'measure-tools', 'textures', 'people', 'report-and-pdf', 'share-a-view-only-scene', 'test-patterns'],
        },
        {
          label: 'Reference',
          items: ['projector-database', 'physics-model', 'project-files', 'faq', 'glossary'],
        },
        {
          label: 'Download and legal',
          items: [
            { label: 'Overview', link: 'https://lmxtinker.github.io/LUMAMATTERS-releases/' },
            { label: 'Download (beta)', link: 'https://github.com/LMXtinker/LUMAMATTERS-releases/releases' },
            { label: 'Web demo', link: '/demo/', attrs: { target: '_self' } },
            { label: 'Impressum', link: 'https://lmxtinker.github.io/LUMAMATTERS-releases/impressum.html' },
            { label: 'Privacy', link: 'https://lmxtinker.github.io/LUMAMATTERS-releases/privacy.html' },
          ],
        },
      ],
    }),
  ],
});
