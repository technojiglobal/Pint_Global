import React, { useRef } from "react";
import Button from "./Button";

export interface ProductItem {
  title: string;
  img: string;
  desc: string;
}

interface ProductsPreviewProps {
  heading?: string;
  subheading?: string;
  products: ProductItem[];
}

const CARD_WIDTH = 330;

const ProductsPreview: React.FC<ProductsPreviewProps> = ({
  heading = "Products Preview",
  subheading = "Export-grade products responsibly sourced from verified Indian suppliers for global markets.",
  products
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!containerRef.current) return;
    const amount = dir === "right" ? CARD_WIDTH : -CARD_WIDTH;

    containerRef.current.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h3 className="text-3xl font-bold text-center text-[#0F6EB3]">
          {heading}
        </h3>
        <p className="text-center mt-2 text-[#0B3B63]">
          {subheading}
        </p>

        {/* Slider */}
        <div className="mt-12 relative flex items-center">

          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            aria-label="scroll left"
            className="absolute left-0 bg-[#0F6EB3] text-white rounded-full w-10 h-10 
            flex items-center justify-center shadow z-20"
          >
            <span className="text-xl font-bold">{"<"}</span>
          </button>

          {/* SCROLL TRACK */}
          <div
            ref={containerRef}
            className="flex gap-8 overflow-hidden mx-14"
          >
            {products.map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-xl overflow-hidden shadow-lg bg-white"
                style={{ width: CARD_WIDTH }}
              >
                <div className="w-full h-52 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover hover:scale-105  transition-transform duration-300"
                  />
                </div>

                <div className="bg-[#E7F3FF] px-4 py-4">
                  <h4 className="font-semibold text-[#0F6EB3] text-lg">{p.title}</h4>
                  <p className="text-sm text-[#0B3B63] mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            aria-label="scroll right"
            className="absolute right-0 bg-[#0F6EB3] text-white rounded-full w-10 h-10 
            flex items-center justify-center shadow z-20"
          >
            <span className="text-xl font-bold">{">"}</span>
          </button>
        </div>
          
      </div>
    </section>
  );
};

export default ProductsPreview;
