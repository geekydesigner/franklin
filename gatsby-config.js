/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/franklin",
  siteMetadata: {
    title: `Franklin`,
    titleTemplate: `%s | A starter theme for Gatsby based on Bonneville`,
    description: `A starter theme for Gatsby based on Bonneville`,
    siteUrl: `https://geekydesigner.github.io/franklin/`,
    image: `/images/color.jpg`,
    author: `Brian Spencer St. John`,
    authorSite: `https://www.bstjohn.com`,
    twitterUsername: `@geekydesigner`,
    twitterURL: `https://twitter.com/`,
    linkedInURL: `https://www.linkedin.com`,
    githubURL: `https://github.com/geekydesigner`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Franklin - Gatsby Starter Theme based on Bonneville`,
        short_name: `Franklin`,
        start_url: `/`,
        background_color: `#0027EC`,
        theme_color: `#0027EC`,
        display: `standalone`,
        icon: `static/favicon.ico`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "ENTER YOUR GA TRACKING ID HERE",
        head: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contentImages`,
        path: `${__dirname}/src/content/images`,
      },
    },
  ],
}
