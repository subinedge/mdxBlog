import React from "react"
import styles from "../css/newsletter.module.css"

import addToMailchimp from "gatsby-plugin-mailchimp"

class Newsletter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      message: "Get my weekly posts to your mail",
    }
  }

  changeEmailHandler = event => {
    this.setState({ email: event.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ message: "Thanks for subscribing !" })

    addToMailchimp(this.state.email)

    this.setState({ email: "" }) // once submitted, clear the email input
  }

  render() {
    return (
      <>
        <div className={styles.newsletter}>
          {/* <h4 className={styles.messageHeader}>Get latest updates</h4> */}
          <h3 className={styles.messageContent}>{this.state.message}</h3>

          <form className={styles.form} onSubmit={this.handleSubmit}>
            <input
              type="email"
              value={this.state.email}
              onChange={this.changeEmailHandler}
              required
              placeholder="Email address"
            />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </>
    )
  }
}

export default Newsletter
