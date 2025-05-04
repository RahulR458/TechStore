import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
<nav className="sticky top-0 z-50 bg-[#0A0F1C] text-white px-6 py-4 flex justify-between items-center shadow-md">
{/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" className="w-9 h-9" />
        <span className="text-2xl font-extrabold tracking-wide">TechStore</span>
      </div>

      {/* Desktop Menu */}
      {/* <ul className="hidden md:flex gap-8">
        {["Home", "Gadgets", "Accessories"].map((item) => (
          <li
            key={item}
            className="hover:text-green-400 transition duration-200 cursor-pointer text-sm font-medium"
          >
            {item}
          </li>
        ))}
      </ul> */}

      {/* Hamburger Icon */}
      {/* <div
        className="md:hidden cursor-pointer z-50"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <FiX size={26} /> : <FiMenu size={26} />}
      </div> */}

      {/* Mobile Sidebar */}
      {/* <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-black text-white transform transition-transform duration-300 z-40 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-20 flex flex-col gap-6 text-lg font-semibold">
          {["Home", "Gadgets", "Accessories"].map((item) => (
            <span
              key={item}
              className="hover:text-green-400 transition duration-200 cursor-pointer"
              onClick={() => setSidebarOpen(false)}
            >
              {item}
            </span>
          ))}
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
