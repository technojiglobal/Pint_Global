import React from "react";

 const FounderSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="bg-[#0F6EB3] shadow-inner p-8 md:p-12  flex flex-col md:flex-row gap-8 items-center">
        
        <div className="flex-1 mb-6 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Founder – Mukesh Peddada
          </h2>

          <p className="text-white text-sm md:text-base">
           Mr. Mukesh Peddada brings a strong professional background in 
           financial operations and team management, with years of experience
            in handling diverse business functions with precision and leadership. 
            Throughout his career, he has successfully managed teams, 
            streamlined operations, and contributed to organizational growth
            through disciplined execution and strategic decision-making.
          </p>

          <p className="text-white text-sm md:text-base">
            Driven by a vision to build a global presence in trade and commerce, he 
            founded PINTGLOBAL with the goal of creating a trusted, transparent, 
            and performance-driven import–export enterprise. His leadership 
            blends corporate professionalism with entrepreneurial vision, guiding the company 
            with a strong focus on ethical business practices,
             operational excellence, and sustainable global partnerships.
          </p>
        </div>

        <div className="w-48 h-48  md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg">
          <img src="/images/founder.png" alt="Founder" className="w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
};
 export default FounderSection;

