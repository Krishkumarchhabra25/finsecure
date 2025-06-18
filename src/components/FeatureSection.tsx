"use client";
import { motion } from "framer-motion";
import { playfairDisplay } from "./fonts/fonts";
import { FaCreditCard, FaUsers } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const iconBackgroundStyle = {
  background: `
    linear-gradient(97.3deg, rgba(78, 81, 97, 0.5) 7.39%, rgba(78, 81, 97, 0) 40.62%),
    linear-gradient(274.19deg, rgba(78, 81, 97, 0.5) 0%, rgba(78, 81, 97, 0) 38.76%)
  `,
};

const cardBackgroundStyle = {
  background: "linear-gradient(198.25deg, #121317 13.96%, #0B0C0E 100%)",
};

const cardVariants = {
  initial: { scale: 1, x: 0, y: 0, opacity: 0 },
  hover: { scale: 1.05, x: 10, y: 10, opacity: 1 },
};
export default function FeaturesSection() {
const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
   cardRefs.current.forEach((card) => {
    if (card) {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  });
  }, []);

  return (
   <section className="relative min-h-screen flex flex-col items-center justify-center bg-black px-4 py-10 text-white overflow-hidden">
      <h1 className={`${playfairDisplay.className} text-[24px] md:text-[56px] font-semibold text-center leading-tight`}>
        Save More. Earn More.
      </h1>

      <p className="mt-6 text-center text-[16px] md:text-[20px] max-w-2xl text-white/70 leading-relaxed">
        With FinSecure, get 2% cashback on recharges, 1% on credit card payments, and earn from referral — it’s your money, made smarter.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        
        {/* --------- Card 1 --------- */}
        <motion.div
          whileHover="hover"
          initial="initial"
ref={(el) => { cardRefs.current[0] = el; }}
          className="relative group rounded-2xl md:p-8 flex flex-col items-start shadow-md border w-full h-[276.5009px] md:h-[390px] border-gray-700/50 backdrop-blur-md cursor-pointer overflow-hidden"
          style={cardBackgroundStyle}
        >
          <motion.div
            variants={cardVariants}
            className="absolute top-0 left-0 w-full h-full rounded-2xl border-2 border-white/20 shadow-[0_0_20px_#fff] z-0"
            style={cardBackgroundStyle}
          />
          <motion.div className="relative z-10 flex flex-col items-start left-4 top-4">
            <div className=" w-[100.1715px] h-[100.1715px] md:w-[146px] md:h-[146px] rounded-full flex items-center justify-center mb-4" style={iconBackgroundStyle}>
              <FaCreditCard className="text-white text-2xl md:text-4xl" />
            </div>
            <h2 className="md:text-[38px] text-[26.415px] font-semibold mb-2 text-left">Bill Payment Bonus</h2>
            <p className="md:text-[21px]  text-[14.7513] md:text-white/70 text-left w-full">
              1% Cashback on credit card bill payments. Earn while staying on top of your bills, instantly.
            </p>
          </motion.div>
        </motion.div>

        {/* --------- Card 2 --------- */}
        <motion.div
          whileHover="hover"
          initial="initial"
ref={(el) => { cardRefs.current[0] = el; }}
          className="relative group rounded-2xl md:p-8 flex flex-col items-start shadow-md border w-full h-[276.5009px] md:h-[390px] border-gray-700/50 backdrop-blur-md cursor-pointer overflow-hidden"
          style={cardBackgroundStyle}
        >
          <motion.div
            variants={cardVariants}
            className="absolute top-0 left-0 w-full h-full rounded-2xl border-2 border-white/20 shadow-[0_0_20px_#fff] z-0"
            style={cardBackgroundStyle}
          />
          <motion.div className="relative z-10 flex flex-col items-start left-4 top-4">
            <div className=" w-[100.1715px] h-[100.1715px] md:w-[146px] md:h-[146px] rounded-full flex items-center justify-center mb-4" style={iconBackgroundStyle}>
              <MdPhoneIphone className="text-white text-3xl" />
            </div>
            <h2 className="md:text-[38px] text-[26.415px] font-semibold mb-2 text-left">Recharge Rewards</h2>
            <p className="md:text-[21px]  text-[14.7513] md:text-white/70 text-left w-full">
              2% Cashback on all mobile and DTH recharges. Save every time you top up — no limits, no hassle.
            </p>
          </motion.div>
        </motion.div>

        {/* --------- Card 3 --------- */}
        <motion.div
          whileHover="hover"
          initial="initial"
ref={(el) => { cardRefs.current[0] = el; }}
          className="relative group rounded-2xl md:p-8 flex flex-col items-start shadow-md border w-full h-[276.5009px] md:h-[390px] border-gray-700/50 backdrop-blur-md cursor-pointer overflow-hidden"
          style={cardBackgroundStyle}
        >
          <motion.div
            variants={cardVariants}
            className="absolute top-0 left-0 w-full h-full rounded-2xl border-2 border-white/20 shadow-[0_0_20px_#fff] z-0"
            style={cardBackgroundStyle}
          />
          <motion.div className="relative z-10 flex flex-col items-start left-4 top-4">
            <div className=" w-[100.1715px] h-[100.1715px] md:w-[146px] md:h-[146px] rounded-full flex items-center justify-center mb-4" style={iconBackgroundStyle}>
              <FaUsers className="text-white text-3xl" />
            </div>
            <h2 className="md:text-[38px] text-[26.415px] font-semibold mb-2 text-left">Referral Earnings</h2>
            <p className="md:text-[21px]  text-[14.7513] md:text-white/70 text-left w-full">
              Refer friends and earn commission on every transaction they make.
            </p>
          </motion.div>
        </motion.div>

        {/* --------- Card 4 --------- */}
        <motion.div
          whileHover="hover"
          initial="initial"
          ref={(el) => { cardRefs.current[0] = el; }}

          className="relative group rounded-2xl md:p-8 flex flex-col items-start shadow-md border w-full h-[276.5009px] md:h-[390px] border-gray-700/50 backdrop-blur-md cursor-pointer overflow-hidden"
          style={cardBackgroundStyle}
        >
          <motion.div
            variants={cardVariants}
            className="absolute top-0 left-0 w-full h-full rounded-2xl border-2 border-white/20 shadow-[0_0_20px_#fff] z-0"
            style={cardBackgroundStyle}
          />
         <motion.div className="relative z-10 flex flex-col items-start left-4 top-4">
            <div className=" w-[100.1715px] h-[100.1715px] md:w-[146px] md:h-[146px] rounded-full flex items-center justify-center mb-4" style={iconBackgroundStyle}>
              <MdPhoneIphone className="text-white text-3xl" />
            </div>
            <h2 className="md:text-[38px] text-[26.415px] font-semibold mb-2 text-left">Coming Soon</h2>
            <p className="md:text-[21px]  text-[14.7513] md:text-white/70 text-left w-full">
              Stay tuned for exciting features launching soon on FinSecure.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
