import React from "react";

interface CardData {
  id: number;
  title: string;
  image: string;
  points: string[];
}

const cards: CardData[] = [
  {
    id: 1,
    title: "Export Services",
    image: "/images/source-trade.png",
    points: [
      "Verified Product Sourcing",
      "Quality Inspection & Compliance",
      "Export-Grade Packaging",
      "Freight & Logistics Coordination",
      "Complete Documentation & Customs Handling",
      "Real-Time Shipment Updates",
    ],
  },
  {
    id: 2,
    title: "Global Logistics",
    image: "/images/start-trade.png",
    points: [
      "Verified suppliers across India",
      "Custom product sourcing",
      "Competitive pricing",
      "Sample support",
      "Flexible MOQs",
      "End-to-end coordination"
    ],
  },
];

const GlobalSourcing: React.FC = () => {
  return (
    <section className="w-full bg-white py-14">
      <h2 className="text-center text-4xl font-bold text-[#0F6EB3] mb-10">
        Global Sourcing
      </h2>

      {/* Horizontal scroll container */}
      <div
        className="
          w-full
          overflow-x-auto
          overscroll-x-contain
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {/* Cards row */}
        <div className="flex gap-6 px-4 min-w-max">
          {cards.map((card) => (
            <div
              key={card.id}
              className="
                flex-shrink-0
                flex
                gap-4
                bg-[#F3F7FB]
                border border-black/10
                rounded-xl
                shadow-md
                p-4

                w-[90vw]
                sm:w-[75vw]
                md:w-[65vw]
                lg:w-[55vw]

                max-sm:flex-col
              "
            >
              {/* Image */}
              <div className="relative w-[45%] max-sm:w-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="
                    w-full
                    h-[320px]
                    max-sm:h-[250px]
                    object-cover
                    rounded-lg
                  "
                />

                <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent via-[#0F6EB3]/40 to-[#2e6e9c]" />
              </div>

              {/* Text */}
              <div className="w-[55%] max-sm:w-full">
                <h3 className="text-2xl font-bold text-[#0F6EB3] mb-4 max-sm:text-center">
                  {card.title}
                </h3>

                <ul className="space-y-2 max-sm:px-3">
                  {card.points.map((point, i) => (
                    <li key={i} className="flex items-start  font-semibold text-lg">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalSourcing;
