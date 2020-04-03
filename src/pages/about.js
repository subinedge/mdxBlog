import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import styles from '../css/about.module.css'
import img from '../images/myPhoto.jpg'

const About = () => {
  return (
    <Layout>
      <SEO title="About | JS will rule" description="JavaScript will Rule About Page"/>
      <h3 className={styles.aboutme}>About Me</h3>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="my photo"/>
          </div>
        </article>

        <article className={styles.aboutInfo}>
          <h4>Front End Web Developer</h4>
          <h5>Producing high-quality websites and exceptional user experience</h5>
          <p>The work I provide is of highest quality, fully responsive, and tested in a wide range of devices. I take great care to ensure each project is well-documented and easily maintainable so you can enhance a website as your company grows.</p>

          <p>Often front-end development of a website is overlooked, but being the part of your project that combines design, back-end development and the layer that your users interact with, from my experience, it is the most important to get right.</p>
        </article>
      </div>
    </Layout>
  )
}

export default About
