import React from "react";

const Presence: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-6 sm:py-8 md:py-10">

      {/* HEADING */}
      <h2 className="text-center mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F6EB3]">
        Worldwide Presence
      </h2>

      {/* FULL WIDTH STRETCHED IMAGE */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <img
          src="/images/map2.png"
          alt="Global Map"
          className="w-full h-full object-fill"
        />
      </div>

      {/* DESCRIPTION */}
      <p className="mt-6 md:mt-8 text-center text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-3 leading-relaxed">
        <b>Pint Global</b> continues to expand its international footprint — 
        connecting India’s finest products with the world’s fastest-growing markets.
      </p>

    </section>
  );
};

export default Presence;
