import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async () => {

  const params = {
    limit: 8
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=${params.limit}`)
  
  const topAnime = await response.json()

  return (
    <>
      {/* anime populer start */}
      <section>
        <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua"/>
        <AnimeList api={topAnime} />
      </section>
      {/* anime populer end */}
    </>
  )
}

export default Page