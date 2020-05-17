// ThemeProvider
import React, { useState } from "react"

// import { ThemeProvider } from "styled-components"
// import light from "../src/styles/themes/light"
// import dark from '../src/styles/themes/dark'

// export function wrapRootElement({ element }) {
//   const [darkStatus, setDarkStatus] = useState(false)
//   return (
//     <React.Fragment>
//       <ThemeProvider theme={darkStatus ? dark : light}>{element}</ThemeProvider>
//     </React.Fragment>
//   )
// }



// Utilizando Context
import Provider from '../src/styles/themes/context'
export const wrapRootElement = Provider;







//Theme Switcher
// import React, { useState, useContext } from "react"

// import { ThemeProvider } from "styled-components"
// import light from "../src/styles/themes/light"
// import dark from '../src/styles/themes/dark'

// import ThemeSwitcher from '../src/components/ThemeSwitcher/index'
// import { ThemeContext as ReactThemeContext, ThemeProvider as ReactThemeProvider  } from '../src/styles/themes/context'

// export function wrapRootElement({ element }) {

//   const { theme } = useContext(ReactThemeContext);
//   console.log('WrapRooot: ', theme)

//   return (
//     <React.Fragment>
     
//       <ReactThemeProvider>
//         <ReactThemeContext.Consumer>
//           {
//             theme => (
//               <ThemeProvider theme={theme}>{element}</ThemeProvider>
//             )
//           }
//         </ReactThemeContext.Consumer>

//       </ReactThemeProvider>
//     </React.Fragment>
//   )
// }
