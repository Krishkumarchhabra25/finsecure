import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* Logo and Brand aligned to the top */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <Image 
              src="/Union.png" 
              alt="Finsecure Logo" 
              width={24} 
              height={40} 
              className="object-contain" 
            />
            <h2 className="text-white font-semibold text-xl">Finsecure</h2>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
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
            <ul className="space-y-2 text-sm max-w-xs">
              {[
                "Terms of Service", "Privacy Policy", "Consent To Receive Electronic Disclosures",
                "Fast Payment Terms", "Rewards Terms", "Non-Rewards Merchants",
                "Piermont Consumer Cardholder Agreement", "Piermont Commercial Cardholder Agreement"
              ].map((item) => (
                <li key={item} className="cursor-pointer hover:text-white">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
        <p>© Finsecure. All Rights RESERVED</p>
        
        <div className="flex items-center gap-4">
          <Image src="/twitter.png" alt="X" width={20} height={20} />
          <Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} />
          <Image src="/apple.png" alt="App Store" width={80} height={30} />
        </div>
      </div>
    </footer>
  );
}
