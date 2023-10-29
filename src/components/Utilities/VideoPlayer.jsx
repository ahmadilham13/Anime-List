"use client"

import YouTube from "react-youtube"

const { useState } = require("react")

const VideoPlayer = ({youtubeId}) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button className="text-customColor-primary float-right bg-customColor-secondary px-3 mb-1" onClick={handleVideoPlayer}>X</button>
                <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} opts={option} onError={() => alert("Video is unavailable")} />
            </div>
        )
    }

    const ButtonOpenTrailer = () => {
        return (
            <button className="rounded fixed bottom-5 right-5 w-32 bg-customColor-primary text-customColor-dark text-xl hover:bg-customColor-accent transition-all shadow-xl" onClick={handleVideoPlayer}>Tonton trailer</button>
        )
    }

    return isOpen ? <Player /> : <ButtonOpenTrailer />
}

export default VideoPlayer