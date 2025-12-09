import React from "react";

const GlobalPresence: React.FC = () => {
  return (
    <section className="relative w-full">
      
      {/* Full-width Map Background */}
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <img
          src="/images/map.png"
          alt="Global Map"
          className="w-full h-full object-cover"
        />

        {/* Blue overlay like Hero section */}
        <div className="absolute inset-0 bg-[#0F6EB3]/50"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">

          {/* Title */}
          <h2 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            Global Presence
          </h2>

          {/* Subtitle */}
          <p className="text-white max-w-2xl mt-8 text-base md:text-xl leading-relaxed drop-shadow">
           Serving clients across 10+ countries with consistent supply 
           and scalable trade solutions.
          </p>

          {/* Countries List */}
          <p className="text-white mt-10 font-bold text-xl md:text-2xl drop-shadow">
            USA | UAE | Saudi Arabia | Europe | UK | Africa | Singapore | Australia
          </p>
        </div>
      </div>

    </section>
  );
};

export default GlobalPresence;
