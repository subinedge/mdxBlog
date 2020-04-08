import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import styles from '../css/about.module.css'

const About = () => {
  return (
    <Layout>
      <SEO title="About | JS will rule" description="JavaScript will Rule About Page"/>
      <div className={styles.header}>
        <h1>MY ROAD TO GLORY!</h1>
        <p>Below you can see a timeline of my professional accomplishments.</p>
<p>I hope that this will motivate you to follow your dreams and to write down your own accomplishments along the way!</p>
      </div>
      <div className={styles.timeline}>
        <ul>
          <li>
            <div className={styles.content}>
              <div className={styles.date}>
                <h4>February 17 2020</h4>
              </div>
              <span>YOUTUBE</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste eius fugit iusto delectus necessitatibus quas natus obcaecati provident ullam! Maxime dolores aliquam veritatis sequi voluptates commodi earum nam incidunt.</p>
              <a href="https://www.google.com" aria-label="check out video">Check out the video</a>
            </div>
          </li>

          <li>
            <div className={styles.content}>
              <div className={styles.date}>
                <h4>February 17 2020</h4>
              </div>
              <span>YOUTUBE</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste eius fugit iusto delectus necessitatibus quas natus obcaecati provident ullam! Maxime dolores aliquam veritatis sequi voluptates commodi earum nam incidunt.</p>
              <a href="https://www.google.com" aria-label="check out video">Check out the video</a>
            </div>
          </li>

          <li>
            <div className={styles.content}>
              <div className={styles.date}>
                <h4>February 17 2020</h4>
              </div>
              <span>YOUTUBE</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste eius fugit iusto delectus necessitatibus quas natus obcaecati provident ullam! Maxime dolores aliquam veritatis sequi voluptates commodi earum nam incidunt.</p>
              <a href="https://www.google.com" aria-label="check out video">Check out the video</a>
            </div>
          </li>

          <li>
            <div className={styles.content}>
              <div className={styles.date}>
                <h4>February 17 2020</h4>
              </div>
              <span>YOUTUBE</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste eius fugit iusto delectus necessitatibus quas natus obcaecati provident ullam! Maxime dolores aliquam veritatis sequi voluptates commodi earum nam incidunt.</p>
              <a href="https://www.google.com" aria-label="check out video">Check out the video</a>
            </div>
          </li>
          <div className={styles.clearfix}></div>
        </ul>
      </div>
    </Layout>
  )
}

export default About
