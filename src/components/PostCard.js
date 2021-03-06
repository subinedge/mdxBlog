import React from "react"
import styles from "../css/postcard.module.css"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const PostCard = ({ post }) => {
  const { title, slug, date, tag } = post.frontmatter
  const img = post.frontmatter.image.childImageSharp.fluid
  const excerpt = post.excerpt
  const timeToRead = post.timeToRead

  return (
    <article className={styles.card}>
      <AniLink to={slug} aria-label="blog links" fade>
        <div className={styles.image}>
          <Image fluid={img} />
        </div>
      </AniLink>

      <div className={styles.info}>
        <div>
          <AniLink
            to={slug}
            fade
            aria-label="blog title"
            className={styles.headerLink}
          >
            <h2>{title}</h2>
          </AniLink>
          <h6>
            <span>{date}</span> | <span>{timeToRead} min read</span>
          </h6>
          <p className={styles.tag}>{tag}</p>
          <p className={styles.excerpt}>{excerpt}</p>

          {/* <AniLink to={slug} fade aria-label="see full article" className={styles.link}>See full Article</AniLink> */}
        </div>
      </div>
    </article>
  )
}

export default PostCard
