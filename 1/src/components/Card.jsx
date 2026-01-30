import React from "react";

const Card = () => {
  return (
    <div className="bg-red-50 w-[25%] shrink-0 p-2 rounded-xl ">
      <img className="rounded-xl"
        src="https://images.unsplash.com/photo-1768862042479-7ed3f209a5da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="flex  flex-col gap-8 mt-4">
        <h2 className= "text-2xl font-serif"> Amazon Basics</h2>
        <p className= "text-1xl font-serif">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          assumenda, suscipit consequatur quaerat voluptatum sed beatae, eius
          odio quibusdam magni accusamus nulla dolorem.
        </p>
      </div>
    </div>
  );
};

export default Card;
