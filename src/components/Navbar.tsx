import { motion } from "framer-motion";
import { useState } from "react";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-4 flex items-center relative z-20 bg-transparent">
      {/* Logo */}
      <div className="text-xl font-bold text-white">FinSecure</div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Download Button (ALWAYS visible) */}
      <button className="px-4 py-2 rounded-full bg-gradient-to-br from-[#2d2f39] to-[#1e1f25] text-white text-sm font-semibold hover:brightness-110 transition">
        Download Now
      </button>

      {/* Hamburger (Mobile Only) */}
      <div
        className="sm:hidden cursor-pointer ml-4 z-30"
        onClick={toggleMenu}
      >
        <div className="w-6 h-0.5 bg-white mb-1" />
        <div className="w-6 h-0.5 bg-white mb-1" />
        <div className="w-6 h-0.5 bg-white" />
      </div>

      {/* Mobile Drawer */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: menuOpen ? 0 : '100%' }}
        transition={{ type: "tween" }}
        className="fixed top-0 right-0 w-3/4 h-full bg-black flex flex-col items-start p-6 space-y-6 z-20 sm:hidden"
      >
        <button className="self-end mb-4" onClick={toggleMenu}>❌</button>
        <a href="#">Company</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
      </motion.div>
    </nav>
  );
}