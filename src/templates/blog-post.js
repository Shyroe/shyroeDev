import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import _ from "lodash"

import {
  WrapperPost,
  StyledLink,
  PostContentInfo,
  PostContentTag,
  PostContentTitle,
  PostContentTagList,
  PostRecomendedWrapper,
  PostRecomendedAnterior,
  PostRecomendedProximo,
  PostRecomendedLink,
  WrapperOuterPost,
  WrapperSocial,
  IconsContainer,
  IconYoutube,
  IconFacebook,
  IconLinkedin,
  IconTwitter,
  SocialLink,
} from "../styles/styled"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DisqusWrapper from "../components/DisqusWrapper/index"

//Theme
// import { ThemeContext } from '../styles/themes/context'
// import { ThemeProvider } from 'styled-components'
// import light from '../styles/themes/light'
// import dark from '../styles/themes/dark'
// import

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { social } = data.site.siteMetadata
  console.log("Blog Post theme social: ", social)
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <WrapperOuterPost>
        <WrapperPost>
          <header>
            <PostContentTitle>{post.frontmatter.title}</PostContentTitle>
            <PostContentInfo>
              <span>{post.frontmatter.date}</span>
              <span>{post.timeToRead} min de leitura</span>
            </PostContentInfo>
            <PostContentTagList>
              <>
                {post.frontmatter.tags.map((tag, index) => (
                  <PostContentTag key={index}>
                    <StyledLink to={`/tags/${_.kebabCase(tag)}/`}>
                      &#9679; {tag}{" "}
                    </StyledLink>
                  </PostContentTag>
                ))}
              </>
            </PostContentTagList>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr style={{}} />
          <footer>
            <Bio />
          </footer>
        </WrapperPost>
        <WrapperSocial>
          <h2>Compartilhe :)</h2>
          <IconsContainer>
            {/* <a href={social.linkedinLink}>
              <IconFacebook />
            </a> */}

            <SocialLink link={social.facebookLink}>
              <IconFacebook />
            </SocialLink>
            <SocialLink link={social.linkedinLink}>
              <IconLinkedin />
            </SocialLink>
            <SocialLink link={social.twitterLink}>
              <IconTwitter />
            </SocialLink>
            <SocialLink link={social.youtubeLink}>
              <IconYoutube />
            </SocialLink>
          </IconsContainer>
        </WrapperSocial>
        <PostRecomendedWrapper>
          <Fragment>
            {previous && (
              <PostRecomendedLink to={previous.fields.slug} rel="prev">
                <PostRecomendedAnterior imgBg={previous.frontmatter.image}>
                  <span>Post Anterior</span>
                  {/* <StyledLink to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </StyledLink> */}
                  <h2> ← {previous.frontmatter.title}</h2>
                </PostRecomendedAnterior>
              </PostRecomendedLink>
            )}
          </Fragment>
          <Fragment>
            {next && (
              <PostRecomendedLink to={next.fields.slug} rel="next">
                <PostRecomendedProximo imgBg={next.frontmatter.image}>
                  <span>Post Próximo</span>
                  {/* <StyledLink to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </StyledLink> */}
                  <h2>{next.frontmatter.title} →</h2>
                </PostRecomendedProximo>
              </PostRecomendedLink>
            )}
          </Fragment>
        </PostRecomendedWrapper>
        <DisqusWrapper
          post={post}
          title={post.frontmatter.title}
          slug={post.fields.slug}
        />
      </WrapperOuterPost>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        social {
          facebookLink
          linkedinLink
          twitter
          twitterLink
          youtubeLink
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        description
        tags
        image
      }
      timeToRead
    }
  }
`

{
  /* <nav>
<ul
  style={{
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: `space-between`,
    listStyle: `none`,
    padding: 0,
  }}
>
  <li>
    {previous && (
      <Link to={previous.fields.slug} rel="prev">
        ← {previous.frontmatter.title}
      </Link>
    )}
  </li>
  <li>
    {next && (
      <Link to={next.fields.slug} rel="next">
        {next.frontmatter.title} →
      </Link>
    )}
  </li>
</ul>
</nav> */
}

{
  /* <WrapperPost>       
<header>
  <PostContentTitle>{post.frontmatter.title}</PostContentTitle>
  <PostContentDate>{post.frontmatter.date}</PostContentDate>
  <PostContentTagList>
    <>
      {post.frontmatter.tags.map((tag, index) => (
        <PostContentTag key={index}>
          <StyledLink to={`/tags/${_.kebabCase(tag)}/`}>
            &#9679; {tag}{" "}
          </StyledLink>
        </PostContentTag>
      ))}
    </>
  </PostContentTagList>
</header>
<section dangerouslySetInnerHTML={{ __html: post.html }} />
<hr style={{}} />
<footer>
  <Bio />
</footer>
</WrapperPost>

<nav>
<ul
  style={{
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: `space-between`,
    listStyle: `none`,
    padding: 0,
  }}
>
  <li>
    {previous && (
      <Link to={previous.fields.slug} rel="prev">
        ← {previous.frontmatter.title}
      </Link>
    )}
  </li>
  <li>
    {next && (
      <Link to={next.fields.slug} rel="next">
        {next.frontmatter.title} →
      </Link>
    )}
  </li>
</ul>
</nav>
<DisqusWrapper
post={post}
title={post.frontmatter.title}
slug={post.fields.slug}
/> */
}
