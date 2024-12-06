import React, { createContext, useContext, useState, useEffect } from "react";
import { Howl } from "howler";
import album1 from '../assets/michael.jpg';
import album2 from "../assets/music1.png";
import album3 from "../assets/music2.png";
import album4 from "../assets/music3.png";

import song1 from '/songs/song5.mp3'
import song2 from '/songs/song1.mp3'
import song3 from '/songs/song4.mp3'
import song4 from '/songs/song2.mp3'
import song5 from '/songs/song3.mp3'



// Create a context
const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([
    {
      id: "1",
      src: song1,
      icon: album2,
      title: "Billie Jean",
      playing: "1,040,811,084",
      time: "4:52",
      album: "Thriller 25 Sup...",
    },
    {
      id: "2",
      src: song2,
      icon: album1,
      title: "Beat It",
      playing: "643,786,045",
      time: "4:18",
      album: "Thriller 25 Sup...",
    },
    {
      id: "3",
      src: song3,
      icon: album3,
      title: "Smooth Criminal - Michael Jackson - Live Munich 1997",
      playing: "407,234,004",
      time: "4:00",
      album: "Thriller 25 Sup...",
    },
    {
      id: "4",
      src: song4,
      icon: album4,
      title: "Don't Stop Til You Get Enough - Michael Jackson",
      playing: "316,391,952",
      time: "4:13",
      album: "Bad 25th Anni...",
    },
    {
      id: "5",
      src: song5,
      icon: album4,
      title: "Rock With You - Single Version",
      playing: "268,187,218",
      time: "3:13",
      album: "Off The Wall",
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadAndPlay = (index) => {
    if (sound) {
      sound.stop();
      sound.unload(); // Unload the previous sound
    }
    const newSound = new Howl({
      src: [playlist[index].src],
      html5: true,
      onplay: () => {
        setDuration(newSound.duration());
        setIsPlaying(true);
      },
      onend: () => {
        next(); // Automatically move to the next track when the song ends
      },
      onseek: (seekTime) => {
        setCurrentTime(seekTime);
      },
      onpause: () => {
        setIsPlaying(false);
      },
    });
    newSound.play();
    setSound(newSound);
    setCurrentIndex(index);
  };

  const play = () => {
    if (sound) {
      sound.play();
      setIsPlaying(true);
    } else {
      loadAndPlay(currentIndex);
    }
  };

  const pause = () => {
    if (sound) {
      sound.pause();
      setIsPlaying(false);
    }
  };

  const next = () => {
    const nextIndex = (currentIndex + 1) % playlist.length;
    loadAndPlay(nextIndex);
  };

  const previous = () => {
    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    loadAndPlay(prevIndex);
  };

  const seek = (value) => {
    if (sound) {
      sound.seek(value); // Seek to the new time
      setCurrentTime(value); // Update the current time immediately
    }
  };

  // Update current time every second if playing
  useEffect(() => {
    let progressInterval;
    if (sound && isPlaying) {
      progressInterval = setInterval(() => {
        setCurrentTime(sound.seek());
      }, 1000);
    } else {
      clearInterval(progressInterval); // Stop interval when paused
    }

    return () => clearInterval(progressInterval); // Cleanup interval
  }, [isPlaying, sound]);

  return (
    <MusicPlayerContext.Provider
      value={{
        playlist,
        currentIndex,
        isPlaying,
        play,
        pause,
        next,
        previous,
        loadAndPlay,
        currentTime,
        duration,
        setPlaylist,
        seek,
        loading,
        setLoading
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error("useMusicPlayer must be used within a MusicPlayerProvider");
  }
  return context;
};
