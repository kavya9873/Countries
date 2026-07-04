import { useContext } from "react"
import { useRouteError } from "react-router-dom"
import ThemeContext from "../contexts/ThemeContext"

export const IndividualCountryError = () => {

    const IndividualCountryError = useRouteError()
    const { darkMode } = useContext(ThemeContext)

    return (
        <>
            <div
                className={`text-2xl font-bold text-center mt-10 ${
                    darkMode ? "dark-theme-text" : "text-[hsl(200,15%,8%)]"
                }`}
            >
                Something Went wrong 🥲
            </div>
            <div
                className={`text-2xl font-bold text-center mt-10 ${
                    darkMode ? "dark-theme-text" : "text-[hsl(200,15%,8%)]"
                }`}
            >
                {IndividualCountryError.status} Country Not Found
            </div>
        </>
    )
}
