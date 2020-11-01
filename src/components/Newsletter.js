import React, { useState } from "react"
import styles from "../css/newsletter.module.css"

import addToMailchimp from "gatsby-plugin-mailchimp"

const Newsletter = () => {
  const [input, setInput] = useState({
    email: "",
    message: "Get my weekly posts to your mail",
  })

  changeEmailHandler = event => {
    setInput({ email: event.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    setInput({ message: "Thanks for subscribing !" })

    addToMailchimp(input.email)

    setInput({ email: "" }) // once submitted, clear the email input
  }

  return (
    <>
      <div className={styles.newsletter}>
        {/* <h4 className={styles.messageHeader}>Get latest updates</h4> */}
        <h3 className={styles.messageContent}>{input.message}</h3>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            value={input.email}
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
