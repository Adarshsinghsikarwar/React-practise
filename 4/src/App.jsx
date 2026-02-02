import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

const App = () => {
  const data = [
    {
      img: "https://m.media-amazon.com/images/M/MV5BMTk2ZmFhYjctYWZiYy00N2IxLWEzMWItZGRiMDY4ZDQwZWFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      songName: "Saiyaara",
      isFavoriate: false,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BMTk2ZmFhYjctYWZiYy00N2IxLWEzMWItZGRiMDY4ZDQwZWFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      songName: "Laal Pari",
      isFavoriate: false,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BMTk2ZmFhYjctYWZiYy00N2IxLWEzMWItZGRiMDY4ZDQwZWFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      songName: "Chor Bazari Phir Se",
      isFavoriate: false,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BMTk2ZmFhYjctYWZiYy00N2IxLWEzMWItZGRiMDY4ZDQwZWFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      songName: "Ve Haaniyaan",
      isFavoriate: true,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BMTk2ZmFhYjctYWZiYy00N2IxLWEzMWItZGRiMDY4ZDQwZWFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      songName: "Tum Se ",
      isFavoriate: false,
    },
  ];
  let [songs, setSongs] = useState(data);

  let addFavorite = (id) => {
    setSongs((ele) =>
      ele.map((val, idx) =>
        idx == id ? { ...val, isFavoriate: !val.isFavoriate } : val
      )
    );
  };
  return (
    <div className="h-screen w-full">
      <Navbar songs={songs} />
      <Cards songs={songs} addFavorite = {addFavorite} />
    </div>
  );
};

export default App;
