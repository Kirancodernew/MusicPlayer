import React, { useEffect, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaRandom,
  FaSync,
} from "react-icons/fa";

import { useMusicPlayer } from "../../context/MusicContext";

const NowPlaying = () => {
  const {
    playlist,
    currentIndex,
    isPlaying,
    play,
    pause,
    next,
    previous,
    currentTime,
    duration,
    seek,
  } = useMusicPlayer();

  const currentSong = playlist[currentIndex];

  // Calculate progress percentage
  const progressPercentage = (currentTime / duration) * 100;

  const handleProgressChange = (e) => {
    const value = e.target.value;
    seek(value); // Call seek immediately
  };

  // Format time into mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <aside className="w-full xl:w-80 xl:bg-gray-900 p-4  flex justify-center items-end xl:min-h-full">
      <div className="bg-[#6b0000] p-4 rounded-lg w-full md:w-[80%] xl:w-full flex flex-col items-center gap-4">
        <div className="hidden lg:flex flex-col justify-center gap-4 items-center ">
          {/* Title */}
          <h2 className="font-semibold text-white text-sm">Now Playing</h2>

          {/* Image */}
          <div className="w-full h-10 md:h-40 overflow-hidden rounded-md">
            <img
              src={currentSong.icon} // Replace with dynamic image if available: currentSong.image
              alt="Now Playing"
              className="rounded-md w-full h-full object-contain md:object-cover scale-110"
            />
          </div>
        </div>
        <div className="w-full">
          {/* Song Information */}
          <div className="flex items-center justify-center gap-3 lg:gap-0">
            {/* Image */}
            <div className="w-14 h-14 overflow-hidden rounded-md lg:hidden">
              <img
                src={currentSong.icon} // Replace with dynamic image if available: currentSong.image
                alt="Now Playing"
                className="rounded-md w-full h-full object-contain md:object-cover scale-110"
              />
            </div>
            <div className="text-center">
              <h4 className="text-lg font-bold text-white">
                {currentSong?.title || "Unknown Song"}
              </h4>
              <p className="text-gray-300 text-sm">
                {currentSong?.album || "Unknown Artist"}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full flex items-center justify-between gap-2">
            <span>{formatTime(currentTime)}</span> {/* Dynamic current time */}
            <input
              type="range"
              className="w-full accent-white h-1"
              min="0"
              max={duration}
              value={currentTime} // Reflect the current time
              onChange={handleProgressChange} // Change the progress on user input
            />
            <span>{formatTime(duration)}</span> {/* Dynamic duration */}
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center w-full mt-4">
            <button>
              <FaSync className="text-white text-lg" />
            </button>
            <div className="flex items-center">
              <button onClick={previous}>
                <FaStepBackward className="text-white text-lg" />
              </button>
              <button
                className="bg-[#480000] p-2 rounded-md mx-4"
                onClick={isPlaying ? pause : play}
              >
                {isPlaying ? (
                  <FaPause className="text-white text-lg" />
                ) : (
                  <FaPlay className="text-white text-lg" />
                )}
              </button>
              <button onClick={next}>
                <FaStepForward className="text-white text-lg" />
              </button>
            </div>

            <button>
              <FaRandom className="text-white text-lg" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default NowPlaying;
