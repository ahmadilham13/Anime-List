import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse, getNestedAnimeResponse } from "../libs/ApiAnimeLibs"

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")

  recommendedAnime = {data: recommendedAnime.slice(0, 8)}

  return (
    <>
      {/* anime populer start */}
      <section>
        <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua"/>
        <AnimeList api={topAnime} />
      </section>
      {/* anime populer end */}

      {/* anime rekomendasi start */}
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>
      {/* anime rekomendasi end */}
    </>
  )
}

export default Page