"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { playfairDisplay } from "./fonts/fonts";
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

  const getCircleAnimation = (direction) => {
    if (circlePhase === "animate") return direction === "up" ? "animateUp" : "animateDown";
    if (circlePhase === "pause") return "pause";
    if (circlePhase === "fadeout") return "fadeout";
    return "idle";
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen mb-10 px-4 overflow-hidden bg-gradient-to-b from-black via-black to-[#1a150f]">
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#d1b05c33] to-transparent opacity-60 pointer-events-none z-0" />
      <div className="absolute z-0 top-1/2 left-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="absolute w-[120px] sm:w-[150px] md:w-[180px] h-[120px] sm:h-[150px] md:h-[180px] ml-3 sm:ml-6 bg-white rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] opacity-40"
          style={{ left: "0px" }}
          variants={circleVariants}
          initial="idle"
          animate={getCircleAnimation("down")}
        />
        <motion.div
          className="absolute w-[120px] sm:w-[150px] md:w-[180px] h-[120px] sm:h-[150px] md:h-[180px] mr-3 sm:mr-6 bg-white rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] opacity-40"
          style={{ right: "0px" }}
          variants={circleVariants}
          initial="idle"
          animate={getCircleAnimation("up")}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        className="relative z-10 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[400px] mx-auto"
      >
        <Image src="/iphone.png" alt="iPhone UI" width={500} height={500} priority className="w-full h-auto" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
        className={`${playfairDisplay.className} text-white text-[32px] sm:text-[42px] md:text-[52px] lg:text-[66px] font-semibold leading-[1.1] tracking-[-0.5px] drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)] z-10`}
      >
        The era of one-size-fits-all <br /> banking is over
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.8, ease: "easeOut" }}
        className="mt-4 flex flex-col sm:flex-row gap-4 z-10 p-2"
      >
        <button className="w-full sm:w-[150px] h-[48px] rounded-full bg-[#e3e4ea] text-black text-sm font-semibold px-3 py-1 border border-[#5d5f6e] shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)] hover:brightness-110 transition">
          Contact Us
        </button>
        <button className="w-full sm:w-[150px] h-[48px] rounded-full bg-gradient-to-br from-[#2d2f39] to-[#1e1f25] text-white text-sm font-semibold px-4 py-1 border border-[#555764] shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)] hover:brightness-110 transition">
          Download Now
        </button>
      </motion.div>

      <div ref={statsRef} className="relative z-10 w-full px-4 mt-16 p-6 text-white flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-screen h-full z-[-2]">
          <Image src="/GRADIANTGRAINS.png" alt="Stats Background" fill className="object-cover opacity-30" />
        </div>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/20 z-[-1] rounded-none md:rounded-xl" />

        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${playfairDisplay.className} text-[28px] sm:text-[36px] md:text-[44px] tracking-[-0.28px]`}>
            FinSecure by the Numbers
          </h2>
          <p className="text-[16px] sm:text-[20px] md:text-[24px] mt-2 text-white/80">
            Real impact. Real users. Real rewards.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 text-[#f3e4c7]">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#facc15] via-[#f59e0b] to-[#f43f5e] text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(243,228,199,0.6)]">
                $4m+
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/70">Annual card spending</p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#facc15] via-[#f59e0b] to-[#f43f5e] text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(243,228,199,0.6)]">
                100k+
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/70">Happy customers</p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#facc15] via-[#f59e0b] to-[#f43f5e] text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(243,228,199,0.6)]">
                $40m+
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/70">Earned in cash back</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}