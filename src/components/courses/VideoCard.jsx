import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';

const VideoCard = (props) => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos`,
          {
            params: {
              part: 'snippet',
              id: props.videoId,
              key: 'AIzaSyBrdexjIDCCoWmRW_Mym0tVQy0kxj-jiMA', // Replace with your YouTube API key
            },
          }
        );
        console.log(response.data.items[0]);
        setVideo(response.data.items[0]);
      } catch (error) {
        console.log('Error fetching video:', error);
      }
    };

    fetchVideo();
  }, []);

  return (
    <div className='flex justify-center'>
        <div className="flex mt-8 justify-center w-1/2 bg-gray-100 border-2 border-black rounded-xl">
        {
            console.log(video)
        }
        { video ? (
            <div className="w-full max-w-2xl px-4 py-8">
            <div className="aspect-w-16 aspect-h-9">
                <YouTube
                videoId={video.id}
                className="w-full h-full"
                opts={{
                    width: '100%',
                    height: '400',
                }}
                />
            </div>
            <div className="mt-4 text-center">
                <h2 className="text-lg font-bold">{video.snippet.title}</h2>
                {/* <p className="text-gray-500">{video.snippet.description}</p> */}
            </div>
            </div>
        ) : (
            <div>Loading...</div>
        )}
        </div>
    </div>
  );
};

export default VideoCard;
