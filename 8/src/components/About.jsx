import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex justify-evenly gap-10 py-3 mt-10">
      <Link to="/about/Person1" className="flex flex-col gap-7">
        <h1 className="text-xl font-semibold">Person1</h1>
        <button className="px-10 py-2 bg-zinc-200 rounded-lg">Go to Person 1</button>
      </Link>
      <Link to="/about/Person2" className="flex flex-col gap-7">
        <h1 className="text-xl font-semibold">Person2</h1>
        <button className="px-10 py-2 bg-zinc-200 rounded-lg">Go to Person 2</button>
      </Link>
      <Link to="/about/Person3" className="flex flex-col gap-7">
        <h1 className="text-xl font-semibold">Person3</h1>
        <button className="px-10 py-2 bg-zinc-200 rounded-lg">Go to Person 3</button>
      </Link>
    </div>
  );
};

export default About;
