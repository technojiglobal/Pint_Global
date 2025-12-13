import React, { useEffect, useRef } from "react";

const Certifications: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const images = [
    "/icons/foreign-trade.png",
    "/icons/fssai.png",
    "/icons/FIEO.png",
    "/icons/APEDA.png",
    "/icons/coffee-board.png",
  ];

  // duplicate for seamless loop
  const loopImages = [...images, ...images];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollSpeed = 0.5; // smaller = slower
    let animationId: number;

    const autoScroll = () => {
      container.scrollLeft += scrollSpeed;

      // reset scroll for infinite loop
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl md:text-3xl text-[#0F6EB3] font-bold">
          Certifications & Licenses
        </h3>

        <div className="mt-10 overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-10 overflow-hidden whitespace-nowrap"
          >
            {loopImages.map((src, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={src}
                  alt={`cert-${index}`}
                  className="h-40 md:h-48 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
