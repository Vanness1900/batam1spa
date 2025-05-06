import TopBar from "../components/sections/TopBar.jsx"
import { Outlet } from "react-router-dom"

function Layout() {
    return(
        <>
            <TopBar />
            <Outlet />
        </>
    )
}

export default Layout