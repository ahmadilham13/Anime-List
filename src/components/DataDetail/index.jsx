import Link from "next/link"

const DataDetail = ({api}) => {
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col sm:py-12">
            <div className="py-3 sm:max-w-xl sm:mx-auto">
                <div className="bg-customColor-primary shadow-lg border-gray-100 max-h-100 border sm:rounded-3xl space-x-8">
                    <div className="flex p-8">
                        <div className="overflow-visible w-1/2">
                            <img className="rounded-3xl shadow-lg max-h-[100%]" src={api.data.images.webp.image_url}/>
                        </div>
                        <div className="flex flex-col w-1/2 space-y-4">
                            <div className="flex flex-col space-y-4">
                                <div className="flex justify-between items-start gap-2">
                                    <h2 className="text-3xl font-bold">{api.data.title}</h2>
                                    <div className="text-customColor-primary bg-customColor-secondary font-bold rounded-xl p-2">7.2</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400">Series :</div>
                                    <div className="text-lg text-gray-800">{api.data.title_synonyms != false ? api.data.title_synonyms : '-'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="text-2xl font-bold">Informasi Anime</p>
                        <div className="flex gap-2">
                            <div className="font-bold">Japanese</div>
                            <div className="">{api.data.title_japanese}</div>
                        </div>
                        <div className="flex gap-2">
                            <div className="font-bold">English</div>
                            <div className="">{api.data.title_english}</div>
                        </div>
                        <div className="flex gap-2">
                            <div className="font-bold">Type</div>
                            <div className="">{api.data.type}</div>
                        </div>
                        <div className="flex gap-2">
                            <div className="font-bold">Duration</div>
                            <div className="">{api.data.duration}</div>
                        </div>
                        <div className="flex gap-2">
                            <div className="font-bold">Episode</div>
                            <div className="">{api.data.episodes}</div>
                        </div>
                        <div className="flex gap-2">
                            <div className="font-bold">Status</div>
                            <div className="">{api.data.status}</div>
                        </div>
                        <div className="flex gap-2">
                            <div className="font-bold">Score</div>
                            <div className="">{api.data.score}</div>
                        </div>
                        <div className="flex gap-2">
                            <div className="font-bold">Season</div>
                            <div className="">{api.data.season} {api.data.year}</div>
                        </div>
                        <div className="flex gap-2">
                            <div className="font-bold">Rank</div>
                            <div className="">{api.data.rank}</div>
                        </div>
                        <div className="flex gap-2">
                            <div className="font-bold">Genre</div>
                            <div className="flex flex-col">{api.data.genres.map((genre) => {
                                return (
                                    <Link href={genre.url} className="flex">- {genre.name}</Link>
                                )
                            })}</div>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="text-2xl font-bold">Trailer</p>
                        <iframe className="sm:w-[500px] w-[325px] h-[315px]" src={api.data.trailer.embed_url} frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataDetail