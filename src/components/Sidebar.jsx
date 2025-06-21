import React from "react";
import {
  sidebar_content,
  sidebar_content1,
  sidebar_content2,
} from "../constants";

const Sidebar = () => {
  return (
    <div className="500 w-[200px] h-screen sticky top-20">
      <div className="first space-y-3 py-2">
        {sidebar_content.map((field) => (
          <div className="home flex gap-4 pl-4">
            <a href="#">
              <img src={field.imgUrl} alt={field.title} />
            </a>
            <a href="#">
              <span>{field.title}</span>
            </a>
          </div>
        ))}
      </div>

      <div className="second space-y-3 py-2 border-t-2 border-gray-300">
        <h2 className="text-bold pl-4">Explore</h2>
        {sidebar_content1.map((field) => (
          <div className="Trending flex gap-4 pl-4">
            <a href="#">
              <img src={field.imgUrl} alt={field.title} />
            </a>
            <a href="#">
              <span>{field.title}</span>
            </a>
          </div>
        ))}
      </div>

      <div className="third space-y-3 py-2 border-t-2 border-gray-300">
        {sidebar_content2.map((field) => (
          <div className="Settings flex gap-4 pl-4">
            <a href="#">
              <img src={field.imgUrl} alt={field.title} />
            </a>
            <a href="#">
              <span>{field.title}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
