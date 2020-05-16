import React from "react"
import Layout from '../components/layout'
import PostList from '../components/PostList'
import {graphql, useStaticQuery} from 'gatsby'
import SEO from '../components/SEO'

const getPosts = graphql`
  query {
    allMdx(sort:{fields:frontmatter___date, order: DESC}){
      edges{
        node{
          excerpt
          timeToRead
          frontmatter{
            title
            slug
            tag
            date(formatString: "Do MMMM YYYY")
            image{
              childImageSharp{
                fluid{
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default () => {
  const response = useStaticQuery(getPosts);
  const posts = response.allMdx.edges;
  
  return(
    <Layout>
      <SEO title="Blog | JavaScriptWillRule" description="The official JavaScript will rule blog by Subin Sudhakaran. Detailed understanding of front end development blog posts"/>
      <PostList posts={posts}/>
    </Layout>
  )
}
