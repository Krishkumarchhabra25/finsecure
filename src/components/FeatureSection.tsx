"use client";
import { motion } from "framer-motion";
import { playfairDisplay } from "./fonts/fonts";
import { FaCreditCard, FaUsers } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

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
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black px-4 py-10 text-white overflow-hidden">
      <h1 className={`${playfairDisplay.className} text-[40px] md:text-[56px] font-semibold text-center leading-tight`}>
        Save More. Earn More.
      </h1>

      <p className="mt-6 text-center text-[16px] md:text-[20px] max-w-2xl text-white/70 leading-relaxed">
        With FinSecure, get 2% cashback on recharges, 1% on credit card payments, and earn from referral — it’s your money, made smarter.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        
        {/* --------- Card 1 --------- */}
        <motion.div
          whileHover="hover"
          initial="initial"
          className="relative group rounded-2xl p-8 flex flex-col items-start shadow-md border w-full h-[390px] border-gray-700/50 backdrop-blur-md cursor-pointer overflow-hidden"
          style={cardBackgroundStyle}
        >
          <motion.div
            variants={cardVariants}
            className="absolute top-0 left-0 w-full h-full rounded-2xl border-2 border-white/20 shadow-[0_0_20px_#fff] z-0"
            style={cardBackgroundStyle}
          />
          <motion.div
            variants={{ hover: { x: -10 }, initial: { x: 0 } }}
            className="relative z-10 flex flex-col items-start"
          >
            <div className="w-[146px] h-[146px] rounded-full flex items-center justify-center mb-4" style={iconBackgroundStyle}>
              <motion.div variants={{ hover: { x: -10 }, initial: { x: 0 } }}>
                <FaCreditCard className="text-white text-4xl" />
              </motion.div>
            </div>
            <h2 className="text-[38px] font-semibold mb-2 text-left">Bill Payment Bonus</h2>
            <p className="text-[21px] text-white/70 text-left w-full">
              1% Cashback on credit card bill payments. Earn while staying on top of your bills, instantly.
            </p>
          </motion.div>
        </motion.div>

        {/* --------- Card 2 --------- */}
        <motion.div
          whileHover="hover"
          initial="initial"
          className="relative group rounded-2xl p-8 flex flex-col items-start shadow-md border w-full h-[390px] border-gray-700/50 backdrop-blur-md cursor-pointer overflow-hidden"
          style={cardBackgroundStyle}
        >
          <motion.div
            variants={cardVariants}
            className="absolute top-0 left-0 w-full h-full rounded-2xl border-2 border-white/20 shadow-[0_0_20px_#fff] z-0"
            style={cardBackgroundStyle}
          />
          <motion.div className="relative z-10 flex flex-col items-start">
            <div className="w-[146px] h-[146px] rounded-full flex items-center justify-center mb-4" style={iconBackgroundStyle}>
              <motion.div variants={{ hover: { y: -10 }, initial: { y: 0 } }}>
                <MdPhoneIphone className="text-white text-3xl" />
              </motion.div>
            </div>
            <h2 className="text-[38px] font-semibold mb-2 text-left">Recharge Rewards</h2>
            <p className="text-[21px] text-white/70 text-left w-full">
              2% Cashback on all mobile and DTH recharges. Save every time you top up — no limits, no hassle.
            </p>
          </motion.div>
        </motion.div>

        {/* --------- Card 3 --------- */}
        <motion.div
          whileHover="hover"
          initial="initial"
          className="relative group rounded-2xl p-8 flex flex-col items-start shadow-md border w-full h-[390px] border-gray-700/50 backdrop-blur-md cursor-pointer overflow-hidden"
          style={cardBackgroundStyle}
        >
          <motion.div
            variants={cardVariants}
            className="absolute top-0 left-0 w-full h-full rounded-2xl border-2 border-white/20 shadow-[0_0_20px_#fff] z-0"
            style={cardBackgroundStyle}
          />
          <motion.div className="relative z-10 flex flex-col items-start">
            <div className="w-[146px] h-[146px] rounded-full flex items-center justify-center mb-4" style={iconBackgroundStyle}>
              <motion.div variants={{ hover: { rotate: 360 }, initial: { rotate: 0 } }}>
                <FaUsers className="text-white text-3xl" />
              </motion.div>
            </div>
            <h2 className="text-[38px] font-semibold mb-2 text-left">Referral Earnings</h2>
            <p className="text-[21px] text-white/70 text-left w-full">
              Refer friends and earn commission on every transaction they make.
            </p>
          </motion.div>
        </motion.div>

        {/* --------- Card 4 --------- */}
        <motion.div
          whileHover="hover"
          initial="initial"
          className="relative group rounded-2xl p-8 flex flex-col items-start shadow-md border w-full h-[390px] border-gray-700/50 backdrop-blur-md cursor-pointer overflow-hidden"
          style={cardBackgroundStyle}
        >
          <motion.div
            variants={cardVariants}
            className="absolute top-0 left-0 w-full h-full rounded-2xl border-2 border-white/20 shadow-[0_0_20px_#fff] z-0"
            style={cardBackgroundStyle}
          />
          <motion.div
            variants={{ hover: { scale: 1.1 }, initial: { scale: 1 } }}
            className="relative z-10 flex flex-col items-start"
          >
            <div className="w-[146px] h-[146px] rounded-full flex items-center justify-center mb-4" style={iconBackgroundStyle}>
              <MdPhoneIphone className="text-white text-3xl" />
            </div>
            <h2 className="text-[38px] font-semibold mb-2 text-left">Coming Soon</h2>
            <p className="text-[21px] text-white/70 text-left w-full">
              Stay tuned for exciting features launching soon on FinSecure.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
