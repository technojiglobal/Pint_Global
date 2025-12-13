import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F6EB3] text-white py-10">
      {/* TOP GRID */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-6">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg">Pint Global</span>
          </div>

          <p className="text-sm mt-3 text-gray-200">
            A modern export–import company connecting high-quality Indian
            products with global markets through trusted sourcing,
            transparent trade practices, and reliable logistics.
          </p>

          {/* SOCIAL ICONS */}
          <div className="mt-4">
            <ul className="flex flex-row gap-4 sm:gap-6">
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

              <li>
                <a
                  href="https://www.linkedin.com/in/mukesh-peddada-6a2129106"
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

        {/* QUICK LINKS */}
        <div>
          <h6 className="font-semibold mb-2">Quick Links</h6>
          <ul className="text-sm space-y-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h6 className="font-semibold mb-2">Services</h6>
          <ul className="text-sm space-y-1">
            <li>Export Services</li>
            <li>Import Services</li>
            <li>Global Sourcing</li>
            <li>Logistics & Documentation</li>
            <li>Support</li>
          </ul>
        </div>

        {/* PRODUCT CATEGORIES */}
        <div>
          <h6 className="font-semibold mb-2">Product Categories</h6>
          <ul className="text-sm space-y-1">
            <li>Rice & Grains</li>
            <li>Spices</li>
            <li>Coffee & Tea</li>
            <li>Fresh & Dry Fruits</li>
            <li>FMCG</li>
            <li>Industrial & Custom Products</li>
          </ul>
        </div>

        {/* CONTACT DETAILS (PUBLIC ICONS) */}
        <div>
          <h6 className="font-semibold mb-3">Contact Details</h6>

          <ul className="text-sm space-y-4 text-gray-200">
            {/* Phone */}
            <li className="flex items-start gap-3">
              <img
                src="/icons/call.png"
                alt="Phone"
                className="w-5 h-5 mt-0.5"
              />
              <a href="tel:+919550228191" className="hover:text-white">
                +91 9550228191
              </a>
            </li>

            {/* Email */}
            <li className="flex items-start gap-3">
              <img
                src="/icons/email.png"
                alt="Email"
                className="w-5 h-5 mt-0.5"
              />
              <span>
                <a
                  href="mailto:info@pintglobal.com"
                  className="hover:text-white"
                >
                  info@pintglobal.com
                </a>
                <br />
                <a
                  href="mailto:mukesh@pintglobal.com"
                  className="hover:text-white"
                >
                  mukesh@pintglobal.com
                </a>
              </span>
            </li>

            {/* Address */}
            <li className="flex items-start gap-3">
              <img
                src="/icons/location.png"
                alt="Location"
                className="w-5 h-5 mt-0.5"
              />
              <span>
                65-6-361, Mulagada, Malkapuram,
                <br />
                Visakhapatnam – 530011
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        className="mt-8 border-t-2 border-white pt-4
        flex flex-col md:flex-row justify-between items-center
        gap-4 text-sm text-gray-200"
      >
        <div className="mx-4">
          © 2025 PintGlobal. All Rights Reserved.
        </div>

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
