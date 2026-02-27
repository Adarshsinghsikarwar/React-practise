import { useReducer } from "react";
import { initialData } from "../data/initialData";
import { kanbanReducer } from "../reducers/kanbanReducer";
import Column from "./Column";

const Board = () => {
  
  const [data, dispatch] = useReducer(kanbanReducer, initialData);

  const addColumn = () => {
    const title = prompt("Enter column title:");
    if (title) {
      dispatch({ type: "ADD_COLUMN", payload: { title } });
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="px-8 py-4 border-b border-white/10 flex justify-between items-center bg-zinc-800/50 backdrop-blur-sm">
        <h1 className="text-xl font-bold text-white tracking-tight">
          Project Board
        </h1>
        <button
          onClick={addColumn}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
        >
          + Add Column
        </button>
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
