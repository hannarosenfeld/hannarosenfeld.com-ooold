module.exports = {
    siteMetadata: {
        title: `new`,
        siteUrl: `https://hannarosenfeld.com/`,
    },
    plugins: [
        {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-MRJP8QS9GZ", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "G-MRJP8QS9GZ",
            },
        },
    ],
}
