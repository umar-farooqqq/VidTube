import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Datafetcher = () => {
  const URL =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyCXHWcJ5d7XQ-cxmNqVem5oaWPYN8H2DpE";

  const [dataVar, setData] = useState([]);

  const fetchdata = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.items);
    setData(data.items);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="pt-16 ">
      <div className="flex flex-col  flex-wrap   px-10 py-4 gap-4   md:flex-row ">
        {dataVar.map((item, index) => {
          return (
            <Link to={`/videoplay/${item.id}`}>
              <div
                key={index}
                className=" bg-gray-100 h-[75vw] w-full   hover:bg-gray-300 cursor-pointer rounded-xl md:h-[240px] md:w-[350px]   lg:h-[210px]     lg:w-[275px] xl:w-[285px] xl:h-[230px] "
              >
                <img
                  src={item?.snippet.thumbnails.medium.url}
                  className="rounded-tl-xl rounded-br-xl rounded-tr-xl rounded-bl-xl 
            px-2 py-2 h-[50vw] w-[100vw]  md:h-[140px] md:w-[350px]   lg:h-[125px]     lg:w-[275px] xl:w-[285px] xl:h-[125px]"
                  alt="logo"
                />
                <h1 className="text-[3vw] font-bold pl-4 md:text-[13px] lg:text-[12px] xl:text-[11px]">
                  {item?.snippet.title}
                </h1>
                <h2 className="text-[2vw] pl-4 md:text-[10px] lg:text-[9px]">
                  {dataVar[0]?.snippet.channelTitle}
                </h2>
                <div className=" flex gap-2 text-[2vw] pl-4 md:text-[10px] lg:text-[9px]">
                  <h2>{item?.statistics.viewCount}</h2>
                  <h2>{item?.snippet.publishedAt}</h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Datafetcher;
