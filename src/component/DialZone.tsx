import React, { useEffect, useState, useMemo } from "react";
import { ProductCard } from "./ProductCard";
import type { Product } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const DealZone: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [index, setIndex] = useState(0);
    const visibleCount = 6;

    useEffect(() => {
        fetch("/prodactData.json")
            .then((r) => r.json())
            .then((data: Product[]) => setProducts(data))
            .catch(() => setProducts([]));
    }, []);


    const filtered = useMemo(() => products.filter((p) => p.offer === true), [products]);

    const maxIndex = Math.max(0, filtered.length - visibleCount);

    const handlePrev = () => setIndex((i) => Math.max(0, i - 1));
    const handleNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

    return (
        <section className="relative">
            
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" style={{ zIndex: 1 }} />

            <div className="relative z-10 py-20 container mx-auto px-4">
            
                <div className="relative mt-10">
                    <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-20">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={handlePrev}
                            disabled={index === 0}
                            className="bg-white/90 text-gray-700 hover:bg-white disabled:opacity-50 mr-4"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                    </div>

                    <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-20">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={handleNext}
                            disabled={index >= maxIndex}
                            className="bg-white/90 text-gray-700 hover:bg-white disabled:opacity-50"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>

                    <div className="overflow-hidden ">
                        <div
                            className="flex gap-6 transition-transform duration-500 justify-center p"
                            style={{
                                transform: `translateX(-${index * (100 / visibleCount)}%)`,
                                width: `${(filtered.length * 100) / visibleCount}%`,
                            }}
                        >
                            {filtered.map((product) => (
                                <div key={product.sku} className="w-1/5 min-w-[200px]">
                                    <ProductCard product={product} />
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-6">
                        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`w-2 h-2 rounded-full ${i === index ? "bg-red-500" : "bg-white/40"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
