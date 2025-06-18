"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const companiesRow1 = [
  { name: "NEA", logo: "/NEA.png" },
  { name: "Goodwater", logo: "/item.png" },
  { name: "Menlo Ventures", logo: "/item (1).png" },
  { name: "Stanford University", logo: "/item (2).png" },
];

const companiesRow2 = [
  { key: "Y Combinator", name: "Y Combinator", logo: "/item (3).png" },
  { key: "Soma Capital 1", name: "Soma Capital", logo: "/item (5).png" },
  { key: "Soma Capital 2", name: "Soma Capital", logo: "/item (6).png" },
];

export default function TrustedCompanies() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (element) {
      gsap.fromTo(
        element.querySelectorAll(".logo-item"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black  mt-10 md:py-12 md:mt-10 flex flex-col items-center w-full"
    >
      <h3 className="text-white p-4 text-[16px] md:text-[20px] md:mb-8 text-center">
        Trusted by top investors and financial partners worldwide
      </h3>

      {/* First Row: 4 logos */}
      <div className="grid md:grid-cols-2 grid-cols-4  md:gap-8 items-center md:mb-8 p-4">
        {companiesRow1.map((company) => (
          <div key={company.name} className="logo-item flex justify-center items-center">
           <Image
  src={company.logo}
  alt={company.name}
  width={100}
  height={50}
  className="object-contain grayscale hover:grayscale-0 transition duration-300 max-w-[80px] md:max-w-[120px]"
/>
          </div>
        ))}
      </div>

      {/* Second Row: 3 logos */}
      <div className="grid md:grid-cols-2 grid-cols-3 md:gap-8 items-center p-4">
        {companiesRow2.map((company) => (
          <div key={company.key} className="logo-item flex justify-center items-center">
           <Image
  src={company.logo}
  alt={company.name}
  width={100}
  height={50}
  className="object-contain grayscale hover:grayscale-0 transition duration-300 max-w-[100px] max-h-[50px]"
/>
          </div>
        ))}
      </div>
    </section>
  );
}
