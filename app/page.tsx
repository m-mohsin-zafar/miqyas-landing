import { Metadata } from "next";
import { generateMetadata } from "./utils/metadata";
import { getDictionary } from './i18n/utils';
import { i18n, getDirection } from './i18n/config';
import HeroSection from "./sections/HeroSection";
import HowItWorks from "./sections/HowItWorks";
import ProductVisuals from "./sections/ProductVisuals";
import FeatureGrid from "./sections/FeatureGrid";
import AudienceSplit from "./sections/AudienceSplit";
import SocialProof from "./sections/SocialProof";
import FAQSection from "./sections/FAQSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import ClientLaunchModal from "./components/ClientLaunchModal";
import Script from "next/script";
import { createSaaSProductSchema, createFAQSchema } from "./utils/schema";
import { getFAQSectionContent } from "./utils/contentLoader";
import Link from "next/link";
import ThemeSwitcher from "./components/ThemeSwitcher";
import LanguageSwitcher from "./components/LanguageSwitcher";

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

export default async function Home() {
  // Use default locale (en) for the root path
  const locale = i18n.defaultLocale;
  // Get the dictionary for the default locale
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

  // Get direction based on locale
  const dir = getDirection(locale);

  return (
    <div lang={locale} dir={dir} className="flex flex-col min-h-screen">
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
      
      <div className={`flex flex-col min-h-screen`}>
        <header className="p-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow-sm">
          <Link href="/" className="flex items-center">
            <div className="bg-indigo-600 text-white font-bold text-xl rounded-lg w-8 h-8 flex items-center justify-center mr-2">M</div>
            <span className="font-extrabold text-xl tracking-tight text-gray-900 dark:text-white">MIQYAS</span>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeSwitcher locale={locale} />
            <LanguageSwitcher />
          </div>
        </header>
        <main className={`flex-grow ${dir === 'rtl' ? 'rtl-content' : ''} bg-white dark:bg-gray-950`}>
          <ClientLaunchModal dictionary={dict} />
          <HeroSection dictionary={dict} />
          <HowItWorks dictionary={dict} />
          <ProductVisuals dictionary={dict} />
          <FeatureGrid dictionary={dict} />
          <AudienceSplit dictionary={dict} />
          {/* <SocialProof dictionary={dict} /> */}
          <FAQSection dictionary={dict} />
          <ContactSection dictionary={dict} />
          <Footer dictionary={dict} />
        </main>
      </div>
    </div>
  );
}
