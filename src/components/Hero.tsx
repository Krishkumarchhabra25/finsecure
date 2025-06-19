"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { helveticaNeue, playfairDisplay } from "./fonts/fonts";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [circlePhase, setCirclePhase] = useState("idle");
  const statsRef = useRef(null);

  useEffect(() => {
    const sequence = async () => {
      await new Promise((res) => setTimeout(res, 3000));
      setCirclePhase("animate");
      await new Promise((res) => setTimeout(res, 4000));
      setCirclePhase("pause");
      await new Promise((res) => setTimeout(res, 2000));
      setCirclePhase("fadeout");
      await new Promise((res) => setTimeout(res, 2000));
      setCirclePhase("idle");
      sequence();
    };
    sequence();
  }, []);

  useEffect(() => {
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const circleVariants = {
    idle: { y: 0, opacity: 0 },
    animateUp: { y: [-30, 30, -30, 30, 0], opacity: 0.4, transition: { duration: 4, ease: "easeInOut" } },
    animateDown: { y: [30, -30, 30, -30, 0], opacity: 0.4, transition: { duration: 4, ease: "easeInOut" } },
    pause: { y: 0, opacity: 0.4 },
    fadeout: { y: 0, opacity: 0, transition: { duration: 2, ease: "easeInOut" } },
  };

  const getCircleAnimation = (direction: "up" | "down") => {
    if (circlePhase === "animate") return direction === "up" ? "animateUp" : "animateDown";
    if (circlePhase === "pause") return "pause";
    if (circlePhase === "fadeout") return "fadeout";
    return "idle";
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen mb-10 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden bg-gradient-to-b from-black via-black to-[#1a150f]">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#d1b05c33] to-transparent opacity-60 pointer-events-none z-0" />

      {/* Floating Circles */}
      <div className="absolute z-0 top-1/2 left-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px]  lg:h-[600px] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="absolute w-[100px] sm:w-[140px] md:w-[180px] h-[100px] sm:h-[140px] md:h-[180px] bg-white rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] opacity-40"
          style={{ left: "0px" }}
          variants={circleVariants}
          initial="idle"
          animate={getCircleAnimation("down")}
        />
        <motion.div
          className="absolute w-[100px] sm:w-[140px] md:w-[180px] h-[100px] sm:h-[140px] md:h-[180px] bg-white rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] opacity-40"
          style={{ right: "0px" }}
          variants={circleVariants}
          initial="idle"
          animate={getCircleAnimation("up")}
        />
      </div>

      {/* iPhone */}
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px]  mx-auto"
      >
        <Image src="/iphone.png" alt="iPhone UI" width={500} height={500} priority className="w-full h-auto object-contain" />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
        className={`${playfairDisplay.className} md:-mt-3 text-white text-[24px] sm:text-[32px] md:text-[30px] lg:text-[56px] xl:text-[66px] font-semibold leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)] z-10`}
      >
        The era of one-size-fits-all <br /> banking is over
      </motion.h1>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.8, ease: "easeOut" }}
        className=" mt-4 md:mt-2 flex flex-row md:flex-row gap-4 z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg justify-center items-center"
      >
        <button className="w-[80%] md:w-auto px-6 py-3 rounded-full bg-[#e3e4ea] text-black text-sm font-semibold border border-[#5d5f6e] shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)] hover:brightness-110 transition">
          Contact Us
        </button>
        <button className="w-[80%] md:w-auto px-6 py-3 rounded-full bg-gradient-to-br from-[#2d2f39] to-[#1e1f25] text-white text-sm font-semibold border border-[#555764] shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)] hover:brightness-110 transition">
          Download Now
        </button>
      </motion.div>

      {/* Stats */}
      <div ref={statsRef} className="relative z-10 w-full mt-20  md:mt-16 md:p-6 text-white flex flex-col items-center justify-center">
      {/*   <div className="absolute inset-0 w-full h-full z-[-2]">
          <Image src="/GRADIANTGRAINS.png" alt="Stats Background" fill sizes="100vw" className="object-cover opacity-30" />
        </div> */}
        
        <div className="md:max-w-4xl mx-auto text-center">
          <h2 className={`${playfairDisplay.className} text-[22px] sm:text-[28px] md:text-[36px] lg:text-[44px] tracking-[-0.28px]`}>
            FinSecure by the Numbers
          </h2>
          <p className={`${helveticaNeue.className} text-[14px] sm:text-[16px] md:text-[20px] mt-2 text-white/80`} >
            Real impact. Real users. Real rewards.
          </p>

      <div className= " mt-5 md:mt-10 flex flex-row sm:flex-row md:gap-8 gap-6  w-full max-w-full mx-auto text-[#f3e4c7] justify-center items-center">
  <div className="text-center ">
    <h3 className=" text-[30px] md:text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#facc15] via-[#f59e0b] to-[#f43f5e] text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(243,228,199,0.6)]">
      $4m+
    </h3>
    <p className="mt-2 text-[9px] md:text-xs sm:text-sm">Annual card spending</p>
  </div>
  <div className="text-center">
    <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#facc15] via-[#f59e0b] to-[#f43f5e] text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(243,228,199,0.6)]">
      100k+
    </h3>
    <p className="mt-2  text-[9px] md:text-xs sm:text-sm">Happy customers</p>
  </div>
  <div className="text-center">
    <h3 className="text-[30px] md:text-3xl sm:text-4xlfont-bold bg-gradient-to-r from-[#facc15] via-[#f59e0b] to-[#f43f5e] text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(243,228,199,0.6)]">
      $40m+
    </h3>
    <p className="mt-2  text-[9px] md:text-xs sm:text-sm">Earned in cash back</p>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
