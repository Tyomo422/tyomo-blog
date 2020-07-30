module.exports = {
  siteMetadata: {
    title: `Gatsby`,
    siteUrl: `https://tyomo422.github .io`,
    description: `Blazing fast modern site generator for React`,
  },
}
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
    title: `tyomo-blog`,
    author: `tyomo`,
    description: `My site description...`,
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

