import React, {useEffect, useState} from 'react';
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import useVideos from "../hooks/useVideos";


const App = () => {
    const [videos, search] = useVideos("the office")
    const [selectedVideo, setSelectedVideo] = useState(null)

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])

    return (
        <div className={"ui container"}>
            <SearchBar onSubmit={search}/>
            <div className={"ui grid"}>
                <div className={"ui row"}>
                    <div className={"eleven wide column"}>
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className={"five wide column"}>
                        <VideoList videos={videos} selectedVideo={setSelectedVideo}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App