import React from "react";
import { useState } from "react";

const App = () => {
  const [val, setval] = useState(false);
  let changeState = () => !val;
  return (
    <div className="h-screen w-full bg-blue-200 p-3 flex flex-col justify-center items-center gap-7">
      <h1 className="uppercase text-5xl ">{val.toString()}</h1>
      <button
        onClick={() => setval(!val)}
        className="w-fit px-10 py-1 border text-3xl text-[#c26565] bg-amber-200"
      >
        Click
      </button>
    </div>
  );
};

export default App;
