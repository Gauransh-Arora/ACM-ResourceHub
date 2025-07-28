import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo_ACM from "../assets/logo_ACM.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Roadmaps", href: "/roadmaps" },
    { id: 3, name: "Resources", href: "/resources" },
    { id: 4, name: "CGPA Calculator", href: "/cgpa" },
    { id: 5, name: "Time Table", href: "/time-table" },
  ];

  return (
    <nav className="bg-[#D3F3FF] shadow-lg border-b border-gray-200 h-16 relative z-50">
      <div className="flex justify-between">
        <div className="hidden md:flex justify-center items-center h-16 gap-5 px-5">
          {navItems.map((item) => {
            return (
              <NavLink
                key={item.id}
                to={item.href}
                className={({ isActive }) =>
                  isActive ? "font-bold" : "font-normal"
                }
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>

        <div className="md:hidden flex items-center h-16 px-5">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex justify-center items-center h-16 gap-5">
          <a href="/about-us" className="px-3 py-3 text-[#434343]">
            About Us
          </a>
          <div>
            <img src={logo_ACM} alt="ACM Logo" className="cursor-pointer" />
          </div>
        </div>

        <div className="md:hidden flex justify-center items-center h-16 px-5">
          <img src={logo_ACM} alt="ACM Logo" className="cursor-pointer" />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#D3F3FF] border-t border-gray-200 absolute top-16 left-0 w-full z-50 shadow-lg">
          <div className="px-5 py-3 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.href}
                className={({ isActive }) =>
                  `block px-3 py-2 hover:bg-white/50 rounded ${
                    isActive ? "font-bold" : "font-normal"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <a
              href="/about-us"
              className="block px-3 py-2 text-[#434343] hover:bg-white/50 rounded"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;