import React, { useRef } from "react";

const productData = [
  { title: "Green Coffee Beans", img: "/images/coffee.png", desc: "Premium quality, globally sourced." },
  { title: "Fruits", img: "/images/fruits.png", desc: "Fresh produce with assured quality." },
  { title: "Vegetables", img: "/images/vegetables.png", desc: "Farm-fresh, handpicked selection." },
  { title: "Rice & Grains", img: "/images/rice.png", desc: "Pure grains from trusted farmers." },
  { title: "Processed Seafood", img: "/images/seafood.png", desc: "High-quality, hygienically processed seafood." },
  { title: "Minerals and Ores", img: "/images/minerals.png", desc: "Sustainably sourced raw materials." },
];

const CARD_WIDTH = 330; // Width for 3 cards visible

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
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h3 className="text-3xl font-bold text-center text-[#0F6EB3]">Products Preview</h3>
        <p className="text-center mt-2 text-[#0B3B63]">
          Export-grade products responsibly sourced from verified Indian suppliers for global markets.
        </p>

        {/* Slider Wrapper */}
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

          {/* CARD TRACK */}
          <div
            ref={containerRef}
            className="flex gap-8 overflow-hidden scroll-smooth mx-14"
            style={{ scrollBehavior: "smooth" }}
          >
            {productData.map((p) => (
              <div
                key={p.title}
                className="flex-shrink-0 rounded-xl overflow-hidden shadow-lg bg-white"
                style={{ width: CARD_WIDTH }}
              >

                {/* IMAGE FULL WIDTH */}
                <div className="w-full h-52 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* BLUE FOOTER */}
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

        {/* Explore Button */}
        <div className="mt-10 flex justify-center">
          <button className="flex items-center gap-3 px-6 py-2 rounded-full bg-[#0F6EB3] text-white font-medium shadow">
            Explore Products
            <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#0F6EB3] font-bold text-lg">⬈</span>
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductsPreview;
