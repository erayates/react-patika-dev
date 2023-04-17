import { useEffect,useContext} from "react";
import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.setItem("theme",theme);
    }, [theme])

    const values = {
        theme,
        setTheme
    }

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext)
