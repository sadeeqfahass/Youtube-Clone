import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function VideoCard(props) {

  return (
    <div className="video-card">
      <Link to={`/video`} className="video-card_link">
        <div className="video-thumbnail">
          <img
            src={props.thumbnail}
            alt=""
            className="thumbnail"
          />
          <p className="duration">{props.duration}:{props.duration}</p>
        </div>
        <div className="details">
          <div className="channel-img">
            <img src="https://picsum.photos/35/35" alt="" />
          </div>
          <div className="text">
            <p className="title">{props.title}</p>
            <p className="channel-name">{videoData.channelTitle}</p>
            <p className="views">{props.viewCount}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default VideoCard;
