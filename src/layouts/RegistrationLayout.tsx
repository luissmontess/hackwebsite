import RegistrationHeader from "../components/registration_components/RegistrationHeader"
import { Outlet } from "react-router-dom"

export default function RegistrationLayout() {
    return (
        <div className="min-h-screen bg-slate-900 text-white"> {/* Slate background */}
        <RegistrationHeader />
        <main className="container mx-auto pt-20"> {/* Padding for fixed header */}
            <Outlet />
        </main>
        </div>
    )
}
