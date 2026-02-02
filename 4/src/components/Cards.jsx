import React from "react";

const Cards = (props) => {
  const { songs, addFavorite } = props;
  console.log(songs);
  return (
    <div className="w-full p-6 flex flex-wrap justify-between gap-y-15 ">
      {songs.map((ele, idx) => (
        <div key={idx} className="h-[40vh] w-[22%] bg-blue-300 relative rounded-3xl shrink-0">
          <img
            className="w-full h-[30vh] object-cover object-top rounded-xl"
            src={ele.img}
            alt=""
          />
          <h1 className="text-2xl text-center">{ele.songName}</h1>
          <button
            onClick={() => addFavorite(idx)}
            className={`px-9 py-2 ${
              ele.isFavoriate ? "bg-[#a34636]" : "bg-[#E08F41]"
            } text-2xl absolute left-[50%] -translate-x-1/2 translate-y-1/2 rounded-xl`}
          >
            {ele.isFavoriate ? "Add" : "Added"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
