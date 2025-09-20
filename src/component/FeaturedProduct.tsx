import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import type { Product } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { CountdownTimer } from "./CountTimer";

const categories = ["All", "Power Tools", "Hand Tools", "Plumbing"];

export const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchName, setSearchName] = useState("");
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    fetch("/prodactData.json")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  // Filter products by category and search
  const filteredProducts = products.filter(
    (product) =>
      (activeCategory === "All" || product.category === activeCategory) &&
      product.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const visibleProducts = filteredProducts.slice(scrollIndex, scrollIndex + 6);

  const handlePrev = () => setScrollIndex(Math.max(scrollIndex - 1, 0));
  const handleNext = () =>
    setScrollIndex(Math.min(scrollIndex + 1, filteredProducts.length - 6));

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>

          <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
{/* search */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search product..."
                className="pl-10 pr-4 py-2 rounded-md border text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "ghost"}
                  onClick={() => {
                    setActiveCategory(cat);
                    setScrollIndex(0); 
                  }}
                  className={
                    activeCategory === cat
                      ? "bg-gray-800 text-white hover:bg-gray-700"
                      : "text-gray-600 hover:bg-gray-200"
                  }
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex items-center">

          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            disabled={scrollIndex === 0}
            className="absolute left-0 z-10 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="flex gap-2 overflow-hidden w-full">
            {visibleProducts.map((p) => (
              <div key={p.sku} className="flex-shrink-0 w-1/6">
                <ProductCard product={p} />
              </div>
            ))}

            {visibleProducts.length === 0 && (
              <p className="text-gray-500">No products found.</p>
            )}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            disabled={scrollIndex + 6 >= filteredProducts.length}
            className="absolute right-0 z-10 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

        </div>
      </div>
                      <div className="text-center mt-20">
                          <h2 className="text-3xl md:text-4xl font-bold text-black">Attention! Deal Zone</h2>
                          <p className="text-gray-600 mt-2">Hurry up! Discounts up to 70%</p>
  
                          <div className="mt-6 flex justify-center">
                              <CountdownTimer />
                          </div>
                      </div>
    </section>
  );
};
