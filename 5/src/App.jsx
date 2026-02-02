import React, { useRef } from "react";

const App = () => {
  const name = useRef(null);
  const age = useRef(null);
  const email = useRef(null);

  const submitForm = (event) => {
    event.preventDefault();

    console.log(name.current.value);
    console.log(age.current.value);
    console.log(email.current.value);
  };

  return (
    <form 
      onSubmit={submitForm}
      className="h-screen w-full bg-blue-100 p-10"
    >
      <input ref={name} placeholder="name" type="text border-b-4" />
      <input ref={age} placeholder="age" type="text" />
      <input ref={email} placeholder="email" type="text" />
      <input type="submit" className="px-3 py-1 bg-red-200 text-2xl"/>
    </form>
  );
};

export default App;
