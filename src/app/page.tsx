import Announcement from "@/components/Announcement";
import DataSecurity from "@/components/DataSecurity";
import Faq from "@/components/Faq";
import FeaturesSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GettingStartedSection from "@/components/Stepcard";
import TrustedCompanies from "@/components/TrustedCompanies";

export default function Home() {
  return (
 <main>
      <Announcement />
      <Header />
  
      <Hero />
    
      <FeaturesSection />
      <DataSecurity />
      <TrustedCompanies />
      <GettingStartedSection />
      <Faq />
      <Footer />
    </main>
  );
}
