import React, { Fragment } from "react"
import contactStyles from "../components/contact.module.css"

const Form = () => (
  <div className={contactStyles.container}>
    <div className={contactStyles.row}>
      <h1>Contact Me</h1>
    </div>
    <div className={contactStyles.row}>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className={contactStyles.form}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  </div>
)

export default Form
