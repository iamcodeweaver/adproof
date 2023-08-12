import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/NavBar";
import PrivacyPolicyHero from "@/components/PrivacyPolicyHero/PrivacyPolicyHero";
import PrivacyPolicyBody from "@/components/PrivacyPolicyBody/PrivacyPolicyBody";
import Subscribe from "@/components/Subscribe/Subscribe";

export default function PrivacyPolicy() {
  return (
    <div className="h-screen text-[#05213A] bg-white">
      <NavBar />
      <PrivacyPolicyHero />
      <PrivacyPolicyBody />
      <Subscribe />
      <Footer />
    </div>
  );
}
