module.exports = {
  siteMetadata:{
    title:'JavaScript will Rule',
    description:'Learn through projects',
    author:'Subin Sudhakaran',
    twitterUsername:'@cyberpunk_09',
    image:'/image-1.jpeg',
    siteUrl:'https://javascriptwillrule.com'
  },
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
    `gatsby-plugin-react-helmet`,
  ],
}
