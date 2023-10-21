import Image from "next/image"
import Link from "next/link"

const AnimeList = ({data}) => {
    return (
        <Link href={`/${data.mal_id}`} className="cursor-pointer">
            <Image src={data.images.webp.image_url} alt="..." width={350} height={350} className="w-full max-h-64 object-cover"/>
            <h3 className="font-bold md:text-xl text-md p-4">{data.title}</h3>
        </Link>
    )
}

export default AnimeList