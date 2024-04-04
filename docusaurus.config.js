// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

//const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300&display=swap'
  ],

  title: 'Gnars Center ⌐◨-◨',
  tagline: 'Gnars related projects and Onboarding Docs for Gnars Community.',
  url: 'https://sktbrd.github.io',

  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sktbrd', // Usually your GitHub org/user name.
  projectName: 'gnars-docs', // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'pt-br', 'es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sktbrd/gnars-docs/tree/main/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sktbrd/gnars-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),

        },

      }),
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Gnars',
        logo: {
          alt: 'GNARS logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorials',
            emoji: '👍', // Add this line
          },
          /**        {
                      to: '/blog',
                      label: '🛹 Trickpedia',
                      position: 'left'},
          */
          {
            href: 'https://github.com/sktbrd/gnars-docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'dropdown',
            label: 'Projects',
            position: 'left',
            items: [
              {
                label: 'ThatsGnarly',
                href: 'https://thatsgnar.ly'
              },
              {
                label: 'Skatehive',
                href: 'https://skatehive.app'
              },
              {
                label: 'Alps DAO',
                href: 'https://opensea.io/collection/gnars-v2'
              }
            ]
          },
          {
            type: 'dropdown',
            label: 'Get a Gnar NFT',
            position: 'left',
            items: [
              {
                label: 'Auctions',
                href: 'https://gnars.wtf'
              },
              {
                label: 'OpenSea',
                href: 'https://opensea.io/collection/gnars-dao'
              }
            ]
          },
          {
            type: 'dropdown',
            label: 'Games',
            position: 'left',
            items: [
              {
                label: 'Quest For Stoken',
                href: 'https://stoken.quest/'
              },
              {
                label: 'Grinderz',
                href: 'https://gnars.fun/'
              }
            ]
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: "Charmverse",
                href: "https://app.charmverse.io/share/gnars/page-9870330106092746"
              }
            ],
          },
          {
            title: 'Community',
            items: [

              {
                label: 'Discord',
                href: 'https://discord.gg/gnars',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/gnarsdao',
              },
              {
                label: 'Snapshot',
                href: 'https://snapshot.org/#/gnars.eth'
              }
            ],
          },
          {
            title: 'Shred to Earn',
            items: [
              {
                label: '🛹 Skatehive App',
                href: 'https://skatehive.app',
              },
              {
                label: '🌊 Surfhive App',
                href: 'https://peakd.com/c/hive-141964/created',
              },
              {
                label: '🤘 Thats Gnarly',
                href: 'https://thatsgnar.ly',
              },
              {
                label: '🤘 Stoken.wtf',
                href: 'https://stoken.wtf',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/sktbrd/gnars-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © is a lie. Built with Weed`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,  // Set to true if you want to disable the light/dark switch button
        respectPrefersColorScheme: false,  // Set to true if you want to respect the user's system setting
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },

    }),
};

module.exports = config;
