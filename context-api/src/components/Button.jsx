

import { useTheme } from '../context/ThemeContext'


function Button() {
    const {theme,setTheme} = useTheme()

    return (

    <div>
        Active theme: {theme}
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{theme === 'light' ? 'dark' : 'light'}</button>

    </div>
  )
}

export default Button