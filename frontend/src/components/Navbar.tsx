import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center">
      {/* Nav container — rounded white bar */}
      <div className="w-[92%] max-w-[1200px] bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg px-6 py-3 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="PintGlobal"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Center: Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {["Home", "About Us", "Services", "Products", "Global Markets", "Why Us", "Gallery"].map((item) => (
            <li
              key={item}
              className="hover:text-[#0F6EB3] cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Right: Contact button */}
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-block px-5 py-2 rounded-full bg-[#0F6EB3] text-white font-semibold shadow-md hover:opacity-95 transition">
            Contact
          </button>

          {/* Mobile hamburger */}
          <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-200">
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
