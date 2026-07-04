import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import App from "./App.jsx"
import { Home } from "./Country API Components/Home.jsx"
import { Error } from "./Country API Components/Error.jsx"
import { IndividualCountryShow } from "./Country API Components/IndividualCountryShow.jsx"
// import { IndividualCountryError } from "./Country API Components/IndividualCountryError.jsx"
import { ThemeProvider } from "./Contexts/ThemeContext.jsx" 

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/:name",
                element: <IndividualCountryShow />,
                // errorElement: <IndividualCountryError />,
            },
        ],
    },
])

const root = createRoot(document.getElementById("root"))

root.render(
    <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>,
)