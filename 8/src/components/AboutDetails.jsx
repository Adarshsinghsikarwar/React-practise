import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AboutDetails = () => {  
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="gap-7 text-center mt-20">
      <h1 className="text-2xl font-bold mb-5">Person : {id}</h1>
      <button
        onClick={() => navigate(-1)}
        className="px-10 py-2 bg-zinc-200 rounded-lg"
      >
        Go to Person 1
      </button>
    </div>
  );
};

export default AboutDetails;
