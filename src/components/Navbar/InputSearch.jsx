"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handlerEnter = (e) => {
        if(e.key === "Enter") {
            handleSearch()
        }
    }

    const handleSearch = () => {
        event.preventDefault()
        const keyword = searchRef.current.value
        if(keyword == "") {
            // alert("Please insert your search data")
            return
        }
        router.push(`/search/${keyword}`)
    }

    return (
        <div className="relative">
            <input 
                placeholder="cari anime..." 
                className="w-full p-2 rounded" 
                ref={searchRef}
                onKeyPress={handlerEnter}
            />
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={24}/>
            </button>
        </div>
    )
}

export default InputSearch