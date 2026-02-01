import React from "react";
import { useState } from "react";

const App = () => {
  const [val, setval] = useState([
    { name: "Adarsh Singh", email: "adarshsingh@gmail.com" },
    { name: "Devansh Pal", email: "devanshpal@gmail.com" },
    { name: "Rahul chauhan", email: "rahulchauhan@gmail.com" },
    { name: "Shubham chota", email: "shubhamchota@gmail.com" },
  ]);
  console.log(val);
  return (
    <div className="h-screen w-full bg-blue-200 p-3 flex flex-col justify-center items-center gap-7">
      <div className="w-[27%] bg-red-50 p-3 flex flex-col items-center gap-3 ">
        {val.map((ele) => (
          <div>
            <h1 className="uppercase text-2xl ">Name : {ele.name}</h1>
            <h1 className="uppercase text-2xl ">Email :{ele.email}</h1>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          setval((prev) =>
            prev.map((ele, id) =>
              ele.name === "Adarsh Singh"
                ? { ...ele, email: "kallusingh@gmail.com" }
                : ele
            )
          )
        }
        className="w-fit px-10 py-1 border text-3xl text-[#c26565] bg-amber-200"
      >
        Click
      </button>
    </div>
  );
};

export default App;
