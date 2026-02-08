import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-15 py-3">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
      >
        Home
      </NavLink>

      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
        to="/service"
      >
        Service
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
        to="/show"
      >
        Show
      </NavLink>
    </div>
  );
};

export default Navbar;
