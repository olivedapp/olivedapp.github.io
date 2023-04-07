// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Olived",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  url: "https://olivedapp.github.io",
  baseUrl: "/",
  organizationName: "olivedapp",
  projectName: "olivedapp.github.io",
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
    localeConfigs: {
      "zh-Hans": {
        label: `简体中文`,
        direction: "ltr",
        htmlLang: "zh-Hans",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/carousel.css"),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/appicon.png",
      navbar: {
        title: "Olived",
        logo: {
          alt: "Olived logo",
          src: "img/appicon.png",
        },
        items: [
          {
            label: "Usage",
            to: "/usage",
          },
          {
            label: "Next",
            to: "/next",
          },
          {
            to: "https://afdian.net/@luxcgo",
            label: "Sponsor",
            position: "left",
          },
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "left",
          //   label: "Tutorial",
          // },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/olivedapp/olived-cn/issues",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "Olived Logo",
          src: "img/appicon.png",
          srcDark: "img/appicon.png",
          href: "https://olived.app",
          width: 50,
          height: 50,
        },
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Usage",
                to: "/usage",
              },
              {
                label: "Changelog",
                to: "/changelog",
              },
              {
                label: "About",
                to: "/about",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/olivedapp/olived-cn/issues",
              },
              {
                label: "Telegram",
                href: "https://t.me/olivedapp",
              },
              {
                label: "QQ",
                href: "https://qm.qq.com/cgi-bin/qm/qr?k=c6CTyYkB-p-o8ZoT5ldcjuFAVnyu5vEL&jump_from=webapi",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Eula",
                to: "/eula",
              },
              {
                label: "Privacy",
                to: "/privacy",
              },
              {
                label: "License",
                to: "/license",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}  Olived`,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "HQRE2ZIAAS",
        apiKey: "269248ac6a85483f6e675c8ddf3bfd09",
        indexName: "olived",
        contextualSearch: true,
      },
    }),
};

module.exports = config;