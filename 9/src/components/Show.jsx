import React, { useEffect, useState } from "react";
import axios from "axios";

const Show = () => {
  useEffect(() => {
    getProduct();
  }, []);
  const [data, setdata] = useState([]);

  const getProduct = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .get(api)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  };
  console.log(data);
  return (
    <div className="px-20">
      <button className="py-2 px-5 bg-zinc-200 text-xl rounded-xl">
        Click to get data
      </button>
      <ul className="mt-10 flex flex-col gap-2">
        {data.length > 0 ? (
          data.map((ele, idx) => (
            <li key={idx} className="bg-red-100 text-xl font-medium">
              ${ele.title}
            </li>
          ))
        ) : (
          <h1> Loading </h1>
        )}
      </ul>
    </div>
  );
};

export default Show;
