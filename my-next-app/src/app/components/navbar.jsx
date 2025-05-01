"use client";

import Link from "next/link"
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Dynamically track screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    handleResize(); // Run initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold">Simon Ramirez</div>


          <ul className="flex flex-row space-x-8 text-gray-400">
            <li className="text-[18px] font-extrabold transition-colors delay-150 duration-300 ease-in-out hover:text-white cursor-pointer">About</li>
            <Link href="/education"><li className="text-[18px] font-extrabold transition-colors delay-150 duration-300 ease-in-out hover:text-white cursor-pointer">Education</li></Link>
            <li className="text-[18px] font-extrabold transition-colors delay-150 duration-300 ease-in-out hover:text-white cursor-pointer">Projects</li>
            <li className="text-[18px] font-extrabold transition-colors delay-150 duration-300 ease-in-out hover:text-white cursor-pointer">Resume</li>
            <li className="text-[18px] font-extrabold transition-colors delay-150 duration-300 ease-in-out hover:text-white cursor-pointer">Contact</li>
          </ul>


      </div>
    </nav>
  );
};

export default Navbar;