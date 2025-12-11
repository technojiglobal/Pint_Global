import React from "react";

const StartTradeJourney: React.FC = () => {
  return (
    <section className="py-10"> 
      {/* SECTION SHOULD NOT BE FULL-WIDTH BLUE */}

      <div className="max-w-6xl mx-auto px-6">
        
        {/* BLUE BOX — NOT FULL WIDTH */}
        <div className="bg-[#0F6EB3] rounded-2xl p-8 md:p-12">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* LEFT TEXT */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Start Your Trade Journey With Us
              </h2>

              <p className="mt-4 text-base md:text-lg text-white/95 max-w-xl">
                We’re ready to support your sourcing and export requirements.
              </p>
            </div>

            {/* RIGHT WHITE CARD */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6">
                
                <div className="space-y-4">

                  {/* EMAIL */}
                  <div className="flex items-start bg-[#0F6EB312]  p-1 gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#0F6EB3] flex items-center justify-center">
                      <img src="/icons/email.png" alt="email" className="w-6 h-6 object-contain" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email Address:</p>
                      <p className="text-sm font-medium">
                        info@pintglobal.com / mukesh@pintglobal.com
                      </p>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex items-start  bg-[#0F6EB312]  p-1 gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#0F6EB3] flex items-center justify-center">
                      <img src="/icons/call.png" alt="phone" className="w-6 h-6 object-contain" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone Number:</p>
                      <p className="text-sm font-medium">+91 9550228191</p>
                    </div>
                  </div>

                  {/* ADDRESS */}
                  <div className="flex items-start bg-[#0F6EB312]  p-1 gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#0F6EB3] flex items-center justify-center">
                      <img src="/icons/location.png" alt="location" className="w-6 h-6 object-contain" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Address:</p>
                      <p className="text-sm font-medium">
                        65-6-361, Mulagada, Malkapuram, Visakhapatnam – 530011
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default StartTradeJourney;
