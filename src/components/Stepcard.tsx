"use client";

import React, { useEffect, useRef } from "react";
import { helveticaNeue, playfairDisplay } from "./fonts/fonts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type StepCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  highlight?: boolean; // optional if not always provided
};

gsap.registerPlugin(ScrollTrigger);

const StepCard = ({ imageSrc, title, description, highlight = false }: StepCardProps) => {
  return (
    <div className="w-[33%] max-md:w-full max-md:max-w-sm max-md:mx-auto group">
      <div className="grow tracking-tight text-center text-stone-300 max-md:mt-10">
        <div
          className={`flex flex-col justify-center p-[2px] rounded-[12px] transition-all duration-300 ease-in-out group-hover:shadow-[0_0_12px_2px_rgba(255,255,255,0.15)] ${
            highlight
              ? "bg-[linear-gradient(198.25deg,_#121317_13.96%,_#0B0C0E_100%)]"
              : "bg-[rgba(12,12,12,0.3)]"
          }`}
        >
          <div className="flex flex-col justify-center h-full w-full bg-[#0c0c0c] rounded-[12px] px-6 py-10 max-md:px-2 transition-all duration-300">
            <img
              src={imageSrc}
              alt={title}
              className="object-contain mx-auto w-full md:w-[60%] aspect-[0.70] transform transition-transform duration-300 group-hover:-translate-y-2"
            />
            <div>
              <h3 className=" text-[26px] md:text-3xl font-semibold leading-none text-white">
                {title}
              </h3>
              <p className="mt-4 text-[17px] md:text-lg leading-6 text-stone-300">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const GettingStartedHeader = () => {
  return (
    <header className="flex flex-col items-center ">
      <h1
        className={`${playfairDisplay.className}  text-[24px] md:text-[65px] md:font-medium tracking-tight leading-none text-center text-white max-md:max-w-full `}
      >
        Getting Started with our App
      </h1>
      <p
        className={`${helveticaNeue.variable} font-helvetica text-[16px] mt-3 md:text-[27px] font-light tracking-tight leading-none text-center text-stone-300 md:mt-10 max-md:max-w-full`}
      >
        Simple steps to begin your journey towards a faster, smarter way to pay
        and earn.
      </p>
    </header>
  );
};

const StepsGrid = () => {
  const stepsRef = useRef<HTMLDivElement | null>(null);

  const steps = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/46dc11209a18e77f398b82e0f1da1625aa679fcb?placeholderIfAbsent=true",
      title: "Download the App",
      description:
        "Find FinSecure on the App Store. It's free and lightweight — install in seconds.",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cba7b1e45e531273f83ff0b03ca3eb6270bdbe58?placeholderIfAbsent=true",
      title: "Create Your Account",
      description:
        "Sign up with your phone number and verify your identity securely. No paperwork needed.",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a32b6bd5d1ff5a642bb3ef565faca2a7dcaaec66?placeholderIfAbsent=true",
      title: "Explore Your Dashboard",
      description:
        "Access recharges, bill payments, cashback offers, QR payments, and more — all in one clean interface.",
      highlight: true,
    },
  ];

  useEffect(() => {
    if (stepsRef.current) {
      gsap.fromTo(
        stepsRef.current,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={stepsRef}
      className="self-stretch md:mt-16  max-md:max-w-full"
    >
      <div className="flex gap-5 max-md:flex-col max-md:items-center">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            imageSrc={step.imageSrc}
            title={step.title}
            description={step.description}
            highlight={step.highlight}
          />
        ))}
      </div>
    </div>
  );
};

const GettingStartedSection = () => {
  const statsRef = useRef<HTMLDivElement | null>(null);

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
    <>
      <section className="flex overflow-hidden flex-col justify-center items-center px-20 mt-20 md:py-26 bg-black max-md:px-5 max-md:py-24">
        <div className="flex flex-col items-center md:ml-3.5 w-full max-w-[1487px] max-md:max-w-full">
          <GettingStartedHeader />
          <StepsGrid />
        </div>
      </section>

      {/* Full-Width Stats Section */}
<div ref={statsRef} className="relative z-10 text-white flex flex-col items-center justify-center p-8">

  {/* Background Image */}
  <div className="absolute inset-0 bg-center bg-cover bg-no-repeat"
       style={{ backgroundImage: "url('/white.png')" }}>
  </div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center text-center">
    <h2 className={`${playfairDisplay.className} text-[16px] md:text-[44px] md:font-semibold tracking-tight leading-tight`}>
      Onboard in less than 10 minutes today
    </h2>
    <p className="md:mt-6 text-[16px] md:text-xl text-white/80 mt-4">
      Join over 1,000+ Users already using FinSecure.
    </p>
    <button className="mt-8 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:opacity-90 transition duration-300">
      Download Now
    </button>
  </div>
</div>


    </>
  );
};

export default GettingStartedSection;
