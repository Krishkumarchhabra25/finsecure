"use client";
import { useState } from "react";
import { playfairDisplay } from "./fonts/fonts";

const faqs = [
  {
    question: "What can I do with the FinSecure app?",
    answer:
      "FinSecure lets you recharge your mobile, pay utility bills, make UPI payments, and manage your transactions—all in one secure and easy-to-use app.",
  },
  { question: "Is FinSecure safe to use for payments?", answer: "Yes, FinSecure employs top-notch encryption and security protocols." },
  { question: "Do I need a bank account to use the app?", answer: "Yes, a valid bank account is required to perform transactions." },
  { question: "Are there any hidden charges?", answer: "No, there are no hidden charges associated with FinSecure." },
  { question: "Can I track my past payments?", answer: "Yes, the app allows you to view and track all your past transactions." },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-20 px-8 flex justify-center w-full">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-16">
        {/* Left side title */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className={`text-[58px] ${playfairDisplay.className} mx-auto font-playfair mb-4 leading-tight`}>
            Frequently<br />asked questions
          </h2>
          <p className="text-gray-400 mx-24 mb-auto text-[16px] mt-2">
            Don’t see the answer you’re looking for? <br />
            Get in touch.
          </p>
        </div>

        {/* Right side FAQ Accordion */}
        <div className="w-[640px] space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-lg"
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-400 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
