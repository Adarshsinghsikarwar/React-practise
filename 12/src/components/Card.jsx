import React from "react";

const Card = ({ product }) => {
  const { title, price, category, image, rating } = product;

  return (
    <div className="group relative bg-[#09090b] border border-[#27272a] rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#fafafa]/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col h-full">
      <div className="aspect-square bg-white flex items-center justify-center p-8 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black text-white text-[9px] uppercase tracking-widest font-black rounded-full border border-white/10">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-3 mb-3">
          <h3 className="text-sm font-bold leading-tight group-hover:text-[#fafafa] transition-colors line-clamp-2">
            {title}
          </h3>
          <span className="text-sm font-black tabular-nums text-[#fafafa]">
            ${price}
          </span>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between border-t border-[#18181b]">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-tighter text-[#3f3f46]">
              Rating
            </span>
            <span className="text-xs font-black text-[#a1a1aa]">
              {rating.rate}
            </span>
          </div>
          <button className="text-[10px] font-black uppercase tracking-widest text-[#fafafa] hover:text-[#a1a1aa] transition-all flex items-center gap-1 hover:gap-2">
            Acquire
            <svg
              className="w-3 h-3 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
