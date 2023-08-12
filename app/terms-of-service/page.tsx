import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/NavBar";
import Subscribe from "@/components/Subscribe/Subscribe";
import TermsOfServiceBody from "@/components/TermsOfServiceBody/TermsOfServiceBody";
import TermsOfServiceHero from "@/components/TermsOfServiceHero/TermsOfServiceHero";

export default function TermsOfService() {
  return (
    <div className="h-screen text-black bg-white">
      <NavBar />
      <TermsOfServiceHero />
      <TermsOfServiceBody />
      <Subscribe />
      <Footer />
    </div>
  );
}
