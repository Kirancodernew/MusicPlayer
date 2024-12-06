import React from "react";
import Header from "./Header";
import SongsList from "../SongsList/SongsList";
import ArtistInfo from "./ArtistInfo";

const MainContent = () => {
  return (
    <main className="flex-1 py-6 ">
      {/* Header */}
      <Header />
      {/* Artist Info */}
      <ArtistInfo/>
      {/* Song List */}
      <SongsList />
    </main>
  );
};

export default MainContent;
