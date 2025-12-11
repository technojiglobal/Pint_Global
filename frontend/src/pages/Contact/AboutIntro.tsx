import React from "react";

const AboutIntro: React.FC = () => {
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
            Contact Us
          </h1>

          {/* Subheading with line break after 'with' */}
          <p className="text-white mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-left">
           PINTGLOBAL is a professionally managed export–import company headquartered in India,
            delivering high-quality, export-grade products to international markets through transparent trade
            practices, verified sourcing, and reliable global logistics.
          </p> 
          
         </div>
      </div>


    </section>
  );
};

export default AboutIntro;
