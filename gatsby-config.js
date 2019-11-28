const path = require("path");
require("dotenv");

const config = {
  siteMetadata: {
    title: `VeganWorks`,
    description: `We make delicious vegan snack boxes. Get yours today on Amazon!`,
    url: "https://www.veganworks.com",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_SITE_URL,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
        name: "images",
      },
    },
    // {
    //   baseId: contentBaseId,
    //   tableName: 'home_page',
    //   tableView: viewAll,
    //   mapping: { 'pictures': `fileNode` },
    // },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `SnackBoxes`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Stats`,
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Alice", "Satisfy"],
        display: "fallback",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `VeganWorks`,
        short_name: `VeganWorks`,
        description:
          "We make delicious vegan snack boxes. Get yours today on Amazon!",
        start_url: `/`,
        lang: "en",
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: "src/images/veganworks-logo.png",
        icons: [
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            types: "image/png",
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            types: "image/png",
          },
        ],
      },
    },
    "gatsby-plugin-offline",
  ],
};

module.exports = config;
