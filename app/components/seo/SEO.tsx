import { getFAQSectionContent } from "@/app/utils/contentLoader";
import { createFAQSchema, createOrganizationSchema, createSaaSProductSchema } from "@/app/utils/schema";
import JsonLd from "./JsonLd";

interface SEOProps {
  /**
   * The type of schema to generate
   */
  type: 'product' | 'organization' | 'faq' | 'all';
  
  /**
   * Additional props for the specific schema type
   */
  productProps?: {
    name?: string;
    description?: string;
    image?: string;
    price?: string;
    currency?: string;
  };
}

/**
 * Component for adding structured data to pages
 * Usage: <SEO type="product" />
 */
export default function SEO({ type, productProps }: SEOProps) {
  // For FAQ schema
  const faqData = type === 'faq' || type === 'all' 
    ? getFAQSectionContent()
    : null;

  // For Product schema
  const productSchema = type === 'product' || type === 'all'
    ? createSaaSProductSchema()
    : null;

  // For Organization schema  
  const organizationSchema = type === 'organization' || type === 'all'
    ? createOrganizationSchema()
    : null;

  // Create FAQ schema items if needed
  const faqSchemaItems = faqData
    ? createFAQSchema(faqData.faqs)
    : null;

  // Build all the necessary JSON-LD components
  return (
    <>
      {(type === 'organization' || type === 'all') && organizationSchema && (
        <JsonLd data={organizationSchema} id="organization-jsonld" />
      )}
      
      {(type === 'product' || type === 'all') && productSchema && (
        <JsonLd 
          data={{
            ...productSchema,
            ...(productProps?.name && { name: productProps.name }),
            ...(productProps?.description && { description: productProps.description }),
            ...(productProps?.image && { image: productProps.image }),
            ...(productProps?.price && productProps?.currency && { 
              offers: {
                "@type": "Offer",
                price: productProps.price,
                priceCurrency: productProps.currency,
                availability: 'https://schema.org/InStock'
              } 
            })
          }} 
          id="product-jsonld" 
        />
      )}
      
      {(type === 'faq' || type === 'all') && faqSchemaItems && (
        <JsonLd 
          data={{
            "@type": "FAQPage",
            mainEntity: faqSchemaItems
          }} 
          id="faq-jsonld" 
        />
      )}
    </>
  );
}
