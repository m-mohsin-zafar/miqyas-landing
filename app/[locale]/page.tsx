import { getDictionary } from '../i18n/utils';
import { Locale } from '../i18n/config';
import HeroSection from "../sections/HeroSection";
import HowItWorks from "../sections/HowItWorks";
import ProductVisuals from "../sections/ProductVisuals";
import FeatureGrid from "../sections/FeatureGrid";
import AudienceSplit from "../sections/AudienceSplit";
import SocialProof from "../sections/SocialProof";
import FAQSection from "../sections/FAQSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../sections/Footer";
import LaunchModal from "../components/LaunchModal";
import Script from "next/script";
import { createSaaSProductSchema, createFAQSchema } from "../utils/schema";
import { getFAQSectionContent } from "../utils/contentLoader";

export default async function Home({
  params
}: {
  params: Promise<{ locale: Locale }>
}) {
  // Await and get the locale from params
  const { locale } = await params;
  // Get the dictionary for the current locale
  const dict = await getDictionary(locale);
  
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
      
      <LaunchModal dictionary={dict} />
      <HeroSection dictionary={dict} />
      <HowItWorks dictionary={dict} />
      <ProductVisuals dictionary={dict} />
      <FeatureGrid dictionary={dict} />
      <AudienceSplit dictionary={dict} />
      <SocialProof dictionary={dict} />
      <FAQSection dictionary={dict} />
      <ContactSection dictionary={dict} />
      <Footer dictionary={dict} />
    </div>
  );
}
