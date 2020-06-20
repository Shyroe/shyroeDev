import styled from "styled-components"

import { Tag } from "@styled-icons/boxicons-solid"
import { Link } from "gatsby"

export const BlogListContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  padding: 1rem;
  width: inherit;
  height: 100%;
  color: #eee;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.imgBg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 1rem;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.5);
  }

  & div {
    display: flex;
    flex-flow: column nowrap;

    & h2 {
      font-size: 2.3rem;
      font-weight: bold;
    }
  }

  & small {
    font-size: 1.1rem;
    margin-top: 0.7rem;
  }
`

export const IconTag = styled(Tag)`
  display: block;
  margin: 0 1rem;
  color: red;
  width: 1rem;
  height: 1rem;
`

export const StyledLink = styled(Link)`
  color: #666;
  text-decoration: none;
`

export const BlogListWrapper = styled.div`
  max-width: 110rem;
  width: 85%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  border: 2px solid green;
`
