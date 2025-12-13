import React, { useEffect, useState, useRef } from "react";

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
      "Verified International Network",
      "Custom Routing Solutions",
      "Comprehensive Freight Services",
      "Sample & Bulk Order Support",
      "Flexible Delivery Options",
      "End-to-end Global Handling",
    ],
  },
];

const GlobalSourcing: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const slideDuration = 650;

  const nextCard = () => {
    if (isAnimating || isPaused) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
      setIsAnimating(false);
    }, slideDuration);
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      if (!isPaused) nextCard();
    }, 3500);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    stopAutoSlide();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    startAutoSlide();
  };

  return (
    <section className="w-full bg-white py-14 overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-[#0F6EB3] mb-10">
        Global Sourcing
      </h2>

      <div className="relative w-full max-w-5xl mx-auto h-[420px] sm:h-[380px] md:h-[360px]">

        {cards.map((card, index) => {
          const isActive = index === activeIndex;
          const nextIndex = (activeIndex + 1) % cards.length;

          let animationClass = "";

          if (isActive) {
            animationClass = isAnimating
              ? "-translate-x-full opacity-0 scale-95"
              : "translate-x-0 opacity-100 scale-100";
          }

          if (index === nextIndex) {
            animationClass = isAnimating
              ? "translate-x-0 opacity-100 scale-100"
              : "translate-x-full opacity-0 scale-95";
          }

          if (!isActive && index !== nextIndex) {
            animationClass = "opacity-0 pointer-events-none";
          }

          return (
            <div
              key={card.id}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`
                absolute top-0 left-0 right-0 mx-auto

                /* DESKTOP WIDTH */
                w-[80%] sm:w-[75%] md:w-[70%]

                /* MOBILE WIDTH */
                max-sm:w-[95%]

                transition-all duration-[650ms]
                ease-[cubic-bezier(0.3,0.1,0.3,1)]
                ${animationClass}
              `}
            >
              {/* CARD */}
              <div
                className="
                  flex 
                  bg-[#F3F7FB] 
                  rounded-xl shadow-md border border-[#00000021] p-4 gap-4
                    
                  /* MOBILE: Stack vertically */
                  max-sm:flex-col max-sm:gap-3
                "
              >
                {/* IMAGE */}
                <div className="relative w-[45%] max-sm:w-full">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="
                      w-full 
                      
                      /* DESKTOP HEIGHT */
                      h-[320px]
                      
                      /* MOBILE HEIGHT */
                      max-sm:h-[250px]
                      
                      object-cover rounded-lg
                    "
                  />

                  <div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(15,110,179,0) 0%, rgba(15,110,179,0.4) 40%, #2e6e9cff 100%)",
                    }}
                  />
                </div>

                {/* TEXT */}
                <div className="w-[55%] max-sm:w-full">
                  <h3 className="text-2xl font-bold text-[#0F6EB3] mb-4 text-left max-sm:text-center">
                    {card.title}
                  </h3>

                  <ul className="space-y-2 max-sm:px-3">
                    {card.points.map((p, i) => (
                      <li key={i} className="text-lg flex items-start">
                        <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3"></span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default GlobalSourcing;
