import React from "react";

export default function PintMeaning() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-sky-800">What PINT Stands For</h2>

      <p className="mt-3  text-sm md:text-base max-w-2xl mx-auto">
        The name PINT stands for Peddada International Trade — a reflection of our commitment to
        ethical business, transparent operations, and long-term client relationships.
      </p>

      <p className="mt-6 font-semibold  text-md">Every transaction at PINTGLOBAL is guided by:</p>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-4xl mx-auto">
        {[
          { icon: "/icons/ethical.png", label: "Ethical trade practices" },
          { icon: "/icons/communication.png", label: "Clear communication" },
          { icon: "/icons/documentation.png", label: "Clean documentation" },
          { icon: "/icons/compliance.png", label: "International compliance" }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-[#0F6EB3] flex items-center justify-center shadow">
              <img src={item.icon} className="w-10 h-10" />
            </div>
            <span className="text-sm font-medium text-[#0F6EB3]">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
