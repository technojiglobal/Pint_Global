import React from "react";

const FounderSection: React.FC = () => {
  return (
    <section className="py-16">
      <div
        className="bg-[#0F6EB3] shadow-inner w-full p-6 sm:p-8 md:p-12
                   flex flex-col md:flex-row items-center md:items-start gap-12"
      >
        {/* LEFT TEXT BLOCK */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white leading-tight">
            Founder – Mukesh Peddada
          </h2>

          <p className="text-white text-base sm:text-lg md:text-base leading-relaxed">
            Mr. Mukesh Peddada brings a strong professional background in financial
            operations and team management, with years of experience handling diverse
            business functions with precision and leadership. Throughout his career, he
            has successfully managed teams, streamlined operations, and contributed to
            organizational growth through disciplined execution and strategic decision-making.
          </p>

          <p className="text-white text-base sm:text-lg md:text-base leading-relaxed">
            Driven by a vision to build a global presence in trade and commerce, he founded
            PINTGLOBAL to create a trusted, transparent, and performance-driven import–export
            enterprise. His leadership blends corporate professionalism with entrepreneurial
            vision, focusing strongly on ethical business practices, operational excellence,
            and sustainable global partnerships.
          </p>
        </div>

        {/* RIGHT IMAGE – INCREASED SIZE */}
        <div className="w-42 h-42 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="/images/founder.png"
            alt="Founder"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
