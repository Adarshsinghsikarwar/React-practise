const Header = () => {
  return (
    <header className="mb-16">
      <span className="text-xs font-black uppercase tracking-[0.4em] text-[#3f3f46] block mb-3">
        Inventory v5.0
      </span>
      <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-4">
        Catalog<span className="text-[#27272a]">.</span>
      </h1>
      <p className="text-[#71717a] max-w-xl text-lg leading-relaxed">
        Curated selection of premium goods. Real-time inventory synchronization
        via encrypted zinc protocols.
      </p>
    </header>
  );
};

export default Header;
