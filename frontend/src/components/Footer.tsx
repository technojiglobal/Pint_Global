import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#083F76] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/logos/fssai.png" alt="logo" className="h-8 object-contain" />
            <span className="font-bold">PintGlobal</span>
          </div>
          <p className="text-sm mt-3 text-gray-200">A modern export-import company connecting high-quality Indian products with global markets.</p>
        </div>

        <div>
          <h6 className="font-semibold mb-2">Quick Links</h6>
          <ul className="text-sm space-y-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Products</li>
          </ul>
        </div>

        <div>
          <h6 className="font-semibold mb-2">Services</h6>
          <ul className="text-sm space-y-1">
            <li>Export Services</li>
            <li>Sourcing</li>
            <li>Logistics</li>
          </ul>
        </div>

        <div>
          <h6 className="font-semibold mb-2">Contact</h6>
          <div className="text-sm">info@pintglobal.com</div>
          <div className="text-sm mt-1">+91 00000 00000</div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-200">© 2025 PintGlobal. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
