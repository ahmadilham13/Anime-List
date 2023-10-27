import { getAnimeResponse } from "@/app/libs/animeApiLibs"
import DataList from "@/components/DataList"
import Header from "@/components/DataList/Header"

const Page = async ({params}) => {

  const {keyword} = params
  const decodedKeyword = decodeURI(keyword)   // for decode like space(%20)
  
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

  return (
    <>
      <section>
        <Header title={`Pencarian untuk : ${decodedKeyword}`}/>
        <DataList api={searchAnime} />
      </section>
    </>
  )
}

export default Page