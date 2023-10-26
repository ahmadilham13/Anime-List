import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import AnimeRecomList from "@/components/AnimeRecomList"
import { getAnimeResponse } from "./libs/api-libs"

const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  const recommendAnime = await getAnimeResponse("recommendations/anime")

  return (
    <>
    <div className="container px-4 flex-grow w-full py-4 sm:py-16 mx-auto">
      {/* <div className="bg-customColor-accent mb-2">tess</div> */}
      <div className="md:grid md:grid-cols-12 w-full gap-4">
        <div className="md:col-span-9">
          <div className="mx-auto w-full">
            <div className="container my-8">
              <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua"/>
              <AnimeList api={topAnime}/>
            </div>
          </div>

          <div className="mx-auto w-full">
            <div className="container my-8">
              <Header title="Rekomendasi Anime" linkHref="/rekomendasi" linkTitle="Lihat Semua"/>
              <AnimeList api={topAnime}/>
            </div>
          </div>
        </div>
        <div className="bg-customColor-secondary md:col-span-3 w-full">
          <div className="p-2">
            <Header title="Rekomendasi Anime"/>
          </div>
          <AnimeRecomList api={recommendAnime}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Page