import AnimeList from "@/components/DataList/Anime"
import Header from "@/components/DataList/Anime/Header"
import DataRecomList from "@/components/DataRecomList"
import { getAnimeResponse, getNestedAnimeResponse } from "../libs/animeApiLibs"
import { getMangaResponse } from "../libs/mangaApiLibs"

const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  const topManga = await getMangaResponse("top/manga", "limit=8")
  let recommendAnime = await getNestedAnimeResponse("recommendations/anime", "entry")

  recommendAnime = {data: recommendAnime.slice(0, 8)}

  return (
    <>
    <div className="container px-4 flex-grow w-full py-4 sm:py-16 mx-auto">
      {/* <div className="bg-customColor-accent mb-2">tess</div> */}
      <div className="md:grid md:grid-cols-12 w-full gap-4">
        <div className="md:col-span-9">
          <div className="mx-auto w-full">
            <div className="container my-8">
              <Header title="Anime Populer" linkHref="/populer" linkTitle="Lihat Semua"/>
              <AnimeList api={topAnime}/>
            </div>
          </div>

          <div className="mx-auto w-full">
            <div className="container my-8">
              <Header title="Manga Populer" linkHref="/rekomendasi" linkTitle="Lihat Semua"/>
              <AnimeList api={topManga}/>
            </div>
          </div>
        </div>
        <div className="bg-customColor-secondary md:col-span-3 w-full">
          <div className="p-2">
            <Header title="Rekomendasi Anime"/>
          </div>
          <DataRecomList api={recommendAnime}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Page