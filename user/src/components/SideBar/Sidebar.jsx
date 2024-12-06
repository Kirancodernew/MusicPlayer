import React from "react";
import { Link } from "react-router-dom";
import { FaMusic, FaHome } from "react-icons/fa";
import { FaArrowTrendUp, FaCompass } from "react-icons/fa6";
import { IoIosMusicalNote, IoIosLogOut, IoMdSettings } from "react-icons/io";

const Sidebar = () => {

  const handleLogout = () => {
    localStorage.removeItem("authToken");
  };


  return (
    <aside className="w-64 bg-gray-900 p-4 hidden lg:flex flex-col justify-between ">
      <div>
        <div className="flex gap-2 items-center text-red-500 text-2xl">
          <FaMusic />
          <h1 className="font-bold">
            Dream<span className="text-white">Music</span>
          </h1>
        </div>
        <nav className="mt-8 space-y-4">
          <p className="text-gray-400 text-xs">MENU</p>
          <Link to="/home" className="flex items-center gap-3 hover:text-gray-400">
            <span className="text-red-500 text-lg">
              <FaHome />
            </span>
            Home
          </Link>
          <Link to="/trends" className="flex items-center gap-3 hover:text-gray-400">
            <span className="text-red-500 text-lg">
              <FaArrowTrendUp />
            </span>
            Trends
          </Link>
          <Link to="/library" className="flex items-center gap-3 hover:text-gray-400">
            <span className="text-red-500 text-lg">
              <IoIosMusicalNote />
            </span>
            Library
          </Link>
          <Link to="/discover" className="flex items-center gap-3 hover:text-gray-400">
            <span className="text-red-500 text-lg">
              <FaCompass />
            </span>
            Discover
          </Link>
        </nav>
      </div>
      <div>
      <p className="text-gray-400 pb-4 text-xs">GENERAL</p>
        <Link to="/settings" className="flex items-center gap-3">
          <span className="text-red-500 text-xl">
            <IoMdSettings />
          </span>
          Settings
        </Link>
        <Link to="/login" className="flex items-center gap-3 mt-4" onClick={handleLogout}>
          <span className="text-red-500 text-xl">
            <IoIosLogOut />
          </span>
          Log Out
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
