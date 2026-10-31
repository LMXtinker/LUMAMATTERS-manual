import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Pages are generated from wiki/ by scripts/sync-wiki.mjs (wiki/ stays the single copy).
export default defineConfig({
  site: 'https://lmxtinker.github.io',
  base: '/LUMAMATTERS-manual',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'LUMAMATTERS Manual',
      description: 'User manual for LUMAMATTERS, a desk planner for projection mapping.',
      // Pagefind search is built in and runs fully in the browser (no external service).
      pagefind: true,
      // No Google Fonts / CDN: IBM Plex is self-hosted (src/styles/fonts, OFL).
      social: [
        { icon: 'github', label: 'Releases', href: 'https://github.com/LMXtinker/LUMAMATTERS-releases/releases' },
      ],
      logo: { src: './src/assets/wordmark-h28@2x.png', alt: 'LumaMatters', replacesTitle: true },
      favicon: '/favicon.png',
      head: [{ tag: 'meta', attrs: { name: 'color-scheme', content: 'dark' } }],
      // Dark only: the app and the RGB wordmark have no light version.
      components: {
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
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
