import React from "react";

const AboutIntro: React.FC = () => {
  return (
    <section className="mt-2 relative w-full max-w-[1400px] mx-auto bg-white rounded-3xl overflow-hidden px-4 sm:px-6 md:px-10 py-10 md:py-16">

    {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover rounded-3xl"
        style={{
          backgroundImage: "url('/images/hero.png')",
          imageRendering: "auto",
        }}
        aria-hidden="true"
      />

      {/* Blue overlay (full color with 50% transparency) */}
      <div className="absolute inset-0 bg-[#0F6EB3]/50 rounded-3xl"></div>

      {/* Foreground content */}
      <div className="relative z-10 flex items-center min-h-[40vh] md:min-h-[55vh] lg:min-h-[65vh]">
        <div className="max-w-3xl">

          {/* Heading */}
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)]">
            Contact Us
          </h1>

          {/* Subheading with line break after 'with' */}
          <p className="text-white mt-6 text-base sm:text-lg md:text-xl leading-relaxed">
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
