import React from "react";
import { ChevronRight } from "lucide-react";

interface TradeValueItem {
  icon: string;
  title: string;
  subtitle: string;
}

const tradeValues: TradeValueItem[] = [
  {
    icon: "/images/sourcing.png",
    title: "Ethical Sourcing",
    subtitle: "Verified suppliers,\nresponsible procurement",
  },
  {
    icon: "/images/delivery.png",
    title: "On-Time Delivery",
    subtitle: "Predictable timelines with\nend-to-end logistics",
  },
  {
    icon: "/images/pricing.png",
    title: "Competitive Pricing",
    subtitle: "Optimised supply chain for\nglobal cost advantage",
  },
  {
    icon: "/images/partnership.png",
    title: "Sustainable Partnerships",
    subtitle: "Long-term collaboration and\nmarket stability",
  },
];

const TradeValues: React.FC = () => {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F6EB3]">
          Our Trade Values
        </h2>

        <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
          Our global operations are rooted in responsibility, transparency, and
          consistency. These core values shape every trade relationship we build.
        </p>

        {/* Values Row */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-nowrap justify-center items-center gap-6 md:gap-10">

          {tradeValues.map((item, index) => (
            <React.Fragment key={index}>
              
              {/* Value Box */}
              <div className="flex flex-col items-center text-center w-full sm:max-w-xs md:w-60">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-16 object-contain mb-4"
                />

                <h3 className="text-[#0F6EB3] font-bold text-lg">
                  {item.title}
                </h3>

                <p className="text-[#0F6EB3] text-sm mt-1 whitespace-pre-line">
                  {item.subtitle}
                </p>
              </div>

              {/* Arrow Between Items */}
              {index < tradeValues.length - 1 && (
                <div className="hidden md:flex w-10 h-10 rounded-full bg-[#E6F2FF] flex items-center justify-center">
                  <ChevronRight size={22} className="text-[#0F6EB3]" />
                </div>
              )}
            </React.Fragment>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TradeValues;
