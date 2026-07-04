import { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import ThemeContext from '../contexts/ThemeContext'

export const BackButton = () => {
    const navigate = useNavigate()
    const { darkMode } = useContext(ThemeContext)
  return (
      <div className="max-w-350 mx-auto" onClick={() => navigate(-1)}>
          <div
              className={`max-w-fit flex items-center justify-center py-1.5 md:py-2 px-5.5 md:px-7 gap-2.5 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] my-12.5 cursor-pointer rounded-r-sm ${
                  darkMode
                      ? "dark-theme-elements-text"
                      : "bg-white text-[hsl(200,15%,8%)]"
              }`}
          >
              <i className="fa-solid fa-arrow-left"></i>
              <p>Back</p>
          </div>
      </div>
  )
}
