import React from "react";

type Category = {
  title: string;
  markets: string;
  img: string;
  highlight?: boolean;
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
    highlight: true,
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
      <div className="max-w-6xl mx-auto px-0">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F6EB3] mb-10 px-4">
          Major Export Categories
        </h2>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-0">

          {categories.map((item, i) => (
            <div
              key={i}
              className="
                relative 
                h-64 sm:h-80 md:h-[400px] lg:h-[500px] 
                overflow-hidden shadow-lg 
                max-w-[320px] w-full   /* ↓↓↓ REDUCED WIDTH */
              "
            >
              {/* Background Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(15,110,179,0) 0%, rgba(15,110,179,0.4) 40%, #2e6e9cff 100%)",
                }}
              />

              {/* Text */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-lg sm:text-xl font-semibold drop-shadow">
                  {item.title}
                </h3>
                <p className="text-white text-xs sm:text-sm mt-1 leading-relaxed drop-shadow">
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
