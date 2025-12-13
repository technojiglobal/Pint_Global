import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const bgImages = [
  "/images/hero.png",
  "/images/carousel1.png",
  "/images/carousel2.png",
  "/images/carousel3.png",
];

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bgImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        mt-2 relative w-full max-w-[1400px] mx-auto
        bg-white rounded-3xl overflow-hidden
        px-4 sm:px-6 md:px-10
        pt-24 md:pt-32 pb-10 md:pb-16
      "
    >
      {/* BACKGROUND IMAGES */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        {bgImages.map((img, index) => (
          <div
            key={index}
            className={`
              absolute inset-0
              bg-center bg-cover bg-no-repeat
              transition-opacity duration-1000 ease-in-out
              ${index === activeIndex ? "opacity-100" : "opacity-0"}
            `}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* BLUE OVERLAY */}
      <div className="absolute inset-0 bg-[#0F6EB3]/50 rounded-3xl z-10" />

      {/* CONTENT */}
      <div className="relative z-20 flex items-center min-h-[40vh] md:min-h-[55vh] lg:min-h-[65vh]">
        <div className="max-w-3xl">

          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
            Global Trade. Local Trust.
          </h1>

          <p className="text-white mt-6 text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
            We connect India’s finest products to global markets with
            <br />
            trust, quality, and seamless logistics.
          </p>

          <div className="flex gap-4 mt-8">
            <button
              className="
                px-6 py-3 bg-white text-[#0F6EB3]
                font-semibold rounded-full shadow-md
                hover:bg-gray-100 transition
              "
              onClick={() => navigate("/products")}
            >
              Explore Products
            </button>

            <button
              className="
                px-6 py-3 bg-[#0F6EB3] text-white
                font-semibold rounded-full shadow-md
                hover:bg-white/10 transition
              "
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {bgImages.map((_, index) => (
          <span
            key={index}
            className={`
              transition-all duration-300 ease-in-out
              ${
                index === activeIndex
                  ? "w-6 h-2.5 bg-white rounded-full"
                  : "w-2.5 h-2.5 bg-white/70 rounded-full"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
