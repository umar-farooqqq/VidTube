import React, { useState } from "react";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 sticky top-0 bg-white z-50">
      <div className="flex items-center gap-2 md:gap-4">
        <img
          src="/menu.svg"
          alt="menu"
          className="w-6 h-6 md:w-8 md:h-8"
        />
        <img
          src="/logo.svg"
          alt="logo"
          className="w-20 md:w-24 lg:w-28"
        />
      </div>

      {/* Search bar - hidden on mobile unless showSearch is true */}
      <div
        className={`${
          showSearch ? "flex" : "hidden"
        } md:flex items-center gap-2 flex-1 max-w-2xl mx-4 absolute md:relative top-full md:top-auto left-0 right-0 p-4 md:p-0 bg-white md:bg-transparent`}
      >
        <div className="flex items-center gap-2 bg-gray-200 border-2 border-black-300 rounded-full p-2 w-full">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full"
          />
          <button>
            <img
              src="/search.svg"
              alt="search"
              className="w-5 h-5"
            />
          </button>
        </div>
        <img
          className="bg-gray-200 border-2 border-black-300 rounded-full p-2 w-10 h-10"
          src="/mic.svg"
          alt="mic"
        />
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        {/* Mobile search icon */}
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="md:hidden bg-gray-200 border-2 border-black-300 rounded-full p-2"
        >
          <img src="/search.svg" alt="search" className="w-5 h-5" />
        </button>

        <div className="hidden md:flex items-center gap-2 bg-gray-200 border-2 border-black-300 rounded-full p-2">
          <img src="/plus.svg" alt="Create" className="w-5 h-5" />
          <span>Create</span>
        </div>
        <img
          src="/notification.svg"
          alt="bell"
          className="w-6 h-6 md:w-8 md:h-8"
        />
        <img
          src="/user.svg"
          alt="user"
          className="w-6 h-6 md:w-8 md:h-8"
        />
      </div>
    </nav>
  );
};

export default Navbar;
