// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Olived",
  tagline: "A Modern Live Stream Recorder",
  favicon: "img/favicon.ico",

  url: "https://olived.app",
  baseUrl: "/",
  organizationName: "olivedapp",
  projectName: "olivedapp.github.io",
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-Hans"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
      },
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
        },
        blog: {
          showReadingTime: true,
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
            label: "Guide",
            to: "/guide",
          },
          {
            label: "Olivetv",
            to: "/olivetv",
          },
          {
            to: "https://pay.olived.app",
            label: "Subscribe",
            position: "left",
          },
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "left",
          //   label: "Tutorial",
          // },
          // { to: "/blog", label: "Blog", position: "left" },
          // {
          //   href: "https://github.com/olivedapp/olived",
          //   position: "right",
          //   className: "header-github-link",
          //   "aria-label": "GitHub repository",
          // },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "Olived Logo",
          src: "img/appicon.png",
          srcDark: "img/appicon.png",
          href: "https://pay.olived.app",
          width: 50,
          height: 50,
        },
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Guide",
                to: "/guide",
              },
              {
                label: "Changelog",
                to: "/changelog",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Reddit",
                href: "https://www.reddit.com/r/OlivedApp",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/olivedapp",
              },
              {
                label: "Email",
                href: "mailto:olivedapp@outlook.com",
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
      metadata: [
        {
          name: "keywords",
          content:
            "live stream recorder, cams recorder, afreecatv live stream record bigo live stream record bilibili live stream record cc live stream record douyin live stream record douyu live stream record huya live stream record nimo live stream record pixiv live stream record tiktok live stream record twitch live stream record youtube live stream record yy live stream record bongacams live stream record cam4 live stream record chaturbate live stream record stripchat live stream record",
        },
        {
          name: "google-site-verification",
          content: "bGvHt3Us4wWPxgvB_YRDYnF_LxAk9B3k2n9tCQvTZrI",
        },
      ],
    }),
};

module.exports = config;
