import React from "react"
import { Link } from "gatsby"

import Header from "./Header/index"
import { StyledContainer, StyledWrapperOuter } from "../styles/styled"
import light from '../styles/themes/light'
import dark from '../styles/themes/dark';

import { ThemeContext } from '../styles/themes/context'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from "../styles/globalStyles"

const Layout = ({ location, title, children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
        <>
      <ThemeContext.Consumer>
        {
          context => (
            <ThemeProvider theme={context.isDark ? dark : light} >
      <StyledWrapperOuter>
      <StyledContainer>
        <main>{children}</main>        
      </StyledContainer>
      <footer>
          © {new Date().getFullYear()}, Blog desenvolvido com Gatsby e ❤ !
        </footer>
      </StyledWrapperOuter>
      </ThemeProvider>
          )
        }
      </ThemeContext.Consumer>
        </>
    </>
  )
}

export default Layout
