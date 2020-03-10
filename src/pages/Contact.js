import React from "react"
import { Link } from "gatsby"
import Form from "../components/form"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact Me" />
    <Form />
    <div>
      <p>Click here to go back </p>
    </div>
  </Layout>
)

export default SecondPage
