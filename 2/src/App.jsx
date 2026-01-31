import React from "react";
import { useState } from "react";

const App = () => {
  const [val, setval] = useState([1, 2, 3, 4, 5, 6]);
  console.log(val);
  return (
    <div className="h-screen w-full bg-blue-200 p-3 flex flex-col justify-center items-center gap-7">
      <div className="w-[27%] bg-red-50 p-3 flex flex-col items-center gap-3 ">
        {val.map((ele) => (
          <h1 className="uppercase text-2xl ">{ele}</h1>
        ))}
      </div>
      <button
        onClick={() => setval((prev) => prev.filter((ele, id) => ele % 2))}
        className="w-fit px-10 py-1 border text-3xl text-[#c26565] bg-amber-200"
      >
        Click
      </button>
    </div>
  );
};

export default App;
