import React, { useState } from "react";

const App = () => {
  const [val, setVal] = useState({ name: "" });
  console.log(val);

  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitForm} className="h-screen w-full bg-blue-100 p-10">
      <input
        value={val.name}
        onChange={(event) => setVal({ ...val, name: event.target.value })}
        placeholder="name"
        type="text"
        className="border-b-4"
      />
      <input type="submit" className="px-3 py-1 bg-red-200 text-2xl" />
    </form>
  );
};

export default App;
