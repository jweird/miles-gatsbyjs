import React from "react"
import { Link } from "gatsby"
import Form from "../components/form"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact Me" />
    <Form />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
