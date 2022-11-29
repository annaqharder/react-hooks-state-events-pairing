import React, {useState} from "react"
import Comments from "./Comment"
import CommentsCard from "./CommentsCard"

function VideoInfo({ videoData }) {
    const [ videoInfo, setVideoInfo ] = useState(videoData)
    const [ isVisible, setIsVisible ] = useState(true)

    function handleVisibility() {
        setIsVisible(!isVisible)
    }

    function handleLikes() {
        let video = {...videoInfo}
        video.upvotes=video.upvotes + 1
        setVideoInfo(video)
    }

    function handleDislikes() {
        let video = {...videoInfo}
        video.downvotes = video.downvotes + 1
        setVideoInfo(video)
    }

    return (
     <div className="App">
        <iframe
            width="919"
            height="525"
            src={videoData.embedUrl}
            frameBorder="0"
            allowFullScreen
            title={videoData.title}
        />
        <h1>{videoInfo.title}</h1>
        <span>{videoInfo.views} views | Uploaded {videoInfo.createdAt}</span>
        <br/>
        <button onClick={handleLikes}>{videoInfo.upvotes} 👍 </button>
        <button onClick={handleDislikes}>{videoInfo.downvotes} 👎 </button>
        <br/>
        <button onClick={handleVisibility}> {isVisible ? "Hide Comments" : "Show Comments"} </button>
        {isVisible ? <CommentsCard comments = {videoInfo.comments}/> : ""}
    </div>
    );
}

export default VideoInfo;
