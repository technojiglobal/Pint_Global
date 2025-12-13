import React, { useState, useEffect, useRef } from "react";

const VisionSection: React.FC = () => {
  const cards = [
    {
      title: "Our Vision",
      text: (
        <p>
          To become a globally trusted export–import brand known for quality,
          speed, transparency and ethical trade — empowering businesses across
          borders through seamless international commerce.
        </p>
      ),
    },
    {
      title: "Our Mission",
      text: (
        <ul className="list-disc pl-5 space-y-1">
          <li>To provide reliable global sourcing and export solutions</li>
          <li>To maintain strict quality assurance and compliance standards</li>
          <li>To build long-term trade partnerships worldwide</li>
          <li>To simplify international trade through expert logistics support</li>
          <li>To deliver consistent value through transparent operations</li>
        </ul>
      ),
    },
  ];

  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hoverRef = useRef(false);
  const duration = 600;

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      if (!hoverRef.current && !isAnimating) {
        triggerSlide();
      }
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const triggerSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % cards.length);
      setIsAnimating(false);
    }, duration);
  };

  return (
    <section className="w-full">
      <div className="relative w-full h-[70vh] md:h-[80vh]">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/trade-hero.png')" }}
        />
        <div className="absolute inset-0 bg-[#0F6EB3]/60" />

        {/* FIXED CARD */}
       <div className="
  absolute bottom-0 
  left-1/2 md:left-[70%]
  -translate-x-1/2 translate-y-1/2
  w-full px-6 flex justify-center
">

          <div
            onMouseEnter={() => (hoverRef.current = true)}
            onMouseLeave={() => (hoverRef.current = false)}
            className="
              relative
              w-full max-w-xl
              h-[280px] sm:h-[330px]
              bg-white
              rounded-2xl
              shadow-xl
              p-6 md:p-8
              overflow-hidden
            "
          >
            {/* TITLE (fixed, no animation) */}
            <h3 className="text-xl md:text-3xl font-bold underline underline-offset-4 text-[#0F6EB3]">
              {cards[index].title}
            </h3>

            {/* TEXT ANIMATION AREA */}
            <div className="relative mt-4 h-[170px] sm:h-[200px] overflow-hidden">
              <div
                key={index}
                className={`
                  absolute inset-0
                  text-sm md:text-lg leading-relaxed
                  transition-all duration-[600ms]
                  ease-[cubic-bezier(0.25,0.8,0.25,1)]
                  ${isAnimating
                    ? "-translate-x-full opacity-0"
                    : "translate-x-0 opacity-100"}
                `}
              >
                {cards[index].text}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for overlap */}
      <div className="h-48"></div>
    </section>
  );
};

export default VisionSection;
