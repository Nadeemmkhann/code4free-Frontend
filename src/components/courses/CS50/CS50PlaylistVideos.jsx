import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';

const CS50PlaylistVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchPlaylistVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems`,
          {
            params: {
              part: 'snippet',
              maxResults: 50,
              playlistId: 'PLhQjrBD2T382_R182iC2gNZI9HzWFMC_8',
              key: process.env.REACT_APP_API_KEY,
            },
          }
        );
        console.log(response.data.items);
        setVideos(response.data.items);
      } catch (error) {
        console.log('Error fetching playlist videos:', error);
      }
    };

    fetchPlaylistVideos();
  }, []);

  const videoOptions = {
    width: '540', // Specify the desired width
    height: '360', // Specify the desired height
  };

  return (
    <div className="flex flex-col mx-4 justify-center items-center">
    {videos.map((video,index) => (
      <div className="sm:w-1/2 tablet:h-[30%] tablet:w-[60%] bg-gray-100 px-4 mb-8 border-black border-2 m-4 p-2 rounded-lg " key={video.id}>
        {/* <h2 className="text-lg font-bold text-left"></h2> */}
        <div className="-tablet:aspect-w-16 tablet:aspect-h-9 flex justify-center items-center">
          <YouTube videoId={video.snippet.resourceId.videoId} className="w-fit border-black border-2 h-full" />
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-lg font-bold">{index } . {video.snippet.title}</h2>
        </div>
      </div>
    ))}
  </div>
  );
};

export default CS50PlaylistVideos;
