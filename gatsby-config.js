require("dotenv").config();

const cloudinaryConfig = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET,
};

const sourceCloudinary = {
  resolve: `gatsby-source-cloudinary`,
  options: {
    ...cloudinaryConfig,
    resourceType: `image`,
    prefix: `terrestrial-assemblage/`,
    maxResults: 500,
  },
};

const sourceSiteMap = {
  resolve: "gatsby-plugin-sitemap",
  options: {
    exclude: ["/**/404", "/**/404.html"],
    query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage(filter: {context: {i18n: {routed: {eq: false}}}}) {
            edges {
              node {
                context {
                  i18n {
                    defaultLanguage
                    languages
                    originalPath
                  }
                }
                path
              }
            }
          }
        }
      `,
    serialize: ({ site, allSitePage }) => {
      return allSitePage.edges.map((edge) => {
        const {
          languages,
          originalPath,
          defaultLanguage,
        } = edge.node.context.i18n;
        const { siteUrl } = site.siteMetadata;
        const url = siteUrl + originalPath;
        const links = [
          { lang: defaultLanguage, url },
          { lang: "x-default", url },
        ];
        languages.forEach((lang) => {
          if (lang === defaultLanguage) return;
          links.push({ lang, url: `${siteUrl}/${lang}${originalPath}` });
        });
        return {
          url,
          changefreq: "daily",
          priority: originalPath === "/" ? 1.0 : 0.7,
          links,
        };
      });
    },
  },
};

module.exports = {
  siteMetadata: {
    title: "terrestrial-assemblage",
    siteUrl: "https://terrestrialassemblage.com",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-scroll-reveal",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "background",
        path: "./src/assets/images/background/",
      },
      __key: "background",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/config/locales`,
        name: `locale`,
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `program`,
        path: `${__dirname}/config/program`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `de`],
        defaultLanguage: `en`,
        siteUrl: `https://terrestrialassemblage.com`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/:lang?/blog/:uid",
            getLanguageFromPath: true,
          },
          {
            matchPath: "/preview",
            languages: ["en"],
          },
          {
            matchPath: "/artist/:lang/:uid",
            getLanguageFromPath: true,
          },
        ],
      },
    },
    sourceSiteMap,
    sourceCloudinary,
  ],
};
