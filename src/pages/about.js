import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Author from "../components/Author/index"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const author = data.site.siteMetadata.author
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      <Author author={author} />
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
          summary
          habilities
          contacts
        }
      }
    }
  }
`
