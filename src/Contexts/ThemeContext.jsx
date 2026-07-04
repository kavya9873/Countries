import { createContext } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
   const [darkMode, setDarkMode] = useLocalStorage("darkMode", false)

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext
