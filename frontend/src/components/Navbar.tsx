import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Products", path: "/products" },
    { label: "Global Markets", path: "/global-markets" },
    { label: "Why Us", path: "/why-us" },
    { label: "Gallery", path: "/gallery" },
  ];

  return (
    <nav className="flex justify-center">
      <div className="w-[92%] max-w-[1200px] bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="PintGlobal"
            className="h-10 w-auto object-contain"
          />
          <h1 className="text-2xl font-bold text-[#0F6EB3]">PintGlobal</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `cursor-pointer hover:text-[#0F6EB3] transition ${
                    isActive ? "text-[#0F6EB3] font-semibold underline" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right: Contact button */}
        <div className="flex items-center gap-3">
          <NavLink to="/contact">
            <button className="hidden md:inline-block px-5 py-2 rounded-full bg-[#0F6EB3] text-white font-semibold shadow-md hover:opacity-95 transition">
              Contact
            </button>
          </NavLink>

          {/* Mobile Menu Icon */}
          <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-200">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
