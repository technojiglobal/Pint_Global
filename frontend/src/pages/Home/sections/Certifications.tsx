import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Certifications: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = dir === "right" ? 260 : -260; 
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const images = [
    "/icons/foreign-trade.png",
    "/icons/fssai.png",
    "/icons/FIEO.png",
    "/icons/APEDA.png",
    "/icons/coffee-board.png",
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h3 className="text-2xl md:text-3xl text-[#0F6EB3] font-bold">
          Certifications & Licenses
        </h3>

        <div className="relative mt-10 flex items-center">

          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-20 w-12 h-12 bg-[#0F6EB3] hover:bg-[#0d5a96] 
                       text-white rounded-full flex items-center justify-center shadow-lg"
          >
            <ChevronLeft size={28} />
          </button>

          {/* SCROLL AREA (4 visible images width) */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-hidden mx-16"
            style={{ width: "100%", maxWidth: "900px" }} // fits approx 4 images
          >
            {images.map((src, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={src}
                  alt={`cert-${index}`}
                  className="h-40 md:h-48 object-contain"
                />
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-20 w-12 h-12 bg-[#0F6EB3] hover:bg-[#0d5a96] 
                       text-white rounded-full flex items-center justify-center shadow-lg"
          >
            <ChevronRight size={28} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default Certifications;
