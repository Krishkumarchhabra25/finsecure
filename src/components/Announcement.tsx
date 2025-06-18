"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Announcement() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
      className="hidden md:flex relative w-full overflow-hidden text-white text-sm text-center py-2 px-4 justify-center items-center"
    >
      {/* Grain Texture */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <Image
          src="/grains.png"
          alt="Grain Texture"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Left light streak */}
      <div className="absolute left-0 top-0 h-full w-[30%] bg-gradient-to-r from-white/30 to-transparent z-0" />

      {/* Right light streak */}
      <div className="absolute right-0 top-0 h-full w-[10%] bg-gradient-to-l from-white/10 to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 flex items-center gap-2">
        <span>Announcing our $41M Series B led by Goodwater Capital</span>
        <span className="text-[#999]">|</span>
        <a
          href="#"
          className="underline text-white hover:text-gray-300 transition"
        >
          Learn more →
        </a>
      </div>
    </motion.div>
  );
}
