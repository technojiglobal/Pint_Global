import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";
const Footer: React.FC = () => {
  const navigate=useNavigate();
  return (
    <footer className="bg-[#0F6EB3] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-bold">PintGlobal</span>
          </div>
          <p className="text-sm mt-3 text-gray-200">A modern export–import company connecting high-quality 
            Indian products with global markets through trusted 
            sourcing, transparent trade practices, and reliable logistics..
          </p>
          <div className="mt-4 flex items-center gap-3">
  <ul className="flex flex-row gap-4 sm:gap-6">

    {/* Instagram */}
    <li>
      <a
        href="https://www.instagram.com/pintglobal?igsh=NnVyMm82OWh0cTB1&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition"
      >
         <Instagram className="w-6 h-6" />
      </a>
    </li>

    {/* Facebook */}
    <li>
      <a
        href="https://www.facebook.com/share/1Dc8heF9ZY/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition"
      >
        <Facebook className="w-6 h-6" />
      </a>
    </li>

    {/* Linkedin */}
    <li>
      <a
        href="https://www.linkedin.com/in/mukesh-peddada-6a2129106?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition"
      >
       <Linkedin className="w-6 h-6" />
      </a>
    </li>

  </ul>
</div>

</div>

       

        <div>
          <h6 className="font-semibold mb-2">Quick Links</h6>
          <ul className="text-sm space-y-1">
            <li><Link className="hover:underline" to="/">Home</Link></li>
            <li><Link className="hover:underline" to="/about">About Us</Link></li>
            <li><Link className="hover:underline" to="/services">Services</Link></li>
            <li><Link className="hover:underline" to="/products">Products</Link></li>
            
            <li><Link className="hover:underline" to="/contact">Contact</Link></li>
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

     <div
  className="mt-8 border-t-2 border-white pt-4 
  flex flex-col md:flex-row justify-between items-center 
  gap-4 text-sm text-gray-200"
>
  {/* Left Text */}
  <div className="mx-4">
    © 2025 PintGlobal. All Rights Reserved.
  </div>

  {/* Right Side Links */}
  <div className="flex items-center mx-4 gap-6">
    <span className="flex items-center cursor-pointer hover:text-white gap-2">
      <span className="w-2 h-2 bg-white rounded-full"></span>
      Privacy Policy
    </span>

    <span className="flex items-center cursor-pointer hover:text-white gap-2">
      <span className="w-2 h-2 bg-white rounded-full"></span>
      Terms & Conditions
    </span>
  </div>
</div>


    </footer>
  );
};

export default Footer;
