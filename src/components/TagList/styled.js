import styled from "styled-components"

export const TagContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  /* align-items: center; */
  /* padding: 0 auto; */
  align-items: stretch;
  justify-content: center;
  width: 100%;
  height: auto;
  /* border: 2px solid blue; */

  & ul {
    height: auto;
    /* border: 2px solid goldenrod; */
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
  /* display:flex;
align-items: center; */
  width: 90%;
  height: auto;
  margin: 0 auto;
  border: 2px solid rgb(200, 214, 229);
  /* padding-left: 1rem; */
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
