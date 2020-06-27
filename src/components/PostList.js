import React from "react"
import PostCard from "./PostCard"
import Newsletter from "./Newsletter"
import styles from "../css/postlist.module.css"

const PostList = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>Cookbook for FrontEnd Devs</h1>
      <h4>Front End Development made easy</h4>

      <Newsletter />

      <div className={styles.center}>
        {posts.map(({ node }, index) => {
          return <PostCard key={index} post={node} />
        })}
      </div>
    </section>
  )
}

export default PostList
