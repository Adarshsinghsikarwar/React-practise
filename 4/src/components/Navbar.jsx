import React from "react";

const Navbar = (props) => {
  const { songs } = props;
  let favorites = songs?.filter(ele => ele.isFavoriate) || [];

  return (
    <div className="w-full  flex justify-between px-10 py-2">
      <h2 className="text-3xl font-serif text-[#d18d17]">Adarsh Singh</h2>
      <h2 className="text-3xl font-sans px-5 text-white  bg-[#ba9961] text-center rounded-xl">
        Favoraite -{favorites.length}
      </h2>
    </div>
  );
};

export default Navbar;
