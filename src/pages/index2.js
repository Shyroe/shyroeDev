import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/Posts/index"
import Author from "../components/Author/index"
import BlogListTemplate from "../templates/blog-list"

// import { StyledContainer } from "../styles/styled"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  // const posts = data.allMarkdownRemark.edges

  // rota /blog
  // return (
  //   <Layout location={location} title={siteTitle}>
  //     <SEO title="All posts" />
  //     <Bio />
  //     <Posts data={data} />
  //   </Layout>
  // )

  //rota root  - teste
  // return (
  //   <Layout location={location} title={siteTitle}>
  //     <SEO title="All posts" />
  //     {/* <Author /> */}
  //   </Layout>
  // )
  // return <BlogListTemplate />
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

//Copiado do Blog-list template
// import React from "react"

// import SEO from "../components/seo"
// import Layout from "../components/layout"
// import BlogList from "../components/BlogList/index"
// import Pagination from "../components/Pagination/index"

// import { graphql } from "gatsby"

// const BlogListTemplate = ({ location, data, pageContext }) => {
//   console.log("BlogListTemplate")
//   console.log("data blogList: ", data)

//   const blogList = data.allMarkdownRemark.edges
//   const siteTitle = data.site.siteMetadata.title

//   const { numPages, currentPage, limit, skip } = pageContext
//   const isFirst = currentPage === 1
//   const isLast = currentPage === numPages
//   const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
//   const nextPage = `/page/${currentPage + 1}`
//   //parte useStaticQuery
//   // const blogList = allMarkdownRemark.edges
//   // const siteTitle = site.siteMetadata.title
//   // console.log("subiu o template blogList")
//   // console.log("data blogList: ", blogList)

//   return (
//     <>
//       <Layout location={location} title={siteTitle}>
//         <SEO title={siteTitle} />
//         <BlogList blogList={blogList} />
//         <Pagination
//           isFirst={isFirst}
//           isLast={isLast}
//           prevPage={prevPage}
//           nextPage={nextPage}
//           numPages={numPages}
//           currentPage={currentPage}
//         />
//       </Layout>
//     </>
//   )
// }

// export const pageQuery = graphql`
//   query BlogListQuery($skip: Int!, $limit: Int!) {
//     allMarkdownRemark(
//       sort: { fields: frontmatter___date, order: DESC }
//       limit: $limit
//       skip: $skip
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             description
//             tags
//             date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
//             image
//           }
//           fields {
//             slug
//           }
//           timeToRead
//         }
//       }
//     }
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `

// export default BlogListTemplate

//OK - Graphql only
// export const BlogListQuery = graphql`
//   query BlogListQuery {
//     allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
//       edges {
//         node {
//           frontmatter {
//             title
//             description
//             date
//           }

//           fields {
//             slug
//           }
//           timeToRead
//         }
//       }
//     }
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
