import React, { Fragment } from "react"
import contactStyles from "../components/contact.module.css"
import { Link } from "gatsby"

const Form = () => (
  <div className={contactStyles.container}>
    <h1>Contact Me</h1>

    <div className={contactStyles.row}>
      {/* <form
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
      </form> */}

      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className={contactStyles.form}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <p>
          Name:
          <input placeholder="Name" type="text" name="name" />
        </p>
        <p>
          Email:
          <input placeholder="Email" type="email" name="email" />
        </p>
        <p>
          Phone Number:
          <input placeholder="Number" type="tel" name="number" />
        </p>

        <p>
          Message:
          <textarea name="message" placeholder="Message" rows="6" />
        </p>
        <p>
          <button
            className={contactStyles.contbutton}
            type="submit"
            center={true}
          >
            Submit
          </button>
        </p>
      </form>
    </div>
    <p>
      <button className={contactStyles.contbutton} center={true}>
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          Go Back
        </Link>
      </button>
    </p>
  </div>
)

export default Form
