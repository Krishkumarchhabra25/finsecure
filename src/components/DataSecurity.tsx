"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { playfairDisplay } from "./fonts/fonts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DataSecurity() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (element) {
      gsap.fromTo(
        element,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%", // starts animation when section enters 80% of viewport
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black py-16 px-4 mt-28 flex flex-col items-center text-center w-full"
    >
      {/* Security Icon */}
      <div className="mb-6">
        <Image 
          src="/Lock privacy.png" // Ensure this image is in your /public folder
          alt="Security Icon"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>

      {/* Top Title */}
      <h3
        className={`${playfairDisplay.className} text-white uppercase text-[35px] leading-[100%] tracking-[0.64px] max-w-full`}
      >
        YOUR DATA ISN’T OUR BUSINESS. KEEPING IT SAFE IS.
      </h3>

      {/* Main Text */}
      <p
        className="text-white font-normal text-[55px] leading-[100%] tracking-[0.64px] max-w-5xl mt-20"
        style={{ fontFamily: "Helvetica Neue" }}
      >
        Your personal data and transactions are fully encrypted and secured. There’s no room for error — because we’ve built FinSecure with zero compromises.
      </p>
    </section>
  );
}
