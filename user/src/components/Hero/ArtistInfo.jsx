import React from "react";
import bg from "../../assets/background.png";
import pic from "../../assets/pic.png";
import { MdVerified } from "react-icons/md";


const ArtistInfo = () => {
  return (
    <div className="mb-6 sm:mb-8 mt-28 relative px-6 md:px-12 lg:px-16">
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="relative h-56 bg-cover bg-center  rounded-3xl flex  items-center gap-6 shadow-lg overflow-hidden"
      >
        <div className="absolute w-full h-full bg-black/60 z-0" />

        <div className="text-white z-10 px-4 md:px-10">
          <div className="flex items-center gap-2 mb-1">
            <span>
              <MdVerified className="w-5 h-5 rounded-full flex items-center justify-center text-blue-500" />
            </span>
            <p className="text-sm font-medium text-gray-300">Verified Artist</p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">Michael Jackson</h2>
          <p className="text-gray-300 text-sm sm:text-base">
            27,852,501 monthly listeners
          </p>
        </div>
      </div>
      <div className="w-[350px] md:w-[525px] absolute right-0 bottom-[7rem] md:bottom-0 z-0 ">
        <img
          src={pic}
          alt="Michael Jackson"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default ArtistInfo;
