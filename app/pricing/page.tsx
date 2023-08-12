import PricingFaq from "@/components/PricingFaq/PricingFaq";
import Footer from "@/components/Footer/Footer";
import PricingHero from "@/components/PricingHero/PricingHero";
import NavBar from "@/components/Navbar/NavBar";
import Subscribe from "@/components/Subscribe/Subscribe";
import React from "react";
import Billing from "@/components/Billing/Billing";

const Pricing = () => {
  return (
    <div className="h-screen text-black bg-white">
      <NavBar />
      <PricingHero />
      <Billing />
      <PricingFaq />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Pricing;
