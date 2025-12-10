import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#083F76] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-bold">PintGlobal</span>
          </div>
          <p className="text-sm mt-3 text-gray-200">A modern export–import company connecting high-quality 
            Indian products with global markets through trusted 
            sourcing, transparent trade practices, and reliable logistics..</p>
        </div>

        <div>
          <h6 className="font-semibold mb-2">Quick Links</h6>
          <ul className="text-sm space-y-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Products</li>
            <li>Why Choose Us</li>
            <li>Global Markets</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h6 className="font-semibold mb-2">Services</h6>
          <ul className="text-sm space-y-1">
            <li>Export Services</li>
            <li>Import Services</li>
            <li> Global Sourcing</li>
            <li> Logistics & Documentation</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold mb-2">Services</h6>
          <ul className="text-sm space-y-1">
            <li>Rice & Grains</li>
            <li>Spices</li>
            <li> Coffee & Tea</li>
            <li> Fresh & Dry Fruits</li>
            <li>FMCG</li>
             <li>Industrial & Custom Products</li>
          </ul>
        </div>

        
      </div>

      <div className="mt-8 border-t-2 border-white pt-4 flex justify-between items-center text-sm text-gray-200">

        {/* Left Text */}
        <div className="mx-4">© 2025 PintGlobal. All Rights Reserved.</div>

        {/* Right Side Links */}
        <div className="flex items-center  mx-4 gap-4">
          <span className="cursor-pointer hover:text-white"> .Privacy Policy</span>
          <span className="cursor-pointer hover:text-white"> .Terms & Conditions</span>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
