import Link from "next/link"
import InputSearch from "./InputSearch"
import Image from "next/image"
import UserActionButton from "./UserActionButton"

const Navbar = () => {
    return (
        <header className="bg-customColor-secondary">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
                <Link href="/" className="font-bold text-2xl">
                    <Image src="/img/logo.png" width={80} height={10} className="px-2"/>
                </Link>
                <div className="flex flex-row gap-2">
                    <UserActionButton />
                    <InputSearch />
                </div>
            </div>
        </header>
    )
}

export default Navbar