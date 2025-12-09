import React, { useRef } from "react";

const productData = [
  { title: "Green Coffee Beans", img: "/images/coffee.png", desc: "Premium quality, ethically sourced." },
  { title: "Fruits", img: "/images/fruits.png", desc: "Fresh produce with assured quality." },
  { title: "Vegetables", img: "/images/vegetables.png", desc: "Farm-fresh, hand-picked selection." },
  { title: "Rice & Grains", img: "/images/rice.png", desc: "Pure grains from trusted farmers." },
  { title: "Processed Seafood", img: "/images/seafood.png", desc: "High-quality, hygienically processed seafood." },
  { title: "Minerals and Ores", img: "/images/minerals.png", desc: "Sustainably sourced raw materials." },
];

const CARD_WIDTH = 300; // px width for smooth next/previous card scroll

const ProductsPreview: React.FC = () => {
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
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <h3 className="text-2xl md:text-3xl text-center font-bold text-[#0F6EB3]">
          Products Preview
        </h3>
        <p className="text-center mt-2 text-[#0B3B63]">
          Export-grade products responsibly sourced from verified Indian suppliers for global markets.
        </p>

        {/* Slider Wrapper */}
        <div className="mt-10 relative">

          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            aria-label="scroll left"
            className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#0F6EB3] text-white 
            rounded-full w-10 h-10 flex items-center justify-center shadow z-20"
          >
            <span className="text-xl font-bold">{'<'}</span>
          </button>

          {/* CARD TRACK */}
          <div
            ref={containerRef}
            className="flex gap-8 overflow-hidden scroll-smooth px-16"
          >
            {productData.map((p) => (
              <article
                key={p.title}
                className="flex-shrink-0 bg-white rounded-xl shadow p-4"
                style={{ width: CARD_WIDTH }}
              >
                <div className="w-full h-48 rounded-lg overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="mt-4 font-semibold text-[#0F6EB3]">
                  {p.title}
                </h4>
                <p className="text-sm text-[#0F6EB3] mt-2">
                  {p.desc}
                </p>
              </article>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            aria-label="scroll right"
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-[#0F6EB3] text-white 
            rounded-full w-10 h-10 flex items-center justify-center shadow z-20"
          >
            <span className="text-xl font-bold">{'>'}</span>
          </button>
        </div>

        {/* EXPLORE BUTTON */}
        <div className="mt-8 flex justify-center">
          <button className="flex items-center gap-3 px-6 py-2 rounded-full bg-[#0F6EB3] text-white font-medium shadow">
            Explore Products

            <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#0F6EB3] font-bold text-lg">→</span>
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductsPreview;
