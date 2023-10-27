'use client'

import DataList from "@/components/DataList"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "@/app/libs/animeApiLibs"

const Page = () => {
    const [page, setPage] = useState(1)
    const [allAnime, setAllAnime] = useState([])

    const fetchData = async () => {
        const data = await getAnimeResponse("top/anime", `page=${page}`)
        
        setAllAnime(data)
    }

    useEffect(() => {
        fetchData()
    }, [page])


    return (
        <>
        <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
        <DataList api={allAnime} />
        <Pagination 
            page={page} 
            lastPage={allAnime.pagination?.last_visible_page} 
            setPage={setPage}
        />
        </>
    )
}

export default Page