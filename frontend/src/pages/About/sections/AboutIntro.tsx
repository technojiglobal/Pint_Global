import React from "react";

const AboutIntro: React.FC = () => {
  return (
    <section className="mt-2 relative w-full max-w-[1400px] mx-auto bg-white rounded-3xl 
overflow-hidden px-4 sm:px-6 md:px-10 
pt-24 md:pt-32 pb-10 md:pb-16">


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

          {/* Paragraph 1 */}
          <p className="text-white mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-left drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
            PINT GLOBAL is a professionally managed export–import company headquartered in India,
            delivering high-quality, export-grade products to international markets through transparent
            trade practices, verified sourcing, and reliable global logistics.
          </p>

          {/* Paragraph 2 */}
          <p className="text-white mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-left drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
            We specialize in connecting trusted Indian manufacturers and producers with global buyers
            across multiple industries. With a strong operational foundation, structured workflows,
            and a compliance-driven approach, we ensure every shipment meets international standards
            for quality, safety, and documentation.
          </p>

          {/* Paragraph 3 */}
          <p className="text-white mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-left drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
            At PINT GLOBAL, we don’t just trade products — we build long-term global partnerships
            based on trust, performance, and consistency.
          </p>

        </div>
      </div>

    </section>
  );
};

export default AboutIntro;
