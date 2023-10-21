import { FileSearch } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

const NotFound = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 flex-col">
                <FileSearch size={44} className="text-customColor-accent"/>
                <h3 className="text-customColor-accent text-2xl font-bold">NOT FOUND</h3>
                <Link href="/" className="text-customColor-primary hover:text-customColor-accent transition-all underline">
                    Kembali
                </Link>
            </div>
        </div>
    )
}

export default NotFound