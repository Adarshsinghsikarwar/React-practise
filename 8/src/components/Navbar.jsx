import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-10 py-3">
      <NavLink to= "/" className="text-xl font-semibold">Home</NavLink>
      <NavLink to= "/about" className="text-xl font-semibold">About</NavLink>
      <NavLink to= "/contact" className="text-xl font-semibold">Contact</NavLink>
    </div>
  );
};

export default Navbar;
