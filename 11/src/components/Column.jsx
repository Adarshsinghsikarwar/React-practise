import React, { useMemo } from "react";
import TaskCard from "./TaskCard";
import AddTaskButton from "./AddTaskButton";

const Column = React.memo(({ column, tasks, dispatch }) => {
  const onDragOver = (e) => {
    e.preventDefault(); // Required to allow drop
    e.dataTransfer.dropEffect = "move";
  };

  const onDrop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    const sourceColumnId = e.dataTransfer.getData("sourceColumnId");
    const sourceIndex = parseInt(e.dataTransfer.getData("sourceIndex"));

    dispatch({
      type: "MOVE_TASK",
      payload: {
        sourceColumnId,
        destinationColumnId: column.id,
        sourceIndex,
        destinationIndex: tasks.length,
        taskId,
      },
    });
  };

  const MemoizedTasks = useMemo(() => {
    return tasks.map((task, index) => (
      <TaskCard
        key={task.id}
        task={task}
        index={index}
        columnId={column.id}
        dispatch={dispatch}
      />
    ));
  }, [tasks, column.id, dispatch]);

  return (
    <div
      onDragOver={onDragOver}
      onDrop={onDrop}
      className="bg-zinc-800/40 backdrop-blur-md border border-white/5 flex flex-col w-[320px] rounded-[24px] shrink-0 max-h-[calc(100vh-6rem)] shadow-2xl transition-all duration-300"
    >
      <div className="px-5 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
          <h3 className="font-bold text-white tracking-wide capitalize text-[15px]">
            {column.title}
          </h3>
        </div>
        <span className="bg-white/5 text-zinc-400 text-[11px] font-bold px-2 py-0.5 rounded-md border border-white/5">
          {tasks.length}
        </span>
      </div>

      <div className="px-3 pb-4 flex-1 overflow-y-auto custom-scrollbar">
        <div className="flex flex-col gap-3 min-h-[50px]">
          {MemoizedTasks}
          <AddTaskButton
            onClick={() => alert("Ready for ADD_TASK implementation!")}
          />
        </div>
      </div>
    </div>
  );
});

export default Column;
