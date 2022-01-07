import React from "react"

import { Link } from "gatsby"

import { BlogListContainer, IconTag, StyledLink, BlogListWrapper } from './styled'

const index = ({ blogList, location }) => {  
  console.log('BlogList index.js location: ', location);
  return (
    <>
        <BlogListWrapper>
      {blogList.map(({ node }) => (
        <StyledLink to={`${window.location.origin}${node.fields.slug}`}>
          <BlogListContainer          
           imgBg={node.frontmatter.image} 
           key={node.fields.slug}>            
            <div>
              <h2 className="title">{node.frontmatter.title}</h2>
              {/* <h4>{node.frontmatter.description}</h4> */}
            </div>           
            <small>
              {node.frontmatter.date} - {node.timeToRead} min
            </small>            
          </BlogListContainer>
        </StyledLink>
      ))}
      </BlogListWrapper>
    </>
  )
}

export default index
