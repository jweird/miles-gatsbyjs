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
        method="POST"
        data-netlify="true"
        className={contactStyles.form}
      >
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
