// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lago documentation',
  tagline: 'Open-Source Stripe Billing Alternative',
  url: 'https://getlago.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/lago.ico',
  organizationName: 'getlago',
  projectName: 'lago-docs',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Lago',
        logo: {
          alt: 'Lago',
          src: 'img/logo.svg',
          href: '/docs/guide/intro',
          target: '_self'
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorials',
          // },

          {
            type: 'docSidebar',  // docSidebar
            position: 'left',
            sidebarId: 'guide', // foldername
            label: 'Guide',     // navbar title
          },
          {
            type: 'docSidebar',  // docSidebar
            position: 'left',
            sidebarId: 'api', // foldername
            label: 'API Reference',     // navbar title
          },
          {to: 'https://getlago.com/company/blog', label: 'Blog', position: 'right'},
          {
            to: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guide',
                to: '/docs/guide/intro'
              },
              {
                label: 'API Reference',
                to: '/docs/api/intro'
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://www.getlago.com/company/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} - Lago.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['ruby']
      },
    }),
};

module.exports = config;
