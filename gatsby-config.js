module.exports = {
  siteMetadata:{
    title:'JavaScript will Rule',
    description:'Learn through projects',
    author:'Subin Sudhakaran',
    twitterUsername:'@cyber_punk09',
    image:'/image-1.jpeg',
    siteUrl:'https://javascriptwillrule.netlify.com'
  },
   plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://javascriptwillrule.netlify.com',
        sitemap: 'https://javascriptwillrule.netlify.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
