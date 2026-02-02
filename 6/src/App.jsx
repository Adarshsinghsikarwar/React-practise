import React from "react";
import Navbar from "./components/Navbar";
import Routing from "./utils/Routing";

const App = () => {
  return (
    <div className="h-screen w-full bg-red-100">
      <Navbar />
      <Routing />
    </div>
  );
};

export default App;
