import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import styles from '../css/error.module.css'
import {Link} from 'gatsby'

const Error = () => {
  return (
    <Layout>
      <SEO title="Page Not found | JavaScriptWillRule" description="The official JavaScript will rule blog by Subin Sudhakaran. Detailed understanding of front end development blog posts"/>
      <div className={styles.container}>
      <h1>404 - Page not found</h1>
        <h3>Oops ! You never know what content was in here, I removed it.</h3>
        <Link to="/" aria-label="error page diversion link" className={styles.link}>Go back to home page</Link>
      </div>
    </Layout>
  )
}

export default Error
