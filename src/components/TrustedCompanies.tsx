import Image from "next/image";

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
  return (
    <section className="bg-black py-12 mt-10 flex flex-col items-center w-full">
      <h3 className="text-white text-[20px] mb-8 text-center">
        Trusted by top investors and financial partners worldwide
      </h3>

      {/* First Row: 4 logos */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center mb-8">
        {companiesRow1.map((company) => (
          <div key={company.name} className="flex justify-center items-center">
            <Image
              src={company.logo}
              alt={company.name}
              width={100}
              height={50}
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Second Row: 3 logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 items-center">
        {companiesRow2.map((company) => (
          <div key={company.key} className="flex justify-center items-center">
            <Image
              src={company.logo}
              alt={company.name}
              width={100}
              height={50}
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
