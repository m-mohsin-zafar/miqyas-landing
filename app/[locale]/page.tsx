import { getDictionary } from '@/lib/i18n/utils';
import { Locale } from '@/lib/i18n/config';
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
    </div>
  );
}
