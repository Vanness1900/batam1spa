import TopBar from "../components/sections/TopBar.jsx"
import { Outlet } from "react-router-dom"

function MainLayout() {
    return(
        <>
            <TopBar />
            <Outlet />
        </>
    )
}

export default MainLayout