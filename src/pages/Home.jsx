import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default Home;
