import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between px-10">
      <NavLink
        className={(e) => {
          return [e.isActive ? "text-red-100" : ""].join(" ");
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "red" : "",
          };
        }}
        to="/user"
      >
        User
      </NavLink>
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "red" : "",
          };
        }}
        to="/about"
      >
        about
      </NavLink>
    </div>
  );
};

export default Navbar;
