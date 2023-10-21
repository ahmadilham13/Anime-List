'use client'

import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import { useEffect, useState } from "react"

const Page = () => {
    const [page, setPage] = useState(1)
    const [allAnime, setAllAnime] = useState([])

    const fetchData = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
          
        const data = await response.json()
        setAllAnime(data)
    }

    useEffect(() => {
        fetchData()
    }, [page])


    return (
        <>
        <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
        <AnimeList api={allAnime} />
        <Pagination 
            page={page} 
            lastPage={allAnime.pagination?.last_visible_page} 
            setPage={setPage}
        />
        </>
    )
}

export default Page