'use client';

import Script from 'next/script';
import { ReactNode } from 'react';

interface JsonLdProps {
  /**
   * The schema.org structured data object to render
   */
  data: Record<string, any>;
  
  /**
   * An optional ID for the script element
   */
  id?: string;
}

/**
 * Component for rendering JSON-LD structured data in pages
 * This component can be used to add structured data to any page
 */
export default function JsonLd({ data, id }: JsonLdProps): ReactNode {
  // Add context if not present
  const jsonLd = {
    '@context': 'https://schema.org',
    ...data
  };
  
  // Generate a unique ID if not provided
  const scriptId = id || `jsonld-${Math.random().toString(36).substring(2, 9)}`;
  
  return (
    <Script
      id={scriptId}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
