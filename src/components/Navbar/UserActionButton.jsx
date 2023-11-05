import Link from "next/link"
import {authUserSession} from "@/libs/authLibs"

const UserActionButton = async() => {
    const user = await authUserSession()
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin"
    
    return (
        <div className="flex justify-between gap-2">
            {
                user ? <Link href="/users/dashboard" className="bg-customColor-dark text-customColor-accent py-1 px-5">Dashboard</Link> : null
            }
            <Link href={actionUrl} className="bg-customColor-dark text-customColor-accent py-1 px-5">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton