import React from 'react';
import './TecommendedVideos.css';
import VideoCard from "./VideoCard.js";

function RecommendedVideos() {
    return (
        <div class="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommended__videos">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    )
}

export default RecommendedVideos
