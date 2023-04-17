import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'


function Button() {
    const {theme,setTheme} = useContext(ThemeContext)

    return (

    <div>
        Active theme: {theme}
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{theme === 'light' ? 'dark' : 'light'}</button>

    </div>
  )
}

export default Button