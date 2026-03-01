import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import { api } from "./utils/ConfigApi";
import { useDebounce } from "./hooks/Debounce";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

const ITEMS_PER_PAGE = 8;

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 1000);

  // Infinite Scroll State
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [loaderRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  // Initial Fetch & LocalStorage Cache
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const cachedData = localStorage.getItem("products");

        if (cachedData) {
          setProducts(JSON.parse(cachedData));
          setLoading(false);
          return;
        }

        const response = await api.get("/products");
        // Axios stores data in .data, and throws on non-2xx status codes by default
        setProducts(response.data);
        localStorage.setItem("products", JSON.stringify(response.data));
      } catch (err) {
        setError(err.message || "Uplink Failure");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search
  const filteredProducts = products.filter((product) => {
    const query = debouncedSearch.toLowerCase();
    return (
      product.title.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  });

  // Handle Infinite Scroll detection
  useEffect(() => {
    if (
      isIntersecting &&
      !loading &&
      !isMoreLoading &&
      visibleCount < filteredProducts.length
    ) {
      setIsMoreLoading(true);
      // Simulate network delay for premium "loading" feel
      setTimeout(() => {
        setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
        setIsMoreLoading(false);
      }, 800);
    }
  }, [
    isIntersecting,
    loading,
    isMoreLoading,
    filteredProducts.length,
    visibleCount,
  ]);

  // Reset pagination on search
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [debouncedSearch]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-black text-[#fafafa] selection:bg-[#fafafa] selection:text-black">
      <Navbar onChange={setSearch} />

      <main className="max-w-7xl mx-auto px-4 py-16">
        <Header />

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-6">
            <div className="w-12 h-12 border-2 border-[#27272a] border-t-[#fafafa] rounded-full animate-spin"></div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#a1a1aa] animate-pulse">
              Initializing Uplink...
            </p>
          </div>
        ) : error ? (
          <div className="p-12 border border-dashed border-red-900/50 bg-red-950/10 text-center rounded-3xl">
            <p className="text-red-400 font-bold mb-4">Uplink Error: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-[#fafafa] text-black rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#e4e4e7] transition-colors"
            >
              Reset Protocol
            </button>
          </div>
        ) : (
          <ProductList
            products={displayedProducts}
            search={debouncedSearch}
            loaderRef={loaderRef}
            isMoreLoading={isMoreLoading}
            hasMore={visibleCount < filteredProducts.length}
          />
        )}

        <Footer />
      </main>
    </div>
  );
}

export default App;
