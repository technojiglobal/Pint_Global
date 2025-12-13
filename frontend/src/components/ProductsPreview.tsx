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
    <section className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h3 className="text-3xl sm:text-4xl font-bold text-center text-[#0F6EB3]">
          {heading}
        </h3>
        <p className="text-center mt-2 text-base sm:text-lg">
          {subheading}
        </p>

        {/* Slider */}
        <div className="mt-10 relative flex items-center w-full">

          {/* LEFT BUTTON (hide on mobile optional) */}
          <button
            onClick={() => scroll("left")}
            aria-label="scroll left"
            className="
              hidden sm:flex
              absolute -left-14
              bg-[#0F6EB3] text-white rounded-full
              w-11 h-11 items-center justify-center
              shadow-md hover:bg-[#0d5c94] transition
            "
          >
            <ChevronLeft size={28} />
          </button>

          {/* TRACK */}
          <div
            ref={containerRef}
            className="
              flex gap-6
              overflow-x-auto sm:overflow-hidden
              scroll-smooth
              w-full
              px-0 sm:px-10

              /* 🔥 HIDE SCROLLBAR (MOBILE) */
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >

            {products.map((p, i) => (
              <div
                key={i}
                ref={i === 0 ? cardRef : null}
                className="
                  flex-shrink-0
                  bg-white rounded-2xl shadow-sm
                  border border-[#E6ECF2]

                  w-full                 /* ✅ Mobile: ONE FULL CARD */
                  sm:w-[330px]           /* Tablet */
                  md:w-[350px]
                  lg:w-[360px]
                "
              >
                {/* IMAGE */}
                <div className="w-full h-[240px] sm:h-[260px] overflow-hidden rounded-t-2xl">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="bg-[#F3F7FB] px-5 py-5 rounded-b-2xl border-t-2 border-white">
                  <h3 className="font-bold text-[#0F6EB3] text-xl sm:text-2xl">
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
            className="
              hidden sm:flex
              absolute -right-14
              bg-[#0F6EB3] text-white rounded-full
              w-11 h-11 items-center justify-center
              shadow-md hover:bg-[#0d5c94] transition
            "
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
