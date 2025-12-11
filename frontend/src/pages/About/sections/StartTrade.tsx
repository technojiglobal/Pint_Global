import React from "react";

const StartTrade: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-15 pb-20">
      <div className="bg-[#0F6EB3] rounded-2xl p-6 md:p-10 text-white shadow-lg">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Left */}
          <div>
            <h2 className="text-2xl md:text-3xl text-white font-bold">
              Start Your Trade Journey
               With Us
            </h2>
            <p className="mt-3 text-white text-sm">
              We're ready to support your sourcing and export requirements.
            </p>

            <div className="mt-6 ml-20 w-full max-w-xs overflow-hidden rounded-lg border-4 border-white/20">
              <img src="/images/start-trade.png" className="object-cover w-full h-full " />
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="bg-white text-black rounded-lg p-6 shadow-lg">
              <h3 className="text-xl md:text-3xl font-bold text-[#0F6EB3]">
                Join Hands to Grow Together
              </h3>

              <form className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input className="border border-[#0F6EB347] bg-[#0F6EB312] rounded-md px-3 py-2 text-sm" placeholder="First Name" />
                  <input className="border border-[#0F6EB347] bg-[#0F6EB312] rounded-md px-3 py-2 text-sm" placeholder="Last Name" />
                </div>

                <input className="border border-[#0F6EB347] bg-[#0F6EB312] rounded-md px-3 py-2 w-full text-sm" placeholder="Your Email" />
                <input className="border border-[#0F6EB347] bg-[#0F6EB312] rounded-md px-3 py-2 w-full text-sm" placeholder="Phone Number" />

                <textarea className="border border-[#0F6EB347] bg-[#0F6EB312] rounded-md px-3 py-2 w-full text-sm h-24 resize-none"
                  placeholder="Message" />

                <button className="w-full bg-[#0F6EB3] text-white py-2 rounded-md font-semibold hover:bg-sky-800">
                  Get A Quote Now
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default StartTrade;
