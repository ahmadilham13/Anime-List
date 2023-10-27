import DataList from "@/components/DataList"
import Header from "@/components/DataList/Header"
import DataRecomList from "@/components/DataRecomList"
import { getAnimeResponse } from "./libs/animeApiLibs"
import { getMangaResponse } from "./libs/mangaApiLibs"

const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  const topManga = await getMangaResponse("top/manga", "limit=8")
  const recommendAnime = await getAnimeResponse("recommendations/anime")

  return (
    <>
    <div className="container px-4 flex-grow w-full py-4 sm:py-16 mx-auto">
      {/* <div className="bg-customColor-accent mb-2">tess</div> */}
      <div className="md:grid md:grid-cols-12 w-full gap-4">
        <div className="md:col-span-9">
          <div className="mx-auto w-full">
            <div className="container my-8">
              <Header title="Anime Populer" linkHref="/populer" linkTitle="Lihat Semua"/>
              <DataList api={topAnime}/>
            </div>
          </div>

          <div className="mx-auto w-full">
            <div className="container my-8">
              <Header title="Manga Populer" linkHref="/rekomendasi" linkTitle="Lihat Semua"/>
              <DataList api={topManga}/>
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