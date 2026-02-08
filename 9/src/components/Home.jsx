import React, { useEffect, useState } from "react";
const Home = () => {
  const [first, setfirst] = useState("This is a small data");
  const [second, setsecond] = useState("This is large data");
  useEffect(() => {
    console.log("component created successfully");

    return () => {
      console.log("Component deleted successfully");
    };
  }, []);
  return (
    <div className="">
      <div className="px-10">
        <h1 className="text-2xl font-bold">{first}</h1>
        <button
          onClick={() => setfirst("The small has been changed ")}
          className="px-5 py-2 bg-zinc-100 text-xl font-bold rounded mt-3"
        >
          Click me
        </button>
      </div>
      <div className="px-10 mt-10">
        <h1 className="text-2xl font-bold">{second}</h1>
        <button
          onClick={() => {
            setsecond("The large has been change");
          }}
          className="px-5 py-2 bg-zinc-100 text-xl font-bold rounded mt-3"
        >
          Click me
        </button>
      </div>
    </div>
  );
};

export default Home;
