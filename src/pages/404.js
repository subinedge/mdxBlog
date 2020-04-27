import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import styles from '../css/error.module.css'
import {Link} from 'gatsby'

const Error = () => {
  return (
    <Layout>
      <SEO title="Page Not found | JavaScriptWillRule" description="JavaScript will Rule Error Page"/>
      <div className={styles.container}>
      <h1>404 - Page not found</h1>
        <h3>Oops ! You never know what content was in here, I removed it.</h3>
        <Link to="/" className={styles.link}>Go back to home page</Link>
      </div>
    </Layout>
  )
}

export default Error
