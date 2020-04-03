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
          <form method="POST" action="https://formspree.io/subinsamrat96@gmail.com" className={styles.form}>
            <div>
            <input type="text" name="name" id="name" className={styles.formControl} placeholder="Name..."/>
          </div>

          <div>
            <input type="email" name="email" id="email" className={styles.formControl} placeholder="Email..."/>
          </div>

          <div>
            <textarea name="message" rows="10" id="message" className={styles.formControl} placeholder="Message..."/>
          </div>

          <div>
            <input type="submit" value="Submit here" className={styles.submit}/>
          </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
