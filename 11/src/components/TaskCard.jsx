const TaskCard = ({ task, index, columnId, dispatch }) => {
  const handleMove = () => {
    const destColId = prompt(
      "Move to which column ID? (e.g., column-1, column-2, column-3)",
    );
    if (!destColId) return;

    dispatch({
      type: "MOVE_TASK",
      payload: {
        sourceColumnId: columnId,
        destinationColumnId: destColId,
        sourceIndex: index,
        destinationIndex: 0,
        taskId: task.id,
      },
    });
  };

  return (
    <div className="bg-zinc-800/80 backdrop-blur-sm p-4 rounded-2xl border border-white/5 shadow-xl hover:border-indigo-500/30 hover:bg-zinc-800 transition-all duration-300 group relative">
      <p className="text-zinc-200 text-[14px] leading-relaxed group-hover:text-white transition-colors pb-8">
        {task.content}
      </p>

      <button
        onClick={handleMove}
        className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white px-2 py-1 rounded text-[10px] uppercase font-bold tracking-widest transition-all"
      >
        Move →
      </button>
    </div>
  );
};

export default TaskCard;
