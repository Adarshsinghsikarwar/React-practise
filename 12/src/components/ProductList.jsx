import Card from "./Card";

const ProductList = ({
  products,
  search,
  loaderRef,
  isMoreLoading,
  hasMore,
}) => {
  return (
    <div className="space-y-16">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.length > 0 ? (
          products.map((product) => <Card key={product.id} product={product} />)
        ) : (
          <div className="col-span-full py-32 text-center border border-dashed border-[#27272a] rounded-3xl">
            <p className="text-[#3f3f46] text-xl font-medium italic">
              Search query "<b className="text-white">{search}</b>" returned
              zero items.
            </p>
          </div>
        )}
      </section>

      {/* Infinite Scroll Sentinel */}
      {products.length > 0 && hasMore && (
        <div
          ref={loaderRef}
          className="flex flex-col items-center justify-center py-12 space-y-4"
        >
          <div className="w-8 h-8 border-2 border-[#27272a] border-t-[#fafafa] rounded-full animate-spin"></div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#a1a1aa] animate-pulse">
            Scanning Inventory...
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
