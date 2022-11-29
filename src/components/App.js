import React from "react";
import video from "../data/video.js";
import VideoInfo from "./VideoInfo";

function App() {
  return (
    <VideoInfo videoData={video}/>
  );
}

export default App;
