import React from "react";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div className="w-full h-screen bg-blue-200">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
