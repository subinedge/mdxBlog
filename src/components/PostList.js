import React from 'react'
import PostCard from './PostCard'
import styles from '../css/postlist.module.css'

const PostList = ({posts}) => {
  return (
    <section className={styles.posts}>
      <h1>Cookbook for FrontEnd Devs</h1>
      <h4>Everything related to JavaScript will be discussed here</h4>
      {/* <h4>Once you stop learning you start dying</h4> */}

      {/* newsletter */}

      {/* <div className={styles.newsletter}>
        <h4>Get latest updates</h4> */}
        {/* <h3>Join the list ! Understand JavaScript concepts</h3> */}

        {/* <form className={styles.form}>
          <input type="email" required placeholder="Enter your email address"/>
          <input type="submit" value="Subscribe"/>
        </form>
      </div> */}

      <div className={styles.center}>
        {posts.map(({node}, index)=> {
          return <PostCard key={index} post={node}/>
        })}
      </div>
    </section>
  )
}

export default PostList
