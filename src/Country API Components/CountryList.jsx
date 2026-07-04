import { useContext, useEffect, useState } from "react"
import data from "../../data"
import { Country } from "./Country"
import { SkeletonCard } from "./SkeletonCard"
import ThemeContext from "../contexts/ThemeContext"

export const CountryList = ({ search, selectedRegion }) => {
    const [showSkeleton, setShowSkeleton] = useState(true)
    const { darkMode } = useContext(ThemeContext)

    useEffect(() => {
        setShowSkeleton(true)
        
        const timer = setTimeout(() => {
            setShowSkeleton(false)
        }, 300)

        return () => clearTimeout(timer)
    }, [selectedRegion])

    const filteredCountries = data.filter((country) => {
        const matchesSearch = country.name
            .toLowerCase()
            .startsWith(search.trim().toLowerCase())

        const matchesRegion =
            selectedRegion === "All Regions" ||
            country.region === selectedRegion

        return matchesSearch && matchesRegion
    })

    return (
        <>
            <p
                className={`text-center text-2xl font-bold ${
                    darkMode ? "dark-theme-text" : "text-[hsl(200,15%,8%)]"
                } ${filteredCountries.length === 0 ? "" : "hidden"}`}
            >
                No countries found 😢
            </p>
            <div className="max-w-350 mx-auto flex flex-wrap items-center justify-evenly gap-15 mb-25 px-0">
                {showSkeleton
                    ? [...Array(8)].map((_, index) => (
                          <SkeletonCard key={index} darkMode={darkMode} />
                      ))
                    : filteredCountries.map((country) => (
                          <Country
                              key={country.name}
                              name={country.name}
                              flag={country.flag}
                              population={country.population}
                              region={country.region}
                              capital={country.capital}
                          />
                      ))}
            </div>
        </>
    )
}
