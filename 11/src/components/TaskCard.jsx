import React from "react";

const TaskCard = React.memo(({ task, index, columnId, dispatch }) => {
  const onDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.id);
    e.dataTransfer.setData("sourceColumnId", columnId);
    e.dataTransfer.setData("sourceIndex", index);
    e.dataTransfer.effectAllowed = "move";
  };
  console.log("Card Rendered");
  return (
    <div
      draggable
      onDragStart={onDragStart}
      className="bg-zinc-800/80 backdrop-blur-sm p-4 rounded-2xl border border-white/5 shadow-xl hover:border-indigo-500/30 hover:bg-zinc-800 transition-all duration-300 cursor-grab active:cursor-grabbing group"
    >
      <p className="text-zinc-200 text-[14px] leading-relaxed group-hover:text-white transition-colors">
        {task.content}
      </p>
      <button
        onClick={() =>
          dispatch({
            type: "UPDATE_TASK",
            payload: { taskId: task.id, content: prompt("Enter new content") },
          })
        }
        className="mt-2 px-5 py-1 bg-zinc-300 text-black rounded"
      >
        Update Task
      </button>
    </div>
  );
});

export default TaskCard;
