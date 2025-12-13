import React from "react";

type Category = {
  title: string;
  markets: string;
  img: string;
};

const categories: Category[] = [
  {
    title: "Organic Coffee & Agro Commodities",
    markets: "Australia, UAE, Saudi Arabia, Qatar, USA, Europe, Japan, Russia",
    img: "/images/beans.png",
  },
  {
    title: "Seafood",
    markets: "China, Vietnam, Thailand, UAE, USA",
    img: "/images/fish1.png",
  },
  {
    title: "Minerals (Iron Ore)",
    markets: "China, South Korea, Malaysia",
    img: "/images/mine.png",
  },
];

const Export: React.FC = () => {
  return (
    <section className="bg-[#F3F7FB] py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F6EB3] mb-10">
          Major Export Categories
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          {categories.map((item, i) => (
            <div
              key={i}
              className="
                group relative
                h-64 sm:h-80 md:h-[400px]
                w-[260px] md:w-[220px]
                hover:w-[360px]
                transition-all duration-700 ease-in-out
                overflow-hidden shadow-lg
              "
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient (kept) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F6EB3]/90 via-[#0F6EB3]/50 to-transparent" />

              {/* Text */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                
                {/* Title (always visible) */}
                <h3 className="text-lg sm:text-xl font-semibold">
                  {item.title}
                </h3>

                {/* Markets (on hover) */}
                <p
                  className="
                    mt-2 text-xs sm:text-sm leading-relaxed
                    opacity-0 translate-y-4 max-h-0
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    group-hover:max-h-40
                    transition-all duration-700 ease-in-out
                    overflow-hidden
                  "
                >
                  {item.markets}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Export;
