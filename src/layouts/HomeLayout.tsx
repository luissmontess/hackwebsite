import Header from "../components/public_components/Header"
import { Outlet } from "react-router-dom"

export default function HomeLayout() {
    return (
        <>
        <Header />
        <Outlet />
        </>
    )
}
