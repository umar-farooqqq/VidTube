import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";

const Recommendation = () => {
 
  const [setData, setRecommendationData] = useState([]);

  const recommendationData = async () => {
    const recommendation_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyA9ywhZTwRXY7MQ3-AMLQO11rMC4uwVVRA`;
    await fetch(recommendation_URL)
      .then((res) => res.json())
      .then((data) => setRecommendationData(data.items));
  };
  useEffect(() => {
    recommendationData();
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
    <div className="w-full min-h-screen p-4 mr-4 my-4 flex flex-col lg:w-[45%] gap-2">
      {setData?.map((item, index) => (
        <div className="w-full h-[150px] flex md:h-[200px] border-2 rounded-xl overflow-hidden hover:bg-gray-200 cursor-pointer ">
          <img
            src={item?.snippet.thumbnails.high.url}
            alt=""
            className="w-[200px] h-[150px] md:w-[250px] md:h-[200px] object-cover"
          />

          <div className="flex flex-col gap-2">
            <h1 className="text-sm font-semibold pl-2 pt-2 md:text-md ">
              {item?.snippet.title}
            </h1>
            <p className="text-sm font-bold pl-2 md:text-md">{item?.snippet.channelTitle}</p>

            <span className="text-sm pl-2 md:text-md">
              {converter(item?.statistics.viewCount)} views •{" "}
              {moment(item?.snippet.publishedAt).fromNow()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommendation;
