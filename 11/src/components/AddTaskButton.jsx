
const AddTaskButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-2 py-4 px-3 mt-2 text-[13px] font-semibold text-zinc-500 hover:text-white bg-zinc-800/20 hover:bg-zinc-700/40 rounded-2xl transition-all duration-500 border border-white/5 border-dashed hover:border-solid hover:border-indigo-500/20"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16m8-8H4"
        />
      </svg>
      Add Task
    </button>
  );
};

export default AddTaskButton;
