import { getAnimeResponse } from "@/app/libs/animeApiLibs"
import AnimeList from "@/components/DataList/Anime"
import Header from "@/components/DataList/Anime/Header"

const Page = async ({params}) => {

  const {keyword} = params
  const decodedKeyword = decodeURI(keyword)   // for decode like space(%20)
  
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

  return (
    <>
      <section>
        <Header title={`Pencarian untuk : ${decodedKeyword}`}/>
        <AnimeList api={searchAnime} />
      </section>
    </>
  )
}

export default Page