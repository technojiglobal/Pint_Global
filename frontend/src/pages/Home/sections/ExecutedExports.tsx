

// Steps
const steps = [
  { title: "Procurement", text: "Specialised Source Points for our products" },
  { title: "Sorting & Cleaning", text: "Handpicked Quality come from here" },
  { title: "Packaging", text: "Best-in-class materials to ensure safe transit" },
  { title: "Delivery", text: "We plan each activity as per shipping line schedules" },
];

// Animations
const animationCSS = `
@keyframes rotateRing {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes dotSlide {
  0% { transform: translateX(0); opacity: 0.3; }
  50% { opacity: 1; }
  100% { transform: translateX(70px); opacity: 0.3; }
}

@keyframes glowPulse {
  0% { transform: scale(1); opacity: 0.45; }
  50% { transform: scale(1.22); opacity: 0.75; }
  100% { transform: scale(1); opacity: 0.45; }
}

@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(35px); }
  100% { opacity: 1; transform: translateY(0px); }
}
`;

const ExecutedExports = () => {
  return (
    <section className="py-10 bg-white overflow-hidden select-none">
      <style>{animationCSS}</style>

      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#0F6EB3] animate-[fadeUp_0.8s_ease-out]">
          Professionally Executed Exports
        </h2>
        <p className="mt-5 font-semibold  animate-[fadeUp_1s_ease-out]">
          High-quality products, verified processes, and seamless global delivery.
        </p>
        <div className="mt-6">
          <button className="bg-[#0F6EB3] text-white font-medium px-8 py-3 rounded-full shadow">
            Streamlined Product Delivery Process
          </button>
        </div>

        {/* Circles */}
        <div
          className="
            mt-10 flex flex-col md:flex-row justify-center items-center
            gap-0 md:gap-0
          "
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                relative flex flex-col items-center
              "
              style={{ animation: `fadeUp 0.8s ease-out ${index * 0.25}s both` }}
            >
              {/* OUTER RING CONTAINER — ONLY THIS OVERLAPS */}
              <div className="relative w-64 h-64 flex items-center justify-center">

                {/* OUTER RING (overlapping) */}
                <div className="absolute w-full h-full rounded-full border border-[#BFE2F2]" />

                {/* INNER CONTENT (NO OVERLAP BEHAVIOR) */}
                <div className="absolute inset-0 flex items-center justify-center">

                  {/* Glow */}
                  <div
                    className="absolute w-40 h-40 rounded-full bg-[#0F6EB3]/25 blur-xl"
                    style={{ animation: "glowPulse 3s infinite ease-in-out" }}
                  ></div>

                  {/* Rotating dotted ring */}
                  <div
                    className="absolute w-[78%] h-[78%] rounded-full border-2 border-dashed border-[#86C8DE]"
                    style={{ animation: "rotateRing 12s linear infinite" }}
                  ></div>

                  {/* Center Circle */}
                 <div
                  className="
                    relative z-10 w-36 h-36 rounded-full 
                    bg-gradient-to-br from-[#0F6EB3] to-[#0B84C6]
                    flex flex-col items-center justify-center text-white font-semibold
                    text-center px-3
                    shadow-md transition-all duration-300 ease-out
                    hover:scale-110 hover:shadow-[0_0_55px_rgba(15,110,179,0.55)]
                  "
                >
                  <span>{step.title}</span>
                  <span className="text-xs mt-1 opacity-80">{step.text}</span>
                </div>


                </div>
              </div>

              {/* CONNECTOR — DO NOT CHANGE FUNCTIONALITY */}
              {index !== steps.length - 1 && (
                <div className="absolute top-1/2 right-[-85px] hidden md:flex items-center">

                  {/* Moving dot */}
                  <span
                    className="w-2 h-2 bg-[#0F6EB3] rounded-full"
                    style={{ animation: "dotSlide 2s ease-out infinite" }}
                  ></span>

                  {/* Dashed line from OUTER ring → NEXT INNER ring */}
                  <div className="w-20 border-t border-dashed border-[#86C8DE] ml-2"></div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExecutedExports;
