import Navbar from "./components/Navbar";
import Mainroute from "./routing/Mainroute";
const App = () => {
  return (
    <div className="h-screen w-[50%] mx-auto flex flex-col gap-10">
      <Navbar />
      <Mainroute />
    </div>
  );
};

export default App;
