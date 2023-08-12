import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/NavBar";
import PricingFaq from "@/components/PricingFaq/PricingFaq";
import MacBody from "@/components/MacBody/MacBody";
import MacHero from "@/components/MacHero/MacHero";
import React from "react";
import AdBlock from "@/components/AdBlock/AdBlock";

const AdproofForMac = () => {
  return (
    <div className="h-screen text-[#05213A] bg-white">
      <NavBar />
      <MacHero />
      <MacBody />
      <PricingFaq />
      <AdBlock />
      <Footer />
    </div>
  );
};

export default AdproofForMac;
