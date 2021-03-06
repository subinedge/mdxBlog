import React from "react"
import styles from "../css/postTemplate.module.css"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/SEO"
// import GoogleAds from "../components/GoogleAds"

const postTemplate = ({ data }) => {
  const { title, date, author, image } = data.mdx.frontmatter
  const { body } = data.mdx
  const img = image.childImageSharp.fluid

  return (
    <Layout>
      {/* <GoogleAds /> */}
      <SEO title={title} description={title} />
      <section className={styles.template}>
        <AniLink
          fade
          to="/"
          aria-label="all blog posts link"
          className={styles.link}
        >
          Back to all posts
        </AniLink>
        <div className={styles.info}>
          <h1>{title}</h1>
          <h4>
            <span>by {author}</span> / <span>{date}</span>
          </h4>
          <h5>
            Portfolio:{" "}
            <a
              href="https://subinsamrat.netlify.com"
              aria-label="portfolio link"
              target="_blank"
              rel="noopener noreferrer"
            >
              subinsamrat.netlify.com
            </a>
          </h5>
        </div>
        <Image fluid={img} />
        <div className={styles.content}>
          <MDXRenderer>{body}</MDXRenderer>
        </div>

        <div className="blockquote">
          Post your doubts in{" "}
          <a href="mailto:subinsamrat96@gmail.com">
            <em>
              <u>subinsamrat96@gmail.com</u>
            </em>
          </a>
          . I will be there for you guys, always. Thank you.
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        slug
        date(formatString: "Do MMMM, YYYY")
        author
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default postTemplate
