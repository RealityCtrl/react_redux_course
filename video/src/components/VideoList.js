import React from "react";
import './VideoList.css'
import VideoCard from './VideoCard'

const VideoList = ({videos, onVideoSelect}) => {
    const renderedVideos = videos.map((video) => {
        return <VideoCard 
            key={video.id.videoId}
            video={video}
            onVideoSelect={onVideoSelect}
        />
    })
    return <div className="ui relaxed divided list">{renderedVideos}</div>
};

export default VideoList;