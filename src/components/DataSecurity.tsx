import Image from "next/image";
import { playfairDisplay } from "./fonts/fonts";

export default function DataSecurity() {
  return (
    <section className="bg-black py-16 px-4 mt-28 flex flex-col items-center text-center w-full">
      {/* Security Icon */}
      <div className="mb-6">
        <Image 
          src="/Lock privacy.png" // Make sure this is in /public
          alt="Security Icon"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>

      {/* Top Title */}
      <h3
        className={` ${playfairDisplay.className} text-white  uppercase text-[35px] leading-[100%] tracking-[0.64px] max-w-full`}
    // Assuming Playfair is loaded via next/font or imported globally
      >
        YOUR DATA ISN’T OUR BUSINESS. KEEPING IT SAFE IS.
      </h3>

      {/* Main Text */}
      <p
        className="text-white  font-normal text-[55px] leading-[100%] tracking-[0.64px] max-w-5xl mt-20"
        style={{ fontFamily: "Helvetica Neue" }} // Make sure Helvetica Neue is loaded or fallback applied
      >
        Your personal data and transactions are fully encrypted and secured. There’s no room for error — because we’ve built FinSecure with zero compromises.
      </p>
    </section>
  );
}
