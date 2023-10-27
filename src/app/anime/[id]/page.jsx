import DataDetail from "@/components/DataDetail"
import { getAnimeResponse } from "@/app/libs/animeApiLibs"

const Page = async ({params}) => {
    const {id} = params

    const fullAnime = await getAnimeResponse(`anime/${id}/full`)

    return (
        <>
            <DataDetail api={fullAnime} />
        </>
    )
}

export default Page