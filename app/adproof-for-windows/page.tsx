import AdGuard from "@/components/AdGuard/AdGuard";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/NavBar";
import PricingFaq from "@/components/PricingFaq/PricingFaq";
import WindowsBody from "@/components/WindowsBody/WindowsBody";
import WindowsHero from "@/components/WindowsHero/WindowsHero";
import React from "react";

const AdproofForWindows = () => {
  return (
    <div className="h-screen text-[#05213A] bg-white">
      <NavBar />
      <WindowsHero />
      <WindowsBody />
      <PricingFaq />
      <AdGuard />
      <Footer />
    </div>
  );
};

export default AdproofForWindows;
