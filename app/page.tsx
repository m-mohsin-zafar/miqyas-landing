import HeroSection from "./sections/HeroSection";
import HowItWorks from "./sections/HowItWorks";
import ProductVisuals from "./sections/ProductVisuals";
import FeatureGrid from "./sections/FeatureGrid";
import AudienceSplit from "./sections/AudienceSplit";
import SocialProof from "./sections/SocialProof";
import FAQSection from "./sections/FAQSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import LaunchModal from "./components/LaunchModal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <LaunchModal />
      <HeroSection />
      <HowItWorks />
      <ProductVisuals />
      <FeatureGrid />
      <AudienceSplit />
      <SocialProof />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
