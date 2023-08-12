import NavBar from "@/components/Navbar/NavBar";
import Subscribe from "@/components/Subscribe/Subscribe";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Benefits from "@/components/Benefits/Benefits";
import Clutter from "@/components/Clutter/Clutter";
import Faq from "@/components/Faq/Faq";

export default function Home() {
  return (
    <div className="h-screen text-black bg-white">
      <NavBar />
      <Hero />
      <Benefits />
      <Clutter />
      <Faq />
      <Subscribe />
      <Footer />
    </div>
  );
}
