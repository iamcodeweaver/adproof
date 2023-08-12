import FaqsHero from "@/components/FaqsHero/FaqsHero";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/NavBar";
import FaqsBody from "@/components/FaqsBody/FaqsBody";
import Subscribe from "@/components/Subscribe/Subscribe";
import React from "react";

const Faqs = () => {
  return (
    <div className="h-screen text-black bg-white">
      <NavBar />
      <FaqsHero />
      <FaqsBody />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Faqs;
