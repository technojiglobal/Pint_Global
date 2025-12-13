
export default function PintMeaning() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-16 text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0F6EB3]">What PINT Stands For</h2>

      <p className="mt-3 font-semibold text-sm sm:text-base md:text-base max-w-2xl mx-auto leading-relaxed">
        The name PINT stands for Peddada International Trade — a reflection of our commitment to
        ethical business, transparent operations, and long-term client relationships.
      </p>

      <p className="mt-6 font-semibold text-sm sm:text-base md:text-base">Every transaction at PINTGLOBAL is guided by:</p>

      <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10 max-w-4xl mx-auto">
        {[
          { icon: "/icons/ethical.png", label: "Ethical trade practices" },
          { icon: "/icons/communication.png", label: "Clear communication" },
          { icon: "/icons/documentation.png", label: "Clean documentation" },
          { icon: "/icons/compliance.png", label: "International compliance" }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2 sm:gap-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0F6EB3] flex items-center justify-center shadow flex-shrink-0">
              <img src={item.icon} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            </div>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#0F6EB3] text-center">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
