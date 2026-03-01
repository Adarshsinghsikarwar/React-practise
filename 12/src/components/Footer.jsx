
const Footer = () => {
  return (
    <footer className="mt-32 py-12 border-t border-[#18181b] flex flex-col md:flex-row justify-between items-center gap-8">
      <p className="text-[10px] uppercase tracking-[0.3em] text-[#3f3f46] font-bold">
        © 2026 ZINC RETAIL SYSTEMS. ALL RIGHTS RESERVED.
      </p>
      <div className="flex gap-10">
        <a
          href="#"
          className="text-[10px] font-black uppercase tracking-widest text-[#3f3f46] hover:text-[#fafafa] transition-colors"
        >
          Digital
        </a>
        <a
          href="#"
          className="text-[10px] font-black uppercase tracking-widest text-[#3f3f46] hover:text-[#fafafa] transition-colors"
        >
          Physical
        </a>
      </div>
    </footer>
  );
};

export default Footer;
