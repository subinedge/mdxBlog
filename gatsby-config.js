module.exports = {
   plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
  ],
}
