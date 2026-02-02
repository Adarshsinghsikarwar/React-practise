import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data.name))}
      className="h-screen w-full bg-blue-100 p-10"
    >
      <input {...register("name")} placeholder="name" type="text" />
      <input type="submit" className="px-3 py-1 bg-red-200 text-2xl" />
    </form>
  );
};

export default App;
