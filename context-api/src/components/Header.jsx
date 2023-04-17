
import { useTheme } from '../context/ThemeContext'

function Header() {
    const {theme,setTheme} = useTheme();


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