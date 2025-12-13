import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";


const WhoWeAre: React.FC = () => {
  const navigate=useNavigate();
  return (
    <section className="bg-[#0F6EB30D] pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-center font-extrabold text-[#0F6EB3]">Who We Are</h2>
        <p className="mt-6 max-w-3xl mx-auto text-center text-[#0F6EB3]">
          PINT GLOBAL is a professionally managed export–import company headquartered in India,
          delivering premium-quality products to global markets through transparent processes,
          verified sourcing, and seamless logistics execution.
        </p>

        <p className="mt-6 max-w-3xl mx-auto text-center text-[#0F6EB3]">
          We operate with strict compliance, quality assurance, and end-to-end trade coordination to
          help international buyers source with complete confidence.
        </p>

        <Button text="Know More"  onClick={()=>navigate("/about")}/>

      </div>
    </section>
  );
};

export default WhoWeAre;
