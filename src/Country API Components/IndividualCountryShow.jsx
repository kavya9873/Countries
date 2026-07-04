import { useContext, useEffect, useState } from "react"
import { BackButton } from "./BackButton"
import data from "../../data"
import { IndividualCountry } from "./IndividualCountry"
import { useParams } from "react-router-dom"
import { IndividualCountrySkeleton } from "./IndividualCountrySkeleton"
import ThemeContext from "../Contexts/ThemeContext"

export const IndividualCountryShow = () => {
    const [loading, setLoading] = useState(true)
    const { darkMode } = useContext(ThemeContext)

    const { name } = useParams()

    const filteredCountry = data.find((country) => {
        return country.name.toLowerCase() === name.toLowerCase()
    })

    if (!filteredCountry) {
        return (
            <h1
                className={`text-2xl font-bold text-center mt-10 ${
                    darkMode ? "dark-theme-text" : "text-[hsl(200,15%,8%)]"
                }`}
            >
                Country not found 🥲
            </h1>
        )
    }

    useEffect(() => {
        setLoading(true)
        
        const timer = setTimeout(() => {
            setLoading(false)
        }, 300)

        return () => clearTimeout(timer)
    }, [name])

    if (loading) {
        return (
            <main className="px-4">
                <BackButton />
                <IndividualCountrySkeleton />
            </main>
        )
    }

    return (
        <main className="px-4">
            <BackButton />
            <IndividualCountry
                name={filteredCountry.name}
                nativeName={filteredCountry.nativeName}
                population={filteredCountry.population}
                region={filteredCountry.region}
                capital={filteredCountry.capital}
                flag={filteredCountry.flag}
                subregion={filteredCountry.subregion}
                independent={filteredCountry.independent}
                currencies={filteredCountry.currencies}
                languages={filteredCountry.languages}
                borders={filteredCountry.borders}
            />
        </main>
    )
}
