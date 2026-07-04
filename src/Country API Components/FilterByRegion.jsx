import { useContext, useState } from 'react'
import ThemeContext from '../Contexts/ThemeContext'


export const FilterByRegion = ({ selectedRegion, setSelectedRegion}) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const { darkMode } = useContext(ThemeContext)
    return (
        <div
            className={`max-w-50.5 w-full flex items-center justify-between gap-10 p-4 cursor-pointer relative rounded-lg shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] ${
                darkMode
                    ? "dark-theme-elements-text"
                    : "bg-white text-[hsl(200,15%,8%)]"
            }`}
            onClick={() => setShowDropdown(!showDropdown)}
        >
            <p className="">{selectedRegion}</p>
            <i
                className={`fa-solid fa-chevron-down transition-transform duration-300 ${
                    showDropdown ? "rotate-180" : ""
                }`}
            ></i>
            <div
                className={`w-50 pt-4 pb-3 pl-5 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] absolute right-0 rounded-lg transition-all duration-300 ease-in-out ${
                    darkMode
                        ? "dark-theme-elements-text"
                        : "bg-white text-[hsl(200,15%,8%)]"
                } ${
                    showDropdown
                        ? "top-19 opacity-100"
                        : "top-18 opacity-0 pointer-events-none"
                }`}
            >
                <p
                    className="text-base mb-2 hover:underline"
                    onClick={() => setSelectedRegion("All Regions")}
                >
                    All Regions
                </p>
                <p
                    className="text-base mb-2 hover:underline"
                    onClick={() => setSelectedRegion("Africa")}
                >
                    Africa
                </p>
                <p
                    className="text-base mb-2 hover:underline"
                    onClick={() => setSelectedRegion("Americas")}
                >
                    Americas
                </p>
                <p
                    className="text-base mb-2 hover:underline"
                    onClick={() => setSelectedRegion("Asia")}
                >
                    Asia
                </p>
                <p
                    className="text-base mb-2 hover:underline"
                    onClick={() => setSelectedRegion("Europe")}
                >
                    Europe
                </p>
                <p
                    className="text-base mb-2 hover:underline"
                    onClick={() => setSelectedRegion("Oceania")}
                >
                    Oceania
                </p>
            </div>
        </div>
    )
}
