import { Outlet } from "react-router-dom"
import { Header } from "./Country API Components/Header.jsx"

function App() {

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default App
