const Input = ({ onChange }) => {
  return (
    <div className="flex-1 max-w-lg relative group">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <svg
          className="w-4 h-4 text-[#3f3f46] group-focus-within:text-[#fafafa] transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="ACCESS_PRODUCT_CATALOG..."
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-6 py-3 bg-[#09090b] border border-[#27272a] focus:border-[#fafafa]/20 focus:bg-[#18181b] rounded-xl text-sm text-[#fafafa] outline-none transition-all duration-300 placeholder:text-[#3f3f46] font-mono tracking-wider"
      />
    </div>
  );
};

export default Input;
