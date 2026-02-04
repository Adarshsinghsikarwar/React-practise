import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    console.log("Component is created");
    return () => console.log("Component is delete");
  }, []);
  const [products, setproducts] = useState([]);
  const getproducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .get(api)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  const addproducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .post(api, {
        title: "test product",
        price: 13.5,
        description: "loremipsum set",
        image: "http://i.pravatar.cc",
        category: "electronic",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button onClick={getproducts}>Call Product API</button>
      <button onClick={addproducts}>save new Product in API</button>

      {/* <ul>
      {products.length >0 }
    </ul> */}
    </div>
  );
};

export default App;
