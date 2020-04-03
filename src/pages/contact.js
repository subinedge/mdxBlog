import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import styles from '../css/contact.module.css'

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact | JS will rule" description="JavaScript will Rule Contact Page"/>
      <section className={styles.contact}>
        <h3 className={styles.contactme}>Contact Me</h3>

        <div className={styles.center}>
          <form method="post" name="contact" data-netlify="true" data-netlify-honeypot="bot-field" className={styles.form}>
            <input type="text" name="name" id="name" className={styles.formControl} placeholder="Name..."/>
            <input type="email" name="email" id="email" className={styles.formControl} placeholder="Email..."/>
            <textarea name="message" rows="10" id="message" className={styles.formControl} placeholder="Message..."/>
            <input type="submit" name="submit" value="Submit here" className={styles.submit}/>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
