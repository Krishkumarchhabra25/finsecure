"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { helveticaNeue } from "./fonts/fonts";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // npm install lucide-react

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.7 }}
      className={`relative w-full flex items-center justify-between px-4 py-5 text-white bg-black ${helveticaNeue.variable} font-helvetica`}
    >
      {/* Left - Logo + Finsecure */}
      <div className="flex items-center gap-2">
        <Image src="/Union.png" alt="Logo" width={24} height={24} />
        <span className="text-sm font-medium">Finsecure</span>
      </div>

      {/* Center - Navigation Desktop Only */}
      <nav className="hidden md:flex space-x-6 text-sm font-normal">
        <a href="#" className="hover:underline">Company</a>
        <a href="#" className="hover:underline">Features</a>
        <a href="#" className="hover:underline">Pricing</a>
        <a href="#" className="hover:underline">FAQ</a>
        <a href="#" className="hover:underline">Blog</a>
      </nav>

      {/* Right - Download Button Desktop Only */}
      <div className="hidden md:block">
        <button className="text-sm px-4 py-1.5 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
          Download Now
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4 md:hidden z-50">
          <a href="#" className="hover:underline">Company</a>
          <a href="#" className="hover:underline">Features</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Blog</a>
          <button className="text-sm px-4 py-1.5 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
            Download Now
          </button>
        </div>
      )}
    </motion.header>
  );
}
