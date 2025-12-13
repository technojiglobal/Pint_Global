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
  {
    title: "Rice and Grains",
    markets: "Pure grains from trusted farmers.",
    img: "/images/riceandgrain.png",
  },
];

const Export: React.FC = () => {
  return (
    <section className="bg-[#F3F7FB] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0F6EB3] mb-8 sm:mb-10">
          Major Export Categories
        </h2>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-6">

          {categories.map((item, i) => (
            <div
              key={i}
              className="
                group relative
                h-64 sm:h-72 md:h-[380px]
                w-full sm:w-[260px] md:w-[240px] lg:w-[260px]
                md:hover:w-[320px]
                transition-all duration-700 ease-in-out
                overflow-hidden shadow-lg rounded-xl
              "
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F6EB3]/90 via-[#0F6EB3]/50 to-transparent" />

              {/* Text */}
              <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold">
                  {item.title}
                </h3>

                {/* Markets */}
                <p
                  className="
                    mt-2 text-xs sm:text-sm leading-relaxed
                    opacity-100 sm:opacity-0
                    translate-y-0 sm:translate-y-4
                    max-h-40 sm:max-h-0
                    sm:group-hover:opacity-100
                    sm:group-hover:translate-y-0
                    sm:group-hover:max-h-40
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
