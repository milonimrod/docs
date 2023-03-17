const sdkDateExtractor = require("./src/plugins/rehype-sdk-date-extractor");
const path = require("path");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Statsig Docs",
  tagline: "Ship faster!",
  url: "https://docs.statsig.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "statsig", // Usually your GitHub org/user name.
  projectName: "statsig-io/docs", // Usually your repo name.
  themeConfig: {
    metadata: [
      {
        name: "og:image",
        content: "/img/docs_meta.jpg",
      },
      {
        name: "og:type",
        content: "websiteg",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "og:image:type",
        content: "image/jpg",
      },
      {
        name: "twitter:image",
        content: "/img/docs_meta.jpg",
      },
    ],
    navbar: {
      title: "",
      logo: {
        alt: "Statsig",
        src: "img/logo.svg",
        srcDark: "img/logo_white.svg",
        href: "https://statsig.com",
      },
      items: [],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Statsig Home",
              href: "https://statsig.com",
            },
            {
              label: "Blog",
              href: "https://blog.statsig.com",
            },
            {
              label: "Code",
              href: "https://github.com/statsig-io",
            },
          ],
        },
      ],
      copyright: `Copyright (c) ${new Date().getFullYear()} Statsig, Inc. | Thanks Docusaurus`,
    },
    prism: {
      additionalLanguages: [
        "swift",
        "java",
        "ruby",
        "csharp",
        "jsx",
        "go",
        "python",
        "kotlin",
        "erlang",
        "dart",
        "rust",
      ],
    },
  },
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexBlog: false,
        indexDocs: true,
        docsRouteBasePath: "/",
      },
    ],
    function statsig() {
      const isProd = process.env.NODE_ENV === "production";
      const tier = isProd ? "production" : "development";
      return {
        name: "docusaurus-plugin-statsig",
        getClientModules() {
          return [path.resolve(__dirname, "./statsig")];
        },
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: "script",
                attributes: {
                  src: "https://statsigapi.net/v1/web_experiments?k=client-oJY6hTJeduhEN2bf6fh6unHvxIk9UsjS99BlO4owh0r",
                },
              },
              {
                tagName: "script",
                innerHTML: `window.statsigTier="${tier}"`,
              },
              {
                tagName: "script",
                attributes: {
                  src: "/js/statsig_docs.js",
                },
              },
              {
                tagName: "script",
                attributes: {
                  src: "/js/rapidoc-min.js",
                },
              },
              {
                tagName: "script",
                attributes: {
                  src: "https://cdn.koala.live/v1/daniel/sdk.js",
                },
              },
            ],
          };
        },
      };
    },
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/integrations/terraform/introduction',
            from: '/integrations/terraform',
          },
        ],
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/statsig-io/docs/edit/main/",
          showLastUpdateTime: true,
          rehypePlugins: [sdkDateExtractor],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: ["https://fonts.googleapis.com/icon?family=Material+Icons"],
};
