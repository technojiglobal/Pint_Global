import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const ProductsPreview: React.FC<ProductsPreviewProps> = ({
  heading = "Products Preview",
  subheading = "Export-grade products responsibly sourced from verified Indian suppliers for global markets.",
  products,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
  if (!containerRef.current || !cardRef.current) return;

  const styles = window.getComputedStyle(containerRef.current);
  const gap = parseInt(styles.columnGap || "0", 10);

  const cardWidth = cardRef.current.offsetWidth + gap;
  const scrollAmount = dir === "right" ? cardWidth : -cardWidth;

  containerRef.current.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
};


  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h3 className="text-4xl font-bold text-center text-[#0F6EB3]">
          {heading}
        </h3>
        <p className="text-center mt-2 text-lg">{subheading}</p>

        {/* Slider */}
        <div className="mt-12 relative flex items-center w-full">

          {/* LEFT BUTTON */}
          <button
            onClick={() => scroll("left")}
            aria-label="scroll left"
            className="absolute -left-4 bg-[#0F6EB3] text-white rounded-full 
                       w-11 h-11 flex items-center justify-center 
                       shadow-md  hover:bg-[#0d5c94] transition"
          >
            <ChevronLeft size={28} />
          </button>

          {/* TRACK */}
          <div
            ref={containerRef}
            className="flex gap-6 overflow-hidden mx-10 sm:mx-16 scroll-smooth"
          >
            {products.map((p, i) => (
              <div
                key={i}
                ref={i === 0 ? cardRef : null}
                className="
                  flex-shrink-0 bg-white rounded-2xl shadow-sm 
                  border border-[#E6ECF2]

                  w-[70vw]           /* Mobile: one full card */
                  sm:w-[330px]       /* Tablet */
                  md:w-[350px]       /* Medium screens */
                  lg:w-[360px]       /* Desktop: your exact width */
                "
              >
                {/* IMAGE */}
                <div className="w-full h-[250px] sm:h-[260px] overflow-hidden rounded-t-2xl">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-contain 
                               transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="bg-[#F3F7FB] px-5 py-5 rounded-b-2xl border-t-2 border-white">
                  <h3 className="font-bold text-[#0F6EB3] text-2xl leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#0F6EB3] mt-1 opacity-90">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => scroll("right")}
            aria-label="scroll right"
            className="absolute -right-4 bg-[#0F6EB3] text-white rounded-full 
                       w-10 h-10 flex items-center justify-center 
                       shadow-md  hover:bg-[#0d5c94] transition"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
