import React, { Fragment } from "react"
import contactStyles from "../components/contact.module.css"

const Form = () => (
  <div className={contactStyles.container}>
    <h1>Contact Me</h1>

    <div className={contactStyles.row}>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className={contactStyles.form}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />

        <label>Your Name:</label>
        <input type="" name="name" />

        <label>Your Email:</label>
        <input type="email" name="email" />

        <label>Message:</label>
        <textarea name="message"></textarea>
        <br />
        <button className={contactStyles.contbutton} type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  </div>
)

export default Form
