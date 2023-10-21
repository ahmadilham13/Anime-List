import AnimeList from "@/components/AnimeList"
import Link from "next/link"

const Home = async () => {

  const params = {
    limit: 8
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=${params.limit}`)
  
  const anime = await response.json()

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">PALING POPULER</h1>
        <Link href="/populer" className="md:text-xl text-sm underline hover:text-indigo-500 transition-all">Lihat Semua</Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {anime.data.map(data => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <AnimeList data={data}/>
            </div>
          )
        } )}
      </div>
    </div>
  )
}

export default Home