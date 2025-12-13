import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Global Trade Services", path: "/services" },
    { label: "Products", path: "/products" },
   
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex justify-center">
        <div className="w-[94%] sm:w-[92%] max-w-[1200px] bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/images/logo.png"
              alt="PintGlobal"
              className="h-8 sm:h-10 w-auto object-contain"
            />
            <h1 className="text-lg sm:text-2xl font-bold text-[#0F6EB3]">PintGlobal</h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-4 md:gap-6 text-sm md:text-base font-medium text-gray-700">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `cursor-pointer hover:text-[#0F6EB3] transition ${
                      isActive
  ? "text-[#0F6EB3] font-semibold after:block after:h-[3px] after:w-full after:bg-[#0F6EB3] after:rounded-full after:mt-1"
  : "after:block after:h-[3px] after:w-0 after:bg-[#0F6EB3] after:rounded-full after:mt-1 after:transition-all after:duration-3000 hover:after:w-6"

                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right: Contact + Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            <NavLink to="/contact">
              <button className="hidden md:inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#0F6EB3] text-white text-sm font-semibold shadow-md hover:opacity-95 transition">
                Contact
              </button>
            </NavLink>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="md:hidden inline-flex items-center justify-center p-2 sm:p-3 rounded-md border border-gray-200"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  // Close icon (X)
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger menu icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="md:hidden w-full bg-white shadow-lg px-3 sm:px-6 py-3 mt-2 rounded-xl animate-slide-down z-40">

          <ul className="flex flex-col gap-4 text-gray-700 text-sm">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)} // Close menu on click
                  className={({ isActive }) =>
                    `block py-1 hover:text-[#0F6EB3] transition ${
                      isActive ? "text-[#0F6EB3] font-semibold underline" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            {/* Contact button also included inside dropdown */}
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              <button className="w-full py-2 mt-3 rounded-full bg-[#0F6EB3] text-white font-semibold shadow-md hover:opacity-95 transition">
                Contact
              </button>
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
