import { Metadata } from "next";
import { generateMetadata } from "@/lib/utils/metadata";
import { getDictionary } from '@/lib/i18n/utils';
import { i18n, getDirection } from '@/lib/i18n/config';
import { HeroSection } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ProductVisuals } from "@/components/sections/product-visuals";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { AudienceSplit } from "@/components/sections/audience-split";
import { SocialProof } from "@/components/sections/social-proof";
import { FAQSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { ClientLaunchModal } from "@/components/common";
import Script from "next/script";
import { createSaaSProductSchema, createFAQSchema } from "@/lib/utils/schema";
import { getFAQSectionContent } from "@/lib/utils/content/content-loader";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/common";
import { LanguageSwitcher } from "@/components/common";

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
