"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons are optional; you can use any

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold">MyPortfolio</div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="mt-4 flex flex-col space-y-4 text-lg font-medium md:hidden">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">About Me</li>
          <li className="hover:text-gray-400 cursor-pointer">Projects</li>
          <li className="hover:text-gray-400 cursor-pointer">Resume</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;