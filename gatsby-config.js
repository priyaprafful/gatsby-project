const linkResolver = require('./src/utils/linkResolver')


module.exports = {
  siteMetadata: {
    title: 'Gatsby + Prismic Tutorial',
    description: 'Learn how to integrate Prismic into your Gatsby project.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'gatsby-step-by-step',
        linkResolver: () => (doc) => linkResolver(doc),
        schemas: {
          homepage: require("./custom_types/homepage.json"),
          navigation: require("./custom_types/navigation.json"),
          page: require("./custom_types/page.json"),
        },
      },
    },
  ],
}
