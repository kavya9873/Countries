import { useContext } from "react"
import ThemeContext from "../contexts/ThemeContext"

export const IndividualCountrySkeleton = () => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <div className="max-w-350 mx-auto">
            <div className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-25 animate-pulse">
                <div
                    className={`w-full lg:max-w-125 h-60 sm:h-80 lg:h-87.5 rounded-[10px] ${
                        darkMode ? "bg-gray-700" : "bg-gray-300"
                    }`}
                ></div>

                <div className="w-full">
                    <div
                        className={`w-48 h-8 rounded mb-8 ${
                            darkMode ? "bg-gray-700" : "bg-gray-300"
                        }`}
                    ></div>

                    <div className="flex flex-col md:flex-row gap-10 md:gap-25 mb-10">
                        <div className="flex flex-col gap-3 w-full">
                            <div
                                className={`w-52 h-4 rounded ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
                            ></div>
                            <div
                                className={`w-44 h-4 rounded ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
                            ></div>
                            <div
                                className={`w-40 h-4 rounded ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
                            ></div>
                            <div
                                className={`w-46 h-4 rounded ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
                            ></div>
                            <div
                                className={`w-36 h-4 rounded ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
                            ></div>
                        </div>

                        <div className="flex flex-col gap-3 w-full">
                            <div
                                className={`w-44 h-4 rounded ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
                            ></div>
                            <div
                                className={`w-40 h-4 rounded ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
                            ></div>
                            <div
                                className={`w-36 h-4 rounded ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
                            ></div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <div
                            className={`w-24 h-8 rounded ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
                        ></div>
                        <div
                            className={`w-24 h-8 rounded ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
                        ></div>
                        <div
                            className={`w-24 h-8 rounded ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
                        ></div>
                        <div
                            className={`w-24 h-8 rounded ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
