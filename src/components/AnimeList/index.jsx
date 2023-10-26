import Image from "next/image"
import Link from "next/link"

const AnimeList = ({api}) => {
    return (
        <div id="scrollContainer" className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8 no-scrollbar">
            {api.data?.map((anime, index) => {
                return (
                    <div key={index} className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg max-h-140 bg-customColor-primary">
                        <Link href={`/${anime.mal_id}`} className="space-y-2">
                            <div className="relative aspect-w-16 aspect-h-9">
                                <Image src={anime.images.webp.image_url} width={350} height={350} className="object-cover w-full max-h-64 shadow-md hover:shadow-xl rounded-lg"/>
                                <span className="m-2 absolute top-0 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-customColor-accent rounded-full">{anime.episodes} eps</span>
                            </div>
                            <div className="px-4 h-20">
                                <div className="text-lg leading-6 font-medium space-y-1">
                                    <h3 className="font-bold text-gray-800 mb-2">
                                        {anime.title}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    </div>     
                )
            })}
        </div>
    )
}

export default AnimeList