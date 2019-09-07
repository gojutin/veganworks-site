const config = {
  siteMetadata: {
    title: `VeganWorks`,
    description: `We make delicious vegan snack boxes. Get yours today on Amazon!`,
    url: "https://www.veganworks.com",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `SnackBoxes`,
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
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Alice", "Open Sans", "Satisfy"],
        },
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
  ],
};

if (process.env.CONTEXT === "production") {
  const googleAnalyticsCfg = {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
    },
  };
  config.plugins.push(googleAnalyticsCfg);
}

module.exports = config;
