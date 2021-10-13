require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { GATSBY_GA_ID } = process.env;

module.exports = {
  siteMetadata: {
    title: `UFRPE Devs`,
    description: ``,
    author: `@ufrpe-devs`,
    siteUrl: `https://ufrpe-devs.github.io`,
  },
  plugins: [
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [GATSBY_GA_ID],
      },
    },
  ],
};
