// @ts-check

const config = {
  title: 'Project30x Knowledge Hub',
  tagline: 'Specs and governance for the Project30x monorepo program',
  url: 'https://taituo.github.io',
  baseUrl: '/project30x/',
  favicon: 'img/favicon.ico',
  organizationName: 'taituo',
  projectName: 'project30x',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'apps',
        path: '../apps',
        routeBasePath: 'docs/projects',
        include: ['*/docs/**/*.md'],
        sidebarPath: require.resolve('./apps.sidebars.js'),
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Project30x',
      items: [
        { type: 'docSidebar', sidebarId: 'globalSidebar', label: 'Guides', position: 'left' },
        {
          type: 'docSidebar',
          sidebarId: 'projectsSidebar',
          docsPluginId: 'apps',
          label: 'Projects',
          position: 'left',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/taituo/project30x', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Program',
          items: [
            { label: 'Vision', to: '/docs/golden-path/intro' },
            { label: 'Architecture', to: '/docs/architecture/adr/adr-process' },
            { label: 'Research', to: '/docs/research/research-overview' },
          ],
        },
        {
          title: 'Projects',
          items: [
            { label: 'Overview', to: '/docs/projects/projects-overview' },
            { label: 'Consensus', to: '/docs/projects/projects-consensus' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Project30x`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
  },
};

module.exports = config;
