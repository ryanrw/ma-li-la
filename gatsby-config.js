module.exports = {
  siteMetadata: {
    isMaintenance: true,
    title: `The most delicious bakery ❤️`,
    charset: `utf-8`,
    description: `Khaowhom's bakery site. You can buy some delicious bekery product here!`,
    author: `Ryan Willpower, surasak.c.work@gmail.com`,
    og_title: `Ma-li-la 🌸 - The most delicious bakery ❤️`,
    og_description: `Khaowhom's bakery site. You can buy some delicious bekery product here!`,
    robots: `index`,
    keywords: `ma-li-la, brownies, chocolate, cake, bakery, khaowhom`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    // not implement yet.
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
