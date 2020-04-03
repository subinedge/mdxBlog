import React from 'react'
import styles from '../css/postTemplate.module.css'
import Image from 'gatsby-image'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from '../components/SEO'

const postTemplate = ({data}) => {
  const {title, date, author, image} = data.mdx.frontmatter;
  const {body} = data.mdx;
  const img = image.childImageSharp.fluid;
  
  return (
    <Layout>
      <SEO title={title} description={title}/>
      <section className={styles.template}>
        <AniLink fade to='/' aria-label="back to all blog posts" className={styles.link}>Back to all posts</AniLink>
        <div className={styles.info}>
          <h1>{title}</h1>
          <h4>
            <span>by {author}</span> / <span>{date}</span>
          </h4>
        </div>
        <Image fluid={img}/>
        <div className={styles.content}>
          <MDXRenderer>
            {body}
          </MDXRenderer>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
query getPost($slug:String!){
  mdx(frontmatter:{slug:{eq:$slug}}){
    body
    frontmatter{
      title
      slug
      date(formatString:"Do MMMM, YYYY")
      author
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
`

export default postTemplate
