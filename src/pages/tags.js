import React from "react"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { TagContainer, TagItem } from "../components/TagList/styled"
import { StyledLink } from "../styles/styled"
import SEO from "../components/seo"
import _ from "lodash"

const Tags = ({ data, location }) => {
  const tags = data.allMarkdownRemark.group
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      <TagContainer>
        <h2>Tags</h2>
        <ul>
          <>
            {tags.map(tag => (
              <TagItem key={tag.fieldValue}>
                <StyledLink to={`/tags/${_.kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </StyledLink>
              </TagItem>
            ))}
          </>
        </ul>
      </TagContainer>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`
