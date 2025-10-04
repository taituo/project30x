// @ts-check

const config = {
  title: 'Softa 2025 Knowledge Hub',
  tagline: 'Specs and governance for the Softa 2025 monorepo program',
  url: 'https://softa-2025.example.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'softa',
  projectName: 'softa-2025',
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
  themeConfig: {
    navbar: {
      title: 'Softa 2025',
      items: [
        { type: 'docSidebar', sidebarId: 'globalSidebar', label: 'Guides', position: 'left' },
        { type: 'docSidebar', sidebarId: 'smallProjectsSidebar', label: 'Small Projects', position: 'left' },
        { type: 'docSidebar', sidebarId: 'saasProjectsSidebar', label: 'SaaS Projects', position: 'left' },
        { type: 'docSidebar', sidebarId: 'enterpriseProjectsSidebar', label: 'Enterprise Projects', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/softa/softa-2025', label: 'GitHub', position: 'right' },
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
            { label: 'Research', to: '/docs/research/overview' },
          ],
        },
        {
          title: 'Projects',
          items: [
            { label: 'Small', to: '/docs/projects/small' },
            { label: 'SaaS', to: '/docs/projects/saas' },
            { label: 'Enterprise', to: '/docs/projects/enterprise' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Softa 2025`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
  },
};

module.exports = config;
