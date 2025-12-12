import React, { useState, useEffect, useRef } from "react";

const VisionSection: React.FC = () => {
  const cards = [
    {
      title: "Our Vision",
      text: `To become a globally trusted export–import brand known for
      quality, speed, transparency and ethical trade — empowering
      businesses across borders through seamless international commerce.`,
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
  const duration = 700;

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      if (!hoverRef.current && !isAnimating) {
        runSlide();
      }
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const runSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    // Change card AFTER exit animation
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % cards.length);
      setIsAnimating(false);
    }, duration);
  };

  const getPositionClass = (i: number) => {
    const nextIndex = (index + 1) % cards.length;

    // ACTIVE CARD
    if (i === index) {
      return isAnimating
        ? "-translate-x-full opacity-0 scale-90 z-0" // sliding out to left
        : "translate-x-0 opacity-100 scale-110 z-30"; // active center
    }

    // NEXT CARD: only visible while sliding in
    if (i === nextIndex) {
      return isAnimating
        ? "translate-x-0 opacity-100 scale-110 z-30" // sliding into center
        : "translate-x-full opacity-0 scale-90 z-0"; // hidden until animation starts
    }

    // ALL OTHER CARDS ALWAYS HIDDEN
    return "opacity-0";
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

        {/* SLIDER */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full px-6 flex justify-center">
          <div
            className="relative w-full max-w-xl h-[280px] sm:h-[330px] overflow-visible"
          >
            {cards.map((card, i) => (
              <div
                key={i}
                onMouseEnter={() => (hoverRef.current = true)}
                onMouseLeave={() => (hoverRef.current = false)}
                className={`
                  absolute top-0 left-0 w-full bg-white rounded-2xl shadow-xl p-6 md:p-8
                  transform-gpu transition-all duration-[700ms]
                  ease-[cubic-bezier(0.25,0.8,0.25,1)]
                  ${getPositionClass(i)}
                `}
              >
                <h3 className="text-xl md:text-3xl font-bold underline underline-offset-4 text-[#0F6EB3]">
                  {card.title}
                </h3>

                <div className="mt-3 text-sm md:text-lg leading-relaxed">
                  {card.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-48"></div>
    </section>
  );
};

export default VisionSection;
