import React from "react";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableRow from "./SortableRow"; // Import the SortableRow component

const SongsTable = ({ playlist, currentIndex, loadAndPlay,seeAll }) => {
  return (
    <SortableContext
      items={playlist.map(({ id }) => id)}
      strategy={verticalListSortingStrategy}
    >
      <div className={`overflow-y-auto ${seeAll ? 'h-full':'max-h-[200px]'}  scrollbar-hide `}>
        <table className="w-full text-left text-gray-400 text-sm sm:text-base">
          <thead className="sticky top-0 bg-black z-10">
            <tr>
              <th className="pl-6 md:pl-12 lg:pl-16">#</th>
              <th></th>
              <th>Title</th>
              <th>Playing</th>
              <th>Time</th>
              <th className="text-right py-2 pr-6 md:pr-12 lg:pr-16">Album</th>
            </tr>
          </thead>
          <tbody>
            {playlist.map((song, index) => (
              <SortableRow
                key={song.id}
                song={song}
                index={index}
                currentIndex={currentIndex}
                loadAndPlay={loadAndPlay}
              />
            ))}
          </tbody>
        </table>
      </div>
    </SortableContext>
  );
};

export default SongsTable;
