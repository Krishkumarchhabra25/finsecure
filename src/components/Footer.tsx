import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/Union.png" alt="Finsecure Logo" width={24} height={40} />
          <h2 className="text-white font-semibold text-xl">Finsecure</h2>
        </div>

        {/* Sections: stacked on mobile, flex-row on md+ */}
        <div className="flex flex-col md:flex-row md:justify-between md:gap-16 gap-10">

          {/* Company */}
          <div>
            <h4 className="text-white mb-4 font-medium">Company</h4>
            <ul className="space-y-2 text-sm">
              {["FAQ", "Careers", "About", "Blog", "Security", "Help Center"].map((item) => (
                <li key={item} className="cursor-pointer hover:text-white">{item}</li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white mb-4 font-medium">Products</h4>
            <ul className="space-y-2 text-sm">
              {["Corporate Cards", "Business Banking", "Reporting", "Incorporation"].map((item) => (
                <li key={item} className="cursor-pointer hover:text-white">{item}</li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white mb-4 font-medium">Legal</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Terms of Service",
                "Privacy Policy",
                "Consent To Receive Electronic Disclosures",
                "Fast Payment Terms",
                "Rewards Terms",
                "Non-Rewards Merchants",
                "Piermont Consumer Cardholder Agreement",
                "Piermont Commercial Cardholder Agreement"
              ].map((item) => (
                <li key={item} className="cursor-pointer hover:text-white">{item}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-xs text-center text-gray-600 border-t border-gray-800">
          © Finsecure. All Rights RESERVED
        </div>

      </div>
    </footer>
  );
};

export default Footer;
