import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="mt-3 relative w-full max-w-[1400px] mx-auto bg-white rounded-3xl overflow-hidden px-4 sm:px-6 md:px-10 py-10 md:py-16">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover rounded-3xl"
        style={{
          backgroundImage: "url('/images/hero.png')",
          imageRendering: "auto",
        }}
        aria-hidden="true"
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#0F6EB3]/50 rounded-3xl"></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center min-h-[40vh] md:min-h-[55vh] lg:min-h-[65vh]">
        <div className="max-w-3xl">

          {/* Heading */}
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight ">
            Global Trade. Local Trust.
          </h1>

          {/* Subheading */}
          <p className="text-white mt-6 text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
            We connect India’s finest products to global markets with<br />
            trust, quality, and seamless logistics.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              className="px-6 py-3 bg-white text-[#0F6EB3] font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
              onClick={() => navigate("/products")}
            >
              Explore Products
            </button>

            <button
              className="px-6 py-3 bg-[#0F6EB3] text-white font-semibold rounded-full shadow-md hover:bg-white/10 transition"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>

        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        <span className="w-6 h-2.5 rounded-full bg-white"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
      </div>

    </section>
  );
};

export default HeroSection;
