import NavBar from "../components/sections/NavBar.jsx"
import TopBar from "../components/sections/TopBar.jsx"
import { Outlet } from "react-router-dom"

function Layout() {
    return(
        <>
            <TopBar />
            <NavBar />
            <Outlet />
            
        </>
    )
}

export default Layout