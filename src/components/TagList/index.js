import React from "react"

import { StyledLink } from "../../styles/styled"
import { TagContainer, NavTags, TagItem } from './styled'
import _ from "lodash"
import { Link } from "gatsby"

const index = ({ tags }) => {
  return (
    <>
    <TagContainer>
      <h2>Tags Blog</h2>
      <h5>Veja aqui todas as Tags do blog2</h5>
      <NavTags>
      <ul>
        {tags.map((tag, index) => (
          <TagItem key={index}>
            <StyledLink to={`/tags/${_.kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue}
            </StyledLink>
          </TagItem>
        ))}
        </ul>
      </NavTags>      
    </TagContainer>
    </>
  )
}

export default index
