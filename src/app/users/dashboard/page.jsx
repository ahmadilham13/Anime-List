import {authUserSession} from "@/libs/authLibs"
import Image from "next/image"
import {redirect} from "next/navigation"

const Page = async() => {
    const user = await authUserSession()

    return (
        <div className="text-customColor-primary">
            <h3>Dashboard</h3>
            <h5>Welcome {user.name}</h5>
            <Image src={user.image} alt="..." width={250} height={250}/>
        </div>
    )
}

export default Page