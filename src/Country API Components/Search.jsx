import { useContext } from "react"
import ThemeContext from "../Contexts/ThemeContext"

export const Search = ({ search, setSearch }) => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <div
            className={`max-w-125 w-full flex items-center gap-5 py-4 px-7 rounded-lg shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] ${
                darkMode ? "dark-theme-elements-text" : "bg-white"
            }`}
        >
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
                type="text"
                className={`w-full border-none outline-none ${
                    darkMode ? "dark-theme-elements-text" : "bg-white"
                }`}
                placeholder="Search for a country..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}
