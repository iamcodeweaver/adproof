import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/NavBar";
import PricingFaq from "@/components/PricingFaq/PricingFaq";
import React from "react";
import AdBlock from "@/components/AdBlock/AdBlock";
import AndroidHero from "@/components/AndroidHero/AndroidHero";
import AndroidBody from "@/components/AndroidBody/AndroidBody";

const AdproofForAndroid = () => {
  return (
    <div className="h-screen text-[#05213A] bg-white">
      <NavBar />
      <AndroidHero />
      <AndroidBody />
      <PricingFaq />
      <AdBlock />
      <Footer />
    </div>
  );
};

export default AdproofForAndroid;
