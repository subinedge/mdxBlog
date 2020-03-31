import React from "react"
import Layout from '../components/layout'
import PostList from '../components/PostList'
import {graphql, useStaticQuery} from 'gatsby'
import SEO from '../components/SEO'

const getPosts = graphql`
  query {
    allMdx(sort:{fields:frontmatter___date, order: ASC}){
      edges{
        node{
          excerpt
          timeToRead
          frontmatter{
            title
            slug
            tag
            date(formatString: "do MMMM, YYYY")
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
      <SEO title="Home | JS will rule" description="JavaScript will Rule Home Page"/>
      <PostList posts={posts}/>
    </Layout>
  )
}
