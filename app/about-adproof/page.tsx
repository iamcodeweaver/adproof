import AboutBody from "@/components/AboutBody/AboutBody";
import AboutHero from "@/components/AboutHero/AboutHero";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/NavBar";
import Subscribe from "@/components/Subscribe/Subscribe";
import React from "react";

const AboutAdproof = () => {
  return (
    <div className="h-screen text-[#05213A] bg-white">
      <NavBar />
      <AboutHero />
      <AboutBody />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default AboutAdproof;
