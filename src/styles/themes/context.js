// import React from 'react'

// const ThemeContext = React.createContext({
//   theme: 'light'
// });

// export default ThemeContext

import React, { createContext, useState } from 'react'
import dark from '../themes/dark';
import light from './light'

export const ThemeContext = React.createContext();

 const ThemeProvider = (props) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    return setIsDark(!isDark)
  }

  return (
    <ThemeContext.Provider value={{
      isDark,
      toggleTheme
    }} >
      { props.children }
    </ThemeContext.Provider>
  )
}

export default ({ element }) => (
  <ThemeProvider>
    { element }
  </ThemeProvider>
)


