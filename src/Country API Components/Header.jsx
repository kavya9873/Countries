import { useContext, useEffect} from "react"
import { Link } from "react-router-dom"
import ThemeContext from "../Contexts/ThemeContext"

export const Header = () => {

    const { darkMode, setDarkMode } = useContext(ThemeContext)

            useEffect(() => {
                if (darkMode) {
                    document.body.classList.add("dark-theme-bg")
                } else {
                    document.body.classList.remove("dark-theme-bg")
                }
            }, [darkMode])

    return (
        <header
            className={`px-4 sticky top-0 z-1 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] ${
                darkMode
                    ? "dark-theme-elements dark-theme-text "
                    : "bg-white text-[hsl(200,15%,8%)]"
            }`}
        >
            <nav className="flex justify-between max-w-350 py-5 mx-auto">
                <Link
                    to="/"
                    className="sm:text-2xl text-[18px] font-extrabold max-[400px]:text-[15px]"
                >
                    Where in the world?
                </Link>
                <div
                    className="flex items-center gap-1.5 cursor-pointer"
                    onClick={() => setDarkMode((prev) => !prev)}
                >
                    <span>
                        <i
                            className={`fa-solid fa-${darkMode ? "sun" : "moon"}`}
                        ></i>
                    </span>
                    <p className="text-[14px] sm:text-[16px] max-[400px]:text-[11px]">
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </p>
                </div>
            </nav>
        </header>
    )
}
