import React from "react"
import { Link } from "gatsby"
import Body from "../components/body"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home Page" />
    <Body />
  </Layout>
)

export default IndexPage
