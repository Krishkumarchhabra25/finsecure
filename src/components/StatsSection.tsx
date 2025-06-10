"use client";
import { useEffect, useRef } from "react";
import { playfairDisplay } from "./fonts/fonts";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const statsRef = useRef(null);

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

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24 px-4 overflow-hidden w-full ">
      
      {/* Gradient Overlay applied only here */}
      <div className="absolute inset-0  pointer-events-none z-0" />

      <div
        ref={statsRef}
        className="relative z-10 text-white opacity-0 translate-y-20"
      >
        <h2 className={`${playfairDisplay.className} text-white text-[44px] tracking-[-0.28px]`}>
          FinSecure by the Numbers
        </h2>
        <p className="text-[20px] md:text-[24px] mt-2 text-white/80">
          Real impact. Real users. Real rewards.
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-12 text-center text-[#f3e4c7]">
          <div>
            <h3 className="text-4xl font-bold drop-shadow-[0_0_20px_rgba(243,228,199,0.6)]">$4m+</h3>
            <p className="mt-2 text-sm text-white/70">Annual card spending</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold drop-shadow-[0_0_20px_rgba(243,228,199,0.6)]">100k+</h3>
            <p className="mt-2 text-sm text-white/70">Happy customers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold drop-shadow-[0_0_20px_rgba(243,228,199,0.6)]">$40m+</h3>
            <p className="mt-2 text-sm text-white/70">Earned in cash back</p>
          </div>
        </div>
      </div>
    </section>
  );
}
