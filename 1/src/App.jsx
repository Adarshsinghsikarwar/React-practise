import Card from "./components/card.jsx";

const App = () => {
  let val = [1, 2, 3, 4, 5, 6];

  return (
    <div className="w-full flex justify-center items-center flex-wrap p-3 gap-4  bg-blue-300">
      {val.map((e) => <Card key={e} />)}
    </div>
  );
};

export default App;
