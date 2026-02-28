import { useReducer } from "react";
import { initialData } from "../data/initialData";
import { kanbanReducer } from "../reducers/kanbanReducer";
import Column from "./Column";
import { generateLargeDataset } from "../data/stressTestData";

const Board = ({ initial }) => {
  // Use initial data if provided, otherwise default to initialData
  const initialState = {
    past: [],
    present: initial || initialData,
    future: [],
  };

  const [state, dispatch] = useReducer(kanbanReducer, initialState);
  const { present: data, past, future } = state;

  const addColumn = () => {
    const title = prompt("Enter column title:");
    if (title) {
      dispatch({ type: "ADD_COLUMN", payload: { title } });
    }
  };

  const toggleStressTest = () => {
    const isStressTest = data.columnOrder.length > 5; // Simple check
    if (isStressTest) {
      dispatch({ type: "SET_STRESS_DATA", payload: initialData });
    } else {
      const largeData = generateLargeDataset(1000);
      dispatch({ type: "SET_STRESS_DATA", payload: largeData });
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="px-8 py-4 border-b border-white/10 flex justify-between items-center bg-zinc-800/50 backdrop-blur-sm">
        <h1 className="text-xl font-bold text-white tracking-tight">
          Project Board
        </h1>
        <div className="flex gap-3">
          <button
            onClick={() => dispatch({ type: "UNDO" })}
            disabled={past.length === 0}
            className="bg-zinc-700 hover:bg-zinc-600 disabled:opacity-30 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg text-sm font-medium transition-all active:scale-95"
          >
            Undo
          </button>
          <button
            onClick={() => dispatch({ type: "REDO" })}
            disabled={future.length === 0}
            className="bg-zinc-700 hover:bg-zinc-600 disabled:opacity-30 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg text-sm font-medium transition-all active:scale-95"
          >
            Redo
          </button>
          <button
            onClick={toggleStressTest}
            className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-lg active:scale-95"
          >
            {data.columnOrder.length > 5
              ? "Reset Board"
              : "Stress Test (1000 Tasks)"}
          </button>
          <button
            onClick={addColumn}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            + Add Column
          </button>
        </div>
      </header>

      <div className="flex gap-6 p-8 overflow-x-auto items-start flex-1 custom-scrollbar">
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

          return (
            <Column
              key={column.id}
              column={column}
              tasks={tasks}
              dispatch={dispatch}
            />
          );
        })}

        {data.columnOrder.length === 0 && (
          <div className="flex-1 flex flex-col items-center justify-center text-zinc-500 border-2 border-dashed border-zinc-700 rounded-3xl h-64">
            <p className="text-lg">No columns yet</p>
            <p className="text-sm">Click "+ Add Column" to get started</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
