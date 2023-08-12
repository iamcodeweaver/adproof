import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/NavBar";
import Subscribe from "@/components/Subscribe/Subscribe";
import SupportBody from "@/components/SupportBody/SupportBody";
import SupportHero from "@/components/SupportHero/SupportHero";
import React from "react";

const Support = () => {
  return (
    <div className="h-screen text-black bg-white">
      <NavBar />
      <SupportHero />
      <SupportBody />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Support;
