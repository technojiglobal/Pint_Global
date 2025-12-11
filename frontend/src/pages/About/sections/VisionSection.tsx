import React from "react";

const VisionSection: React.FC = () => {
  return (
    <section className="w-full">
      {/* IMAGE SECTION */}
      <div className="relative w-full h-[70vh] md:h-[80vh]">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/trade-hero.png')" }}
        ></div>

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#0F6EB3]/60"></div>

        {/* OVERLAPPING CARD WRAPPER */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full px-6 flex justify-center">
          
          {/* FLEX WRAPPER FOR BOTH CARDS */}
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-10 max-w-5xl w-full">

            {/* Vision Card */}
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 w-full md:w-1/2">
              <h3 className="text-xl md:text-3xl font-bold underline underline-offset-4 text-[#0F6EB3]">
                Our Vision
              </h3>

              <p className="mt-3 text-sm md:text-base leading-relaxed">
                To become a globally trusted export–import brand known for
                quality, speed, transparency and ethical trade — empowering
                businesses across borders through seamless international commerce.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-6 w-full md:w-1/2">
              <h3 className="text-xl md:text-3xl font-bold underline underline-offset-4 text-[#0F6EB3] mb-2">
                Our Mission
              </h3>
              <ul>
                <li>To provide reliable global sourcing and export solutions</li>
                <li>To maintain strict quality assurance and compliance standards</li> 
                  <li> To build long-term trade partnerships worldwide</li> 
                  <li> To simplify international trade through expert logistics support</li>
                 <li> To deliver consistent value through transparent operations</li>
                
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* SPACING BELOW TO PREVENT CUT-OFF */}
      <div className="h-48"></div>
    </section>
  );
};

export default VisionSection;
