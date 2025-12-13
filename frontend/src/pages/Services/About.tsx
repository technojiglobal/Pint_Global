import React from "react";

const About: React.FC = () => {
  return (
     <section className="mt-3 relative w-full max-w-[1400px] mx-auto bg-white rounded-3xl 
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

      {/* Blue overlay */}
      <div className="absolute inset-0 bg-[#0F6EB3]/50 rounded-3xl"></div>

      {/* Foreground content */}
      <div className="relative z-10 flex items-center min-h-[40vh] md:min-h-[55vh] lg:min-h-[65vh]">
        <div className="max-w-3xl">

          {/* Heading */}
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight ">
            Global Trade Services & Worldwide Markets
          </h1>

          {/* Subheading */}
          <p className="text-white mt-6 text-base sm:text-lg md:text-xl leading-relaxed">
           From export execution to international market coverage — PINTGLOBAL delivers seamless, compliant, and reliable global trade solutions.
          </p>

        </div>
      </div>

    </section>
  );
};

export default About;
