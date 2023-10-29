import DataDetail from "@/components/DataDetail"
import { getAnimeResponse } from "@/app/libs/animeApiLibs"

const Page = async ({params: {id}}) => {

    const fullAnime = await getAnimeResponse(`anime/${id}`)

    return (
        <>
            <DataDetail api={fullAnime} />
        </>
    )
}

export default Page