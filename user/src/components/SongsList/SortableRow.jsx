import React, { memo } from "react";
import { FaMusic } from "react-icons/fa";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableRow = memo(({ song, index, currentIndex, loadAndPlay }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: song.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isActive = currentIndex === index;

  const truncateTextByDevice = (text) => {
    const screenWidth = window.innerWidth;
    const maxLength = screenWidth < 640 ? 10 : 30; // 15 for small devices, 30 for medium+
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <>
    <tr
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`relative text-xs md:text-base hover:bg-[#520000] hover:text-white py-2 cursor-pointer ${
        isActive ? "bg-[#6b0000] text-white" : ""
      }`}
      onClick={() => loadAndPlay(index)}
    >
      
      <td className="pl-6 md:pl-12 lg:pl-16">
        {isActive ? <FaMusic /> : song.id}
      </td>
      <td className="h-[54px] w-[54px] p-2">
        <img
          className="h-auto w-full object-contain"
          src={song.icon}
          alt="musicicon"
        />
      </td>
      <td
        className="truncate max-w-[150px] sm:max-w-[300px]"
        title={song.title} // Tooltip with full title on hover
      >
        {truncateTextByDevice(song.title)}
      </td>
      <td>{song.playing}</td>
      <td className="text-center md:text-start">{song.time}</td>
      <td className="text-right pr-6 md:pr-12 lg:pr-16">{song.album}</td>
    </tr>
    </>
  );
});

export default SortableRow;
