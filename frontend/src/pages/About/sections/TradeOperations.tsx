import React from "react";
import IconBox from "../../../components/ui/IconBox"; // adjust path if needed

const TradeOperations: React.FC = () => {
  const items = [
  { icon: "/icons/agri.png", text: "Agricultural commodities" },
  { icon: "/icons/food.png", text: "Food Products" },
  { icon: "/icons/rice.png", text: "Rice, Spices, Coffee & Fresh Fruits" },
  { icon: "/icons/fmcg.png", text: "FMCG & Packed Consumer Goods" },
  { icon: "/icons/minerals.png",text: "Minerals & Industrial Materials" },
  { icon: "/icons/custom-sourcing.png", text: "Custom Sourcing & Bulk Trade Solutions" }
];

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-[#0F6EB3]">
          Our Trade Operations
        </h2>

        <p className="mt-3 text-center font-semibold text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
          We serve high-demand global trade categories including:
        </p>

        {/* Icon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-8 md:mt-10">

          {items.map((item, index) => (
            <IconBox
              key={index}
              icon={item.icon}
              text={item.text}
            />
          ))}

        </div>

        {/* Footer Description */}
        <p className="mt-8 md:mt-10 italic text-center text-xs sm:text-sm md:text-base text-gray-700 max-w-3xl mx-auto px-2">
          Each shipment is handled with strict quality inspections, export-grade packaging,
          efficient freight coordination, and real-time communication to ensure smooth,
          timely, and secure delivery across international markets.
        </p>

      </div>
    </section>
  );
};

export default TradeOperations;
