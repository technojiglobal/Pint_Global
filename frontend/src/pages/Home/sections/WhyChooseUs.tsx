import React from "react";
import IconBox from "../../../components/ui/IconBox";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-[#0F6EB30D] py-6">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h3 className="text-2xl md:text-4xl text-center  py-1 font-bold text-[#0F6EB3]">
          Why Choose Us
        </h3>
        <p className="text-center mt-2  font-semibold max-w-2xl mx-auto">
          A partner you can trust for transparent, compliant, and reliable global trade.
        </p>

        {/* Content */}
        <div className="mt-12 grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT — IMAGE */}
          <div className="flex justify-center">
            <img
              src="/images/woman3.png"
              alt="Why Choose Us"
              className="
                max-w-full
                rounded-2xl
                border-2 border-[#0F6EB3]
                shadow-lg
              "
            />
          </div>

          {/* RIGHT — ICONBOX LIST */}
          <div
            className="
              flex flex-col
              gap-4
              md:gap-0
              md:h-[640px]
              md:justify-between
            "
          >
            <IconBox
              icon="/icons/suppliers.png"
              text="Verified Suppliers & Global Buyers Across 10+ Countries"
            />
            <IconBox
              icon="/icons/man.png"
              text="International Quality Standards & Multi-Level Inspections"
            />
            <IconBox
              icon="/icons/badge.png"
              text="Transparent Pricing & Zero Documentation Risk"
            />
            <IconBox
              icon="/icons/export.png"
              text="End-to-End Export, Import & Global Logistics Handling"
            />
            <IconBox
              icon="/icons/power.png"
              text="Dedicated Trade Support From Order to Delivery"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
