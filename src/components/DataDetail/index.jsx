import Image from "next/image"
import Link from "next/link"
import VideoPlayer from "../Utilities/VideoPlayer"

const DataDetail = ({api}) => {
    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-2xl text-customColor-primary">{api.data.title} - {api.data.year}</h3>
            </div>
            <div className="pt-4 px-4 flex gap-2 text-customColor-primary overflow-x-auto">
                <div className="w-36 flex flex-col justify-center items-center rounded border border-customColor-primary p-2">
                    <h3>PERINGKAT</h3>
                    <p>{api.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-customColor-primary p-2">
                    <h3>SKOR</h3>
                    <p>{api.data.score}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-customColor-primary p-2">
                    <h3>ANGGOTA</h3>
                    <p>{api.data.members}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-customColor-primary p-2">
                    <h3>EPISODES</h3>
                    <p>{api.data.episodes}</p>
                </div>
            </div>
            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-customColor-primary">
                <Image src={api.data.images.webp.image_url} alt={api.data.images.jpg.image_url} width={250} height={250} className="w-full rounded object-cover" />
                <p className="text-justify text-xl">{api.data.synopsis}</p>
            </div>
            <div>
                <VideoPlayer youtubeId={api.data.trailer.youtubeId}/>
            </div>
        </>
    )
}

export default DataDetail