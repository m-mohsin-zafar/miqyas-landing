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
import { Metadata } from "next";
import Script from "next/script";
import { generateMetadata } from "./utils/metadata";
import { createSaaSProductSchema, createFAQSchema } from "./utils/schema";
import { getFAQSectionContent } from "./utils/contentLoader";

// Add page-specific metadata
export const metadata: Metadata = generateMetadata({
  title: "MIQYAS | AI-Powered Size Recommendation That Gets It Right",
  description: "Cut returns by up to 40% with MIQYAS - AI-powered size recommendation technology for fashion brands and online stores.",
  openGraph: {
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "MIQYAS - AI sizing technology"
      }
    ]
  }
});

export default function Home() {
  // Get FAQ data for structured data
  const faqData = getFAQSectionContent();
  
  // Create Product and FAQ schema objects
  const productSchema = createSaaSProductSchema();
  const faqSchemaItems = createFAQSchema(faqData.faqs);
  
  // Generate JSON-LD for structured data
  const productJsonLd = {
    '@context': 'https://schema.org',
    ...productSchema
  };
  
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqSchemaItems
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      {/* Structured Data for SEO */}
      <Script
        id="product-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
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
