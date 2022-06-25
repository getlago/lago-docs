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
        blog: {
          routeBasePath: 'changelog',
          path: 'changelog',
          editUrl: 'changelog',
          blogTitle: 'Changelog - New features',
          blogDescription: 'Find here all the new features released by Lago.',
          postsPerPage: 'ALL',
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
          {to: 'changelog', label: 'Changelog', position: 'right'},
          {
            to: 'https://github.com/getlago/lago',
            label: 'GitHub',
            position: 'right',
          },
          {to: 'https://calendly.com/lago-team/20min-meeting-with-lago-team', label: 'Book a demo', position: 'right'},
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
                label: 'Discourse',
                href: 'https://community.getlago.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/GetLago',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Book a demo',
                href: 'https://calendly.com/lago-team/20min-meeting-with-lago-team',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/getlago/lago',
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
