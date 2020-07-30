module.exports = {
  pathPrefix: "/tyomo-blog",
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    siteUrl: `https://tyomo422.github.io`,
    title: `tyomo-blog`,
    author: `tyomo`,
    description: `ちょもの学習記録サイト`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/K0USKeNeTB`,
      },
      {
        name: `github`,
        url: `https://github.com/Tyomo422`,
      },
    ],
  },
}

