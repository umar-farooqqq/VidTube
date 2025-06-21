import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import moment from "moment";
import Recommendation from "./Recommendation";

const PlayVideo = () => {
  const { id } = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState(null);
  const API_KEY = "AIzaSyA9ywhZTwRXY7MQ3-AMLQO11rMC4uwVVRA";

  const fetchVideoData = async () => {
    const videoDetails_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY} 
    `;
    await fetch(videoDetails_URL)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    const channelData_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=AIzaSyA9ywhZTwRXY7MQ3-AMLQO11rMC4uwVVRA`;
    await fetch(channelData_URL)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    const comment_URL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=32&videoId=${id}&key=${API_KEY}`;
    await fetch(comment_URL)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [id]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

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
    <div className="w-full h-full flex flex-col lg:flex-row lg:min-h-screen">
      <div className="lg:w-3/4">
        <iframe
          className="p-1 w-full"
          width="866"
          height="487"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title="Deadliest Plane Crash in Aviation History!"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="flex flex-col gap-2 p-1">
          <h1 className="text-2xl font-bold pl-2">
            {apiData ? apiData.snippet.title : "Title here"}
          </h1>
          <div className="flex items-center gap-2 pl-2">
            <img
              src={channelData?.snippet.thumbnails.high.url}
              alt=""
              className="sm:w-7 h-7 md:w-9 md:h-9 lg:w-11 lg:h-11 xl:w-13 xl:h-13 rounded-full"
            />
            <div>
              <p className="text-md font-semibold">
                {channelData ? channelData.snippet.title : "Channel Title"}
              </p>
              <p className="text-md">
                {channelData
                  ? converter(channelData.statistics.subscriberCount) +
                    " subscribers"
                  : "1.2M subscribers"}
              </p>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium ml-12">
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <span className="flex justify-between items-center pl-4">
            <span className="flex gap-2">
              <h1 className="text-sm text-black">
                <span>{converter(apiData?.statistics.viewCount)} views</span>
                <span className="mx-1">•</span>
                <span>{moment(apiData?.snippet.publishedAt).fromNow()}</span>
              </h1>
            </span>
            <span className="flex items-center gap-4">
              <button className="bg-gray-100 hover:bg-gray-200 border border-gray-300 w-[90px] rounded-full cursor-pointer text-sm font-medium flex items-center justify-center gap-2 py-1.5">
                <img src="/likeicon2.svg" alt="" />
                <h1 className="text-sm font-medium">
                  {converter(apiData?.statistics.likeCount)}
                </h1>
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 border border-gray-300 w-[50px] rounded-full cursor-pointer text-sm font-medium flex items-center justify-center py-1.5">
                <img src="/unlikeicon.svg" alt="" />
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 border border-gray-300 w-[90px] rounded-full cursor-pointer text-sm font-medium flex items-center justify-center gap-2 py-1.5">
                <img src="/shareicon.svg" alt="" />
                <h1 className="text-sm font-medium">Share</h1>
                <img src="/shareicon2.svg" alt="" />
              </button>
            </span>
          </span>
        </div>

        <div className="w-full">
          <span className="flex items-center gap-2 pl-4 pt-2">
            <h1 className="text-md font-medium mb-4">Comments</h1>
          </span>
          {commentData?.map((item, index) => (
            <div key={index}>
              <button className="flex-col items-center gap-2 pl-4">
                <div className="flex items-center gap-2 ">
                  <img
                    src={
                      item?.snippet.topLevelComment.snippet
                        .authorProfileImageUrl
                    }
                    alt=""
                    className="rounded-full"
                  />
                  <h1 className="text-md font-medium pt-1">
                    {item?.snippet.topLevelComment.snippet.authorDisplayName}
                  </h1>
                </div>
                <p className="py-1.5">
                  {item?.snippet.topLevelComment.snippet.textDisplay}
                </p>
                <div className="flex gap-4 justify-end pr-2">
                  <img src="/likeicon2.svg" alt="" className="w-5 h-5" />
                  <img src="/unlikeicon.svg" alt="" className="w-5 h-5" />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <Recommendation />
    </div>
  );
};

export default PlayVideo;
