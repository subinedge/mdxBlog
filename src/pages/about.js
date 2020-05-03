import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import timelineData from '../constants/timeline'
import styles from '../css/about.module.css'

const About = () => {
  return (
    <Layout>
      <SEO title="Timeline | JavaScriptWillRule" description="JavaScript will Rule About Page"/>
      <div className={styles.header}>
        <h1>MY ROAD TO GLORY!</h1>
        <p>Below you can see a timeline of my professional accomplishments.</p>
        <p>I hope that this will motivate you to follow your dreams and to write down your own accomplishments along the way!</p>
      </div>
      <div className={styles.timeline}>
        <ul>

          {timelineData.map((timeline, index)=> {
            return (
              <li key={index}>
                <div className={styles.content}>
                <div className={styles.date}>
                  <h4>{timeline.date}</h4>
                </div>
                <span>{timeline.tag}</span>
                <p>{timeline.desc}</p>
                <a href={timeline.link.externalLink} target="_blank" aria-label={timeline.link.ariaLabel}rel="noopener noreferrer">{timeline.link.linkWords}</a>
              </div>
              </li>
            )
          })}
          <div className={styles.clearfix}></div>
        </ul>
      </div>
    </Layout>
  )
}

export default About
