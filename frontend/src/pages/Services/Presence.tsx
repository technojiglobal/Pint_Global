import React from "react";

const Presence: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-10">
      
      {/* HEADING */}
      <h2 className="text-center mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F6EB3]">
        Worldwide Presence
      </h2>

      {/* MAP CONTAINER */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        
        {/* Map Wrapper with fixed aspect ratio for perfect display */}
        <div className="relative w-full overflow-hidden ">
          <div className="w-full pb-[50%] sm:pb-[45%] md:pb-[40%] relative">
            
            {/* Background Map */}
            <img
              src="/images/map2.png"
              alt="Global Map"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="mt-8 md:mt-10 text-center text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-3 leading-relaxed">
        <b>PintGlobal</b> continues to expand its international footprint — 
        connecting India’s finest products with the world’s fastest-growing markets.
      </p>

    </section>
  );
};

export default Presence;
