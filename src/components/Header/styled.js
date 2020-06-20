import styled, { css } from "styled-components"
import { Sun } from "@styled-icons/feather"
import { Moon } from "@styled-icons/heroicons-solid"
import { Search } from "@styled-icons/evaicons-solid"

//Icon styles
const IconStyles = css`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  color: ${props => props.theme.primary};
  fill: ${props => props.theme.primary};
`

export const StyledHeader = styled.nav`
  width: 100%;
  height: 4.5rem;
  margin: auto 0;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.bgSecondary};
  color: ${({ theme }) => theme.primary};
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.5);

  & ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin-left: auto;

    & li {
      margin-right: 1rem;
      & button {
        background-color: transparent;
        border: none;
        outline: none;
      }
      & a {
        font-size: 1.3rem;
        text-decoration: none;
        color: ${({ theme }) => theme.primary};

        &:not(:last-child):hover {
          border-bottom: 2px dotted ${({ theme }) => theme.secondary};
        }
      }
    }
  }
`

export const StyledSun = styled(Sun)`
  ${IconStyles}
`

export const StyledMoon = styled(Moon)`
  ${IconStyles}
`

export const StyledSearch = styled(Search)`
  ${IconStyles}
`
