import { Link } from "react-router-dom";
import React, { useState } from "react";

function VideoCard() {

  const [videoData, setVideoData] = useState(null);

  return (
    <div className="video-card">
      <Link to={`/video/10`} className="video-card_link">
        <div className="video-thumbnail">
          <img
            src="https://picsum.photos/400/200"
            alt=""
            className="thumbnail"
          />
          <p className="duration">1:20</p>
        </div>
        <div className="details">
          <div className="channel-img">
            <img src="https://picsum.photos/35/35" alt="" />
          </div>
          <div className="text">
            <p className="title">
              Lorem ipsum dolor sit amet conseur, adipisicing
            </p>
            <p className="channel-name">Channel name</p>
            <p className="views">200k views -- 12 days ago</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default VideoCard;
