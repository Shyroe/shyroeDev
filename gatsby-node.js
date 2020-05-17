const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const blogList = path.resolve("./src/templates/blog-list.js")
  const blogTag = path.resolve("./src/templates/blog-tag.js")
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date
                description
                image
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        throw result.errors
      }

      // Create blog posts pages.
      const posts = result.data.allMarkdownRemark.edges

      posts.forEach((post, index) => {
        const previous =
          index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node

        createPage({
          path: post.node.fields.slug,
          component: blogPost,
          context: {
            slug: post.node.fields.slug,
            previous,
            next,
          },
        })
      })

      console.log("Passou antes de pagination")

      //BlogList Pagination
      const postsPerPage = 6
      const numPages = Math.ceil(posts.length / postsPerPage)
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/` : `/page/${i + 1}`,
          component: path.resolve("./src/templates/blog-list.js"),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        })
      })

      console.log("Passouu depois de pagination")

      // createPage({
      //   path: "/blog",
      //   component: blogList,
      // })

      //Create Blog List page - Está funcionando
      //   posts.forEach((post, index) => {
      //     createPage({
      //       path: "/blog",
      //       component: blogList,
      //     })
      //   })

      //blog-Tag
      const tags = result.data.tagsGroup.group

      tags.forEach(tag => {
        createPage({
          path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
          component: blogTag,
          context: {
            tag: tag.fieldValue,
          },
        })
      })
    })
    .catch(err => console.log(err))
}

//blogTag graphql Query
//   return graphql(`
//   {
//     postsRemark: allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] }
//       limit: 2000
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             tags
//           }
//         }
//       }
//     }
//     tagsGroup: allMarkdownRemark(limit: 2000) {
//       group(field: frontmatter___tags) {
//         fieldValue
//       }
//     }
//   }

//   `).then(tagsData => {
//     const tags = tagsData.tagsGroup.group;

//     tags.forEach(tag => {
//       createPage({
//         path: ``
//       })
//     })

// })

//Funcionando Ok- Rota: /
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode, basePath: `blog` })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }
