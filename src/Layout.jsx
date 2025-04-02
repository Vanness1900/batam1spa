import Header from "./components/Header.jsx"
import TopBar from "./components/TopBar.jsx"
import { Outlet } from "react-router-dom"

function Layout() {
    return(
        <>
            <TopBar />
            <Header />
            <Outlet />
        </>
    )
}

export default Layout