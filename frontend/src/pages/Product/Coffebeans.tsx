import React from "react";

const Coffebeans: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A66C2]">
        Green Coffee Beans
      </h2>
      <p className="text-center text-black mt-2">
        Premium unroasted coffee beans sourced directly from trusted Indian plantations.
      </p>

      {/* Content Box */}
      <div className="mt-8 bg-[#F3F7FB] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 items-center">

        {/* Left Image Placeholder */}
        <div className="w-full md:w-1/2">
          <div className="w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
            <img
              src="/images/coffe-beans.png"
              alt="Organic Arabica Coffee Beans"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0A66C2]">
            Organic Arabica Coffee Beans
          </h3>

          <p className="text-[#0F6EB3] mt-3 leading-relaxed text-sm md:text-base">
            Grown organically in the misty Eastern Ghats of Andhra Pradesh at elevations of 
            1200+ metres, these high-altitude Arabica coffee beans mature slowly, resulting 
            in a richer aroma, deeper flavour profile, and superior cup quality. The 
            mineral-rich mountain soil and cool climate enhance their smooth body, mild acidity, 
            and natural sweetness.
          </p>

          <p className="text-[#0F6EB3]  mt-3 leading-relaxed text-sm md:text-base">
            Cultivated by experienced farmers using traditional, chemical-free practices, each 
            batch is carefully hand-harvested and sorted to ensure premium-grade quality. Fully 
            traceable and sustainably farmed, these beans also offer enhanced antioxidant 
            properties, making them ideal for specialty roasters, artisanal coffee brands, and 
            quality-conscious consumers seeking authentic Indian high-altitude coffee.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Coffebeans;
