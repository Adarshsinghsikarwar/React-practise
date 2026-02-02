import { Routes, Route } from "react-router-dom";
import User from "../components/User";
import About from "../components/About";
import Home from "../components/Home";
const Routing = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Routing;
