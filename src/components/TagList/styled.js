import styled from "styled-components"

export const TagContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  height: auto;

  & ul {
    height: auto;
  }

  & h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.primary};
  }
`
export const TagItem = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  border: 2px solid rgb(200, 214, 229);
  padding: 0.5rem 0rem 0.5rem 1.5rem;
  border-radius: 1rem;
  margin-bottom: 2.5rem;
`

export const NavTags = styled.nav`
  width: 100%;
  & ul {
    list-style: none;
  }
`
