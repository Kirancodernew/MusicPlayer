import React from "react";
import Sidebar from "../components/SideBar/Sidebar";
import MainContent from "../components/Hero/MainContent";
import NowPlaying from "../components/MusicPlayer/NowPlaying";

const MusicPlayer = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-b from-red-950 to-black text-white flex flex-col lg:flex-row">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-auto flex flex-col xl:flex-row justify-center items-center">
        <MainContent />
        
        {/* Now Playing */}
        <NowPlaying />

      </div>
    </div>
  );
};

export default MusicPlayer;
