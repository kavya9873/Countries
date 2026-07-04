import { useContext } from "react"
import { Link } from "react-router-dom"
import data from "../../data"
import ThemeContext from "../Contexts/ThemeContext"

export const IndividualCountry = ({
    name,
    nativeName,
    population,
    region,
    capital,
    flag,
    subregion,
    independent,
    currencies,
    languages,
    borders,
}) => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <div className="max-w-350 mx-auto">
            <div className="flex items-center md:items-center justify-center gap-12.5 xl:gap-25 xl:mb-0 mb-20 xl:flex-row flex-col">
                <div className="">
                    <img
                        src={flag}
                        alt={name}
                        className="max-w-125 max-h-87.5 w-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] rounded-[10px]"
                    />
                </div>

                <div
                    className={`mx-5 ${
                        darkMode ? "dark-theme-text" : "text-[hsl(200,15%,8%)]"
                    }`}
                >
                    <h1 className="text-2xl font-extrabold mb-7.5">{name}</h1>

                    <div className="flex gap-10 md:gap-25 mb-10 md:mb-15 md:flex-row flex-col">
                        <div className="flex flex-col gap-2 text-[15px] max-w-fit">
                            <p>
                                {" "}
                                <b>Native Name:</b> {nativeName}
                            </p>
                            <p>
                                <b>Population:</b>{" "}
                                {population.toLocaleString("en-IN")}
                            </p>
                            <p>
                                <b>Region:</b> {region}
                            </p>
                            <p>
                                <b>Sub Region:</b> {subregion || "No Subregion"}
                            </p>
                            <p>
                                <b>Capital:</b> {capital || "No Capital"}
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 text-[15px] max-w-fit">
                            <p>
                                <b>Independence:</b> {String(independent)}
                            </p>
                            <p>
                                <b>Currencies:</b>{" "}
                                {currencies
                                    ?.map((currency) => currency.name)
                                    .join(", ") || "No Currency"}
                            </p>
                            <p>
                                <b>Languages:</b>{" "}
                                {languages
                                    ?.map((language) => language.name)
                                    .join(", ") || "No Language"}
                            </p>
                        </div>
                    </div>
                    <div className="max-w-225">
                        <p className="max-w-fit text-[15px] mr-4 mb-4 ">
                            <b>Border Countries:</b>
                        </p>
                        {borders?.length ? (
                            borders.map((border) => {
                                const borderCountry = data.find(
                                    (country) => country.alpha3Code === border,
                                )

                                if (!borderCountry) return null

                                return (
                                    <Link
                                        key={border}
                                        to={`/${borderCountry.name}`}
                                    >
                                        <span
                                            className={`text-[13px] md:text-[15px] inline-block shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] py-1 px-6 rounded-sm mr-2.5 mb-2.5 ${
                                                darkMode
                                                    ? "dark-theme-elements-text"
                                                    : "bg-white text-[hsl(200,15%,8%)]"
                                            }`}
                                        >
                                            {borderCountry.name}
                                        </span>
                                    </Link>
                                )
                            })
                        ) : (
                            <span
                                className={`text-[13px] md:text-[15px] inline-block shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] py-1 px-6 rounded-sm mr-2.5 mb-2.5 ${
                                    darkMode
                                        ? "dark-theme-elements-text"
                                        : "bg-white text-[hsl(200,15%,8%)]"
                                }`}
                            >
                                No Border Countries
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
