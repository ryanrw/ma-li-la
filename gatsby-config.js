module.exports = {
  siteMetadata: {
    isMaintenance: false,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Main`,
        path: `${__dirname}/contents/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-143172672-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Enables Google Optimize using your container Id
        optimizeId: 'GTM-K2D6BB6D',
        // Enables Google Optimize Experiment ID
        experimentId: 'OSkZdPOQRjqRXHCrRVU92Q',
        // Set Variation ID. 0 for original 1,2,3....
        variationId: '0',
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'malila.netlify.com',
      },
    },
    // not implement yet.
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
  ],
}
