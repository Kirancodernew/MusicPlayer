import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import SongsTable from "./SongsTable"; // Import the SongsTable component
import { useMusicPlayer } from "../../context/MusicContext";


const SongsList = () => {
  const { playlist, setPlaylist, loadAndPlay, currentIndex } = useMusicPlayer();
  const [seeAll,setSeeAll]=useState(false)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = ({ active, over }) => {
    if (active.id !== over.id) {
      const oldIndex = playlist.findIndex(({ id }) => id === active.id);
      const newIndex = playlist.findIndex(({ id }) => id === over.id);

      const updatedPlaylist = [...playlist];
      const [movedSong] = updatedPlaylist.splice(oldIndex, 1);
      updatedPlaylist.splice(newIndex, 0, movedSong);

      setPlaylist(updatedPlaylist);
    }
  };

  return (
    
    <section  >
      <div className="flex items-center justify-between mb-4 px-6 md:px-12 lg:px-16">
        <h3 className="text-lg sm:text-xl font-semibold">Popular</h3>
        <button className="text-blue-500 cursor-pointer" onClick={()=>setSeeAll(!seeAll)}>See All</button>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SongsTable
          seeAll={seeAll}
          playlist={playlist}
          currentIndex={currentIndex}
          loadAndPlay={loadAndPlay}
        />
      </DndContext>
    </section>
  );
};

export default SongsList;
