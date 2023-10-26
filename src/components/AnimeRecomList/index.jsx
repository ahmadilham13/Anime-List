import Image from "next/image"
import Link from "next/link"

const AnimeRecomList = ({api}) => {
    return (
        <div className="flex flex-col h-screen overflow-x-scroll no-scrollbar">
            {api.data.map((anime, index) => {
                return (
                    <Link key={index} className="m-2 rounded-md grid grid-cols-12 bg-customColor-primary shadow p-2 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" href={anime.entry[0].url}>
                        <div className="col-span-3">
                            <Image src={anime.entry[0].images.webp.image_url} width={200} height={200}/>
                        </div>
                        <div className="col-span-9">
                            {anime.entry[0].title}
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default AnimeRecomList