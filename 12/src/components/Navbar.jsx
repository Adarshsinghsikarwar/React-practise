import Input from "./Input";

const Navbar = ({ onChange }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black/80 border-b border-[#27272a] backdrop-blur-xl text-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-8">
        <div className="text-2xl font-black tracking-tighter uppercase cursor-pointer group">
          Zinc
          <span className="text-[#3f3f46] group-hover:text-[#fafafa] transition-colors">
            .
          </span>
        </div>

        <Input onChange={onChange} />

        <div className="hidden lg:flex items-center gap-8">
          <a
            href="#"
            className="text-xs font-black uppercase tracking-[0.2em] text-[#71717a] hover:text-[#fafafa] transition-colors"
          >
            Nodes
          </a>
          <a
            href="#"
            className="text-xs font-black uppercase tracking-[0.2em] text-[#71717a] hover:text-[#fafafa] transition-colors"
          >
            Console
          </a>
          <button className="px-6 py-2 bg-[#fafafa] text-black text-xs font-black uppercase tracking-widest rounded-lg hover:bg-[#e4e4e7] transition-all transform active:scale-95">
            Initialize
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
