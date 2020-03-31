import React from 'react'
import styles from '../css/postcard.module.css'
import Image from 'gatsby-image'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const PostCard = ({post}) => {
  const {title, slug, date, tag} = post.frontmatter;
  const img = post.frontmatter.image.childImageSharp.fluid;
  const excerpt = post.excerpt;
  const timeToRead = post.timeToRead;
  
  return (
    <article className={styles.card}>
      <AniLink to={slug} fade>
        <div className={styles.image}>
          <Image fluid={img}/>
        </div>
      </AniLink>

      <div className={styles.info}>
        <div>
          <AniLink to={slug} fade className={styles.headerLink}>
            <h2>{title}</h2>
          </AniLink>
          <h6>
            <span>{date}</span> <span className={styles.dot}>&#183;</span><span className={styles.dot}>&#183;</span><span className={styles.dot}>&#183;</span> <span>{timeToRead} min read</span>
          </h6>
          <p className={styles.tag}>{tag}</p>
          <p>{excerpt}</p>
          
          <AniLink to={slug} fade className={styles.link}>Read More</AniLink>
        </div>
      </div>
    </article>
  )
}

export default PostCard
