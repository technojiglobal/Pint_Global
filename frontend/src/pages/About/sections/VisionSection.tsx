import React from "react";

 const VisionSection: React.FC = () => {
  return (
    <section className="w-full">

      {/* IMAGE SECTION WITH CARD OVERLAP */}
      <div className="relative w-full h-[70vh] md:h-[80vh]">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        ></div>

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#0F6EB3]/40"></div>

        {/* Overlapping Card */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full px-6 flex justify-center">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 max-w-2xl w-full">
            <h3 className="text-xl md:text-4xl font-bold  underline underline-offset-4 text-[#0F6EB3] text-center">
              Our Vision
            </h3>

            <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed text-center">
              To become a globally trusted export–import brand known for
              quality, speed, transparency and ethical trade — empowering
              businesses across borders through seamless international commerce.
            </p>
          </div>
        </div>
      </div>

      {/* Extra bottom spacing so card doesn't cutoff */}
      <div className="h-40"></div>
    </section>
  );
};
 export default VisionSection;


