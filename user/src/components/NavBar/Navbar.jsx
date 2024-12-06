import React from "react";
import { FaMusic } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className=" bg-gradient-to-r from-[#242424] to-musicColor shadow-md  w-full z-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex gap-2 items-center text-white md:text-2xl">
            <FaMusic />
            <h1 className="font-bold">
              Dream<span >Music</span>
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-4 md:gap-10 md:font-semibold text-white">
            <Link to="/" className=" hover:text-gray-200">
              Home
            </Link>
            <Link to="/login" className=" hover:bg-black bg-red-900 text-white px-3 py-1 rounded-lg">
              LogIn
            </Link>
          </div>

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
