import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Feed = () => {
  const [homeVideos, setHomeVideos] = useState([]);

  const API_KEY = "AIzaSyA9ywhZTwRXY7MQ3AMLQO11rMC4uwVVRA";

  const fetchVideos = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyA9ywhZTwRXY7MQ3-AMLQO11rMC4uwVVRA`
    );

    const data = await response.json();
    console.log(data.items);
    setHomeVideos(data.items);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const converter = (value) => {
    if (value >= 1000000) {
      return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
      return Math.floor(value / 1000) + "K";
    } else {
      return value;
    }
  };

  return (
    <div className="bg-white p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-1 sm:px-4 md:px-6 lg:px-10 py-4">
        {homeVideos.map((item, index) => (
          <Link to={`/video/${item.id}`} className="block" key={index}>
            <div className="border-2 border-black-300 rounded-xl overflow-hidden hover:bg-gray-200 cursor-pointer">
              <img
                src={item?.snippet.thumbnails.high.url}
                alt="thumbnail"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="flex flex-col gap-2 p-2">
                <h3 className="text-lg font-bold line-clamp-2">
                  {item?.snippet.title}
                </h3>
                <p className="font-semibold text-sm text-gray-600">
                  {item?.snippet.channelTitle}
                </p>
                <div className="flex text-sm text-gray-700">
                  <span>{converter(item?.statistics.viewCount)} views</span>
                  <span className="mx-1">•</span>
                  <span>{moment(item?.snippet.publishedAt).fromNow()}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Feed;
