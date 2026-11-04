import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { readdirSync } from 'node:fs';

// Manual pages moved from /<page>/ to /manual/<page>/ (landing page took the root): old URLs redirect.
const redirects = Object.fromEntries(
  readdirSync('./wiki')
    .filter((f) => f.endsWith('.md') && !f.startsWith('_') && f !== 'Home.md')
    .map((f) => f.slice(0, -3).toLowerCase())
    .map((s) => [`/${s}/`, `/LUMAMATTERS-manual/manual/${s}/`]),
);

// Pages are generated from wiki/ by scripts/sync-wiki.mjs (wiki/ stays the single copy).
export default defineConfig({
  site: 'https://lmxtinker.github.io',
  base: '/LUMAMATTERS-manual',
  trailingSlash: 'always',
  redirects,
  integrations: [
    starlight({
      title: 'LUMAMATTERS Manual',
      description: 'User manual for LUMAMATTERS, a desk planner for projection mapping. Place projectors from maker data in your 3D venue. See illuminance, luminance, contrast, overlap and pixel size.',
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
        { label: 'Home', link: '/manual/' },
        { label: "What's new", slug: 'manual/whats-new' },
        {
          label: 'Getting started',
          items: ['manual/install', 'manual/first-start-and-workspace', 'manual/projects-and-snapshots', 'manual/several-machines'],
        },
        {
          label: 'Interface',
          items: ['manual/interface-tour', 'manual/menus', 'manual/outliner', 'manual/properties', 'manual/summary-and-history', 'manual/3d-view', 'manual/view-modes', 'manual/keyboard-shortcuts'],
        },
        {
          label: 'Workflow',
          items: ['manual/blender-export-and-import', 'manual/placing-projectors', 'manual/analysis', 'manual/setups-and-compare', 'manual/measure-tools', 'manual/textures', 'manual/people', 'manual/report-and-pdf', 'manual/share-a-view-only-scene', 'manual/test-patterns'],
        },
        {
          label: 'Reference',
          items: ['manual/projector-database', 'manual/physics-model', 'manual/project-files', 'manual/faq', 'manual/glossary'],
        },
        {
          label: 'Download and legal',
          items: [
            { label: 'Download (coming soon)', link: 'https://github.com/LMXtinker/LUMAMATTERS-releases/releases' },
            { label: 'Web demo', link: '/demo/', attrs: { target: '_self' } },
            { label: 'Impressum', link: 'https://lmxtinker.github.io/LUMAMATTERS-manual/impressum.html' },
            { label: 'Privacy', link: 'https://lmxtinker.github.io/LUMAMATTERS-manual/privacy.html' },
          ],
        },
      ],
    }),
  ],
});
