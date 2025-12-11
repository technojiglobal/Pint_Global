import React from "react";
import {useNavigate} from "react-router-dom";
const HeroSection: React.FC = () => {
  const navigate=useNavigate();
  return (
    <section className="relative w-full h-[85vh] md:h-[88vh] overflow-hidden">

      {/* Background image with high-quality rendering */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover "
        style={{
          backgroundImage: "url('/images/hero.png')",
          imageRendering: "auto",
        }}
        aria-hidden="true"
      />

      {/* Blue overlay (full color with 50% transparency) */}
      <div className="absolute inset-0 bg-[#0F6EB3]/50"></div>

      {/* Foreground content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-6 md:px-16 max-w-4xl">

          {/* Heading */}
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)] text-left">
            Global Trade. Local Trust.
          </h1>

          {/* Subheading with line break after 'with' */}
          <p className="text-white mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-left">
            We connect India’s finest products to global markets with<br />
            trust, quality, and seamless logistics.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8" >
            <button className="px-6 py-3 bg-white text-[#0F6EB3] font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
            onClick={()=>navigate("/products")}>
              Explore Products
            </button>

            <button className="px-6 py-3 bg-[#0F6EB3]  text-white font-semibold rounded-full shadow-md hover:bg-white/10 transition"
            onClick={()=>navigate("/contact")}>
              Contact Us
            </button>
          </div>

        </div>
      </div>

      {/* Slider dots centered on full hero width */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        <span className="w-6 h-2.5 rounded-full bg-white"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
      </div>

    </section>
  );
};

export default HeroSection;
