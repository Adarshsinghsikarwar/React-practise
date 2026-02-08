import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Service from "../components/Service";
import Show from "../components/Show";
const Mainroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/show" element={<Show />} />
      </Routes>
    </div>
  );
};

export default Mainroute;
