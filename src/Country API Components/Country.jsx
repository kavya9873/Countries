import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import ThemeContext from "../Contexts/ThemeContext"

export const Country = ({ name, flag, population, region, capital}) => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <Link
            to={`/${name}`}
            // className="text-[hsl(200,15%,8%)]"
        >
            <div
                className={`w-62.5 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] hover:scale-105 rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
                    darkMode
                        ? "dark-theme-elements-text"
                        : "bg-white text-[hsl(200,15%,8%)]"
                }`}
            >
                <img src={flag} alt={name} className="w-full" loading="lazy" />
                <div className="flex flex-col gap-4 px-5 pb-8">
                    <h3 className="mt-4 font-bold text-xl">{name}</h3>
                    <div className="text-[14px] pt-1.5">
                        <p className="pt-1">
                            <b>Population:</b>{" "}
                            {population.toLocaleString("en-IN")}
                        </p>
                        <p className="pt-1">
                            <b>Region:</b> {region}
                        </p>
                        <p className="pt-1">
                            <b>Capital:</b>{" "}
                            {capital
                                ? Object.values(capital).join("")
                                : "No Capital"}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
