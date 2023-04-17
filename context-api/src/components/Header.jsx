import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

function Header() {
    const {theme,setTheme} = useContext(ThemeContext);


    return (
    <div>
        <h1>Header</h1>
        <p>Active Theme: {theme}</p>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{theme === 'light' ? 'dark' : 'light'}</button>
        <hr></hr>
        <hr></hr>
    </div>
  )
}

export default Header