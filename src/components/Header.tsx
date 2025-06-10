"use client";
import { motion } from "framer-motion";
import { helveticaNeue } from "./fonts/fonts";
import Image from "next/image";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.7 }}
      className={`relative w-full flex items-center justify-center px-6 py-5 text-white bg-black ${helveticaNeue.variable} font-helvetica`}
    >
      {/* Left - Logo + Finsecure */}
      <div className="absolute left-1/5 flex items-center gap-2">
        <Image src="/Union.png" alt="Logo" width={20} height={20} />
        <span className="text-sm font-medium">Finsecure</span>
      </div>

      {/* Center - Navigation */}
      <nav className="space-x-6 mb-2 text-sm font-normal">
        <a href="#" className="hover:underline">Company</a>
        <a href="#" className="hover:underline">Features</a>
        <a href="#" className="hover:underline">Pricing</a>
        <a href="#" className="hover:underline">FAQ</a>
        <a href="#" className="hover:underline">Blog</a>
      </nav>

      {/* Right - Download Now */}
      <div className="absolute right-1/5">
        <button className="text-sm px-4 py-1.5 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
          Download Now
        </button>
      </div>
    </motion.header>
  );
}
