import React from "react";

const Certifications: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl md:text-3xl text-[#0F6EB3] font-bold">Certifications & Licenses</h3>

        <div className="mt-8 flex flex-wrap justify-center items-center gap-8">
          <img src="/icons/foreign-trade.png" alt="ministry1" className="h-48 object-contain" />
          <img src="/icons/fssai.png" alt="FSSAI" className="h-48 object-contain" />
          <img src="/icons/FIEO.png" alt="Ministry 2" className="h-48 object-contain" />
          <img src="/icons/APEDA.png" alt="APEDA" className="h-48 object-contain" />
          <img src="/icons/coffee-board.png" alt="Coffee Board" className="h-48 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Certifications;
