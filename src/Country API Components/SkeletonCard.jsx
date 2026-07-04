export const SkeletonCard = ({ darkMode }) => {
    return (
        <div className="w-62.5 rounded-lg overflow-hidden shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] animate-pulse">
            <div
                className={`h-40 ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
            ></div>

            <div className="p-5">
                <div
                    className={`h-6 w-2/3 rounded mb-5 ${
                        darkMode ? "bg-gray-700" : "bg-gray-300"
                    }`}
                ></div>

                <div className="space-y-3">
                    <div
                        className={`h-3 w-full rounded ${
                            darkMode ? "bg-gray-700" : "bg-gray-300"
                        }`}
                    ></div>

                    <div
                        className={`h-3 w-5/6 rounded ${
                            darkMode ? "bg-gray-700" : "bg-gray-300"
                        }`}
                    ></div>

                    <div
                        className={`h-3 w-2/3 rounded ${
                            darkMode ? "bg-gray-700" : "bg-gray-300"
                        }`}
                    ></div>
                </div>
            </div>
        </div>
    )
}
