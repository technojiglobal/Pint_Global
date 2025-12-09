import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <section className="bg-[#0F6EB30D] pt-12 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-center font-extrabold text-[#0F6EB3]">Who We Are</h2>
        <p className="mt-6 max-w-3xl mx-auto text-center text-[#0F6EB3]">
          PINTGLOBAL is a professionally managed export–import company headquartered in India,
          delivering premium-quality products to global markets through transparent processes,
          verified sourcing, and seamless logistics execution.
        </p>

        <p className="mt-6 max-w-3xl mx-auto text-center text-[#0F6EB3]">
          We operate with strict compliance, quality assurance, and end-to-end trade coordination to
          help international buyers source with complete confidence.
        </p>

        <div className="mt-8 flex justify-center">
          <button className="px-5 py-2 rounded-full bg-[#0F6EB3] text-white font-medium shadow">
            Know More
          </button>
          <span className="w-3 h-3 rounded-full bg-white"></span>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
