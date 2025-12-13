import React from "react";
import {useNavigate} from "react-router-dom";
import Button from "../../../components/Button";
const CoreTradeServices: React.FC = () => {
  const navigate=useNavigate();
  return (
    <section className="bg-[#0F6EB30D] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-[#0F6EB3] text-center">
          Our Core Trade Services
        </h3>
        <p className="text-center mt-2 text-[#0B3B63] max-w-2xl mx-auto">
          Comprehensive export solutions for sourcing, compliance, and global shipping.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6 ">

          {/* LEFT CARD — centered text & reduced height */}
          <div className="bg-[#0F6EB3] text-white rounded-2xl p-6 shadow-lg 
                          flex flex-col justify-center min-h-[220px]">
            <h4 className="font-semibold text-xl mb-4">
              Export Services – End-to-End Execution
            </h4>
            <ul className="space-y-2 text-lg">
              <li>• Verified Product Sourcing</li>
              <li>• Quality Inspection & Compliance</li>
              <li>• Export-Grade Packaging</li>
              <li>• Freight & Logistics Coordination</li>
              <li>• Complete Documentation & Customs Handling</li>
              <li>• Real-Time Shipment Updates</li>
            </ul>
          </div>

          {/* RIGHT CARD — reduced height, same size as left */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg min-h-[220px]">
            <img
              src="/images/trade.png"
              alt="Warehouse"
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

            {/* Text centered */}
            <div className="absolute inset-0 flex flex-col justify-end px-6 z-10">
              <h5 className="font-semibold text-white text-xl drop-shadow-lg">
                Global Sourcing
              </h5>
              <p className="text-white text-sm mt-2 mb-4 max-w-sm drop-shadow">
                Tailor-made global sourcing solutions based on buyer specifications,
                volume, and destination markets.
              </p>
            </div>
          </div>

        </div>

        <Button text="View All Services" onClick={()=>navigate("/services")} />

      </div>
    </section>
  );
};

export default CoreTradeServices;
