import React from "react";

function VideoCard() {
  return (
    <div className="video-card">
      <div className="video-thumbnail">
        <img src="https://picsum.photos/400/200" alt="" className="thumbnail" />
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
    </div>
  );
}

export default VideoCard;
