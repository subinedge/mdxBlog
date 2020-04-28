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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-164754577-1`,
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
    {
      resolve:`gatsby-plugin-mdx`,
      options:{
        gatsbyRemarkPlugins:[
          {
            resolve:`gatsby-remark-images`,
            options:{
              maxWidth: 590,
              // loading:`lazy`,
            },
          },
        ],
          
        }
      },
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
