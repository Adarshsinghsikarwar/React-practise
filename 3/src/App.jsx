import { ArrowRight } from "lucide-react";
import { useState } from "react";

const App = () => {
  const [val, setVal] = useState(false);

  return (
    <div className="w-full h-screen bg-blue-100 flex justify-center items-center">
      <div className="relative w-[20%] h-55 overflow-hidden">
      
        <div
          className={`absolute w-full h-55 transition-transform duration-500 ${
            val ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <img
            className="w-full h-55 object-cover"
            src="https://images.unsplash.com/photo-1769109004486-b9270b5654c1?q=80&w=687&auto=format&fit=crop"
            alt=""
          />
        </div>

        <div
          className={`absolute w-full h-55 transition-transform duration-500 ${
            val ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <img
            className="w-full h-55 object-cover"
            src="https://images.unsplash.com/photo-1769184618473-58c1f0e294f4?q=80&w=735&auto=format&fit=crop"
            alt=""
          />
        </div>

        <ArrowRight
          onClick={() => setVal(!val)}
          className="absolute w-12 h-12 left-1/2 bottom-4 -translate-x-1/2 bg-white rounded-full p-2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default App;
