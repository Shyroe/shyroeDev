// Utilizando apenas ThemePRovider sem ContextApi - NotWorking
// import React, { useState } from "react"

// import { Link } from "gatsby"
// import { ThemeProvider } from 'styled-components'

// import { StyledHeader } from "../../styles/styled"
// import ThemeSwitcher from '../ThemeSwitcher/index'

// //Themes
// import light from '../../styles/themes/light'
// import dark from '../../styles/themes/dark'

// const index = () => {
//   const [darkStatus, setDarkStatus] = useState(false);
//   const toggleTheme = () => {
//     setDarkStatus(!darkStatus)
//   }
//   return (
//     <>
//     <ThemeProvider theme={darkStatus ? dark : light} >
//           <StyledHeader>
//           <h2>Gatsby Handler</h2>
//           <ul>
//             <li>
//               <Link to={"/home"}>Home</Link>
//             </li>
//             <li>
//               <Link to={"/blog"}>Blog</Link>
//             </li>
//             <li>
//               <Link to={"/tags"}>Tags</Link>
//             </li>
//             <li>
//               Work
//               {/* <ThemeSwitcher /> */}
//             </li>
//             <li>
//               <button onClick={toggleTheme}>Alterar Tema</button>
//             </li>
//           </ul>
//           </StyledHeader>
//       </ThemeProvider>
//     </>
//   )
// }

// export default index

// Utilizando ContextApi
import React from "react"

import { Link } from "gatsby"

import { ThemeProvider } from "styled-components"

// import { StyledHeader } from "../../styles/styled"
import { StyledHeader, StyledSun, StyledMoon, StyledSearch } from "./styled"

import ThemeSwitcher from "../ThemeSwitcher/index"

import { ThemeContext } from "../../styles/themes/context"

//Themes
import light from "../../styles/themes/light"
import dark from "../../styles/themes/dark"

const index = () => {
  return (
    <>
      <ThemeContext.Consumer>
        {context => (
          <ThemeProvider theme={context.isDark ? dark : light}>
            <StyledHeader>
              <h2>Shyroe Dev</h2>
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>Sobre</Link>
                </li>
                <li>
                  <Link to={"/tags"}>Tags</Link>
                </li>
                <li>
                  <Link to={"/busca"}>
                    <StyledSearch />
                  </Link>
                </li>
                <li>
                  <button onClick={context.toggleTheme}>
                    <>
                      {context.isDark == true ? <StyledSun /> : <StyledMoon />}
                    </>
                  </button>
                </li>
              </ul>
            </StyledHeader>
          </ThemeProvider>
        )}
      </ThemeContext.Consumer>
    </>
  )
}

export default index
