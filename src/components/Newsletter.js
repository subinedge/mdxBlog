import React, { useState } from "react"
import styles from "../css/newsletter.module.css"

import addToMailchimp from "gatsby-plugin-mailchimp"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("Get my weekly posts to your mail")

  const changeEmailHandler = event => {
    setEmail(event.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setMessage("Thanks for subscribing !")

    addToMailchimp(email)

    setEmail("") // once submitted, clear the email input
  }

  return (
    <>
      <div className={styles.newsletter}>
        {/* <h4 className={styles.messageHeader}>Get latest updates</h4> */}
        <h3 className={styles.messageContent}>{message}</h3>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={changeEmailHandler}
            required
            placeholder="Email address"
          />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
    </>
  )
}

export default Newsletter
