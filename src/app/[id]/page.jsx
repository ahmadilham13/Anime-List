import AnimeDetail from "@/components/AnimeDetail"
import { getAnimeResponse } from "../libs/api-libs"

const Page = async ({params}) => {
    const {id} = params

    const fullAnime = await getAnimeResponse(`anime/${id}/full`)

    return (
        <>
            <AnimeDetail api={fullAnime} />
        </>
    )
}

export default Page