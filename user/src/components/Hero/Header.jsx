import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-6 flex-wrap gap-4 px-6 md:px-12 lg:px-16">
      <nav className="flex space-x-4 sm:space-x-6">
        <Link to="/music" className="text-gray-400 hover:text-white">
          Music
        </Link>
        <Link to="/podcast" className="text-gray-400 hover:text-white">
          Podcast
        </Link>
        <Link to="/live" className="text-gray-400 hover:text-white">
          Live
        </Link>
        <Link to="/radio" className="text-gray-400 hover:text-white">
          Radio
        </Link>
      </nav>
      <div className="relative w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-800 text-white rounded-full px-4 py-2 pr-10 outline-none w-full focus:ring-2 focus:ring-red-900"
        />
        <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>
    </header>
  );
};

export default Header;
