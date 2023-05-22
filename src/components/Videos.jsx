import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

function Videos() {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    async function getYouTubeVideos() {
      const url =
        "https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&chart=mostPopular&maxResults=50";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "841898e924msh914af5cbdb614ecp156575jsn177021cbb4c3",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setVideoData(data.items);
        console.log(data.items);
      } catch (error) {
        console.error(error);
      }
    }

    getYouTubeVideos();
  }, []);

  return (
    <div className="videos-container">
      {/* {videoData.map((item) => {
        const { id, snippet, contentDetails, statistics } = item;
        return (
          <VideoCard
            id={id}
            title={snippet.title}
            duration={contentDetails.duration}
            viewCount={statistics.viewCount}
            thumbnail={snippet.thumbnails.default.url}
          />
        );
      })} */}
    </div>
  );
}

export default Videos;
