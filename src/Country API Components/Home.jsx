import { Search } from "./Search.jsx"
import { FilterByRegion } from "./FilterByRegion.jsx"
import { CountryList } from "./CountryList.jsx"
import { useEffect, useState } from "react"

export const Home = () => {
    const [search, setSearch] = useState("")
    const [selectedRegion, setSelectedRegion] = useState("All Regions")

    useEffect(() => {
        console.log('h111')
        window.addEventListener('resize', () => {
            console.log(window.innerWidth)
        })
    })

    return (
        <main className="px-4">
            <div className="md:my-13 flex justify-between max-w-350 mx-auto md:flex-row flex-col md:gap-0 gap-7.5 mt-6 mb-12.5">
                <Search
                    search={search}
                    setSearch={setSearch}
                />
                <FilterByRegion
                    selectedRegion={selectedRegion}
                    setSelectedRegion={setSelectedRegion}
                />
            </div>
            <CountryList
                search={search}
                selectedRegion={selectedRegion}
            />
        </main>
    )
}
