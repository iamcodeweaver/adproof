import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/NavBar";
import PricingFaq from "@/components/PricingFaq/PricingFaq";
import React from "react";
import AdBlock from "@/components/AdBlock/AdBlock";
import IOSHero from "@/components/IOSHero/IOSHero";
import IOSBody from "@/components/IOSBody/IOSBody";

const AdproofForIOS = () => {
  return (
    <div className="h-screen text-[#05213A] bg-white">
      <NavBar />
      <IOSHero />
      <IOSBody />
      <PricingFaq />
      <AdBlock />
      <Footer />
    </div>
  );
};

export default AdproofForIOS;
