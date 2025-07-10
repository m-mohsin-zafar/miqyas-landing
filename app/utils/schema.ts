// Types for commonly used Schema.org structures
export interface Organization {
  '@type': 'Organization';
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
  contactPoint?: ContactPoint[];
}

export interface ContactPoint {
  '@type': 'ContactPoint';
  telephone: string;
  contactType: string;
  email?: string;
  areaServed?: string;
  availableLanguage?: string[];
}

export interface FAQPageItem {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

export interface Product {
  '@type': 'Product';
  name: string;
  description: string;
  image?: string[];
  brand?: {
    '@type': 'Brand';
    name: string;
  };
  offers?: {
    '@type': 'Offer';
    price?: string;
    priceCurrency?: string;
    availability?: string;
    url?: string;
  };
}

export interface SoftwareApplication {
  '@type': 'SoftwareApplication';
  name: string;
  applicationCategory: string;
  operatingSystem: string;
  description: string;
  offers?: {
    '@type': 'Offer';
    price?: string;
    priceCurrency?: string;
  };
}

/**
 * Create JSON-LD schema.org markup for Organization
 */
export function createOrganizationSchema(): Organization {
  return {
    '@type': 'Organization',
    name: 'MIQYAS',
    url: 'https://miqyas-landing.vercel.app',
    logo: 'https://miqyas-landing.vercel.app/brand.svg',
    sameAs: [
      'https://twitter.com/MIQYAS',
      'https://www.linkedin.com/company/MIQYAS',
      'https://www.facebook.com/MIQYAS'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-555-123-4567',
        contactType: 'customer service',
        email: 'support@miqyas-landing.vercel.app',
        availableLanguage: ['English']
      }
    ]
  };
}

/**
 * Create JSON-LD schema.org markup for FAQPage
 */
export function createFAQSchema(faqs: { q: string; a: string }[]): FAQPageItem[] {
  return faqs.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a
    }
  }));
}

/**
 * Create JSON-LD schema.org markup for SaaS Product
 */
export function createSaaSProductSchema(): SoftwareApplication {
  return {
    '@type': 'SoftwareApplication',
    name: 'MIQYAS Sizing Platform',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'AI-powered sizing solution for fashion e-commerce that reduces returns and boosts sales.',
    offers: {
      '@type': 'Offer',
      price: '99.00',
      priceCurrency: 'USD'
    }
  };
}

/**
 * Generate full JSON-LD script content
 */
export function generateJsonLd(data: any): string {
  const jsonLdObject = {
    '@context': 'https://schema.org',
    ...data
  };
  
  return JSON.stringify(jsonLdObject);
}
