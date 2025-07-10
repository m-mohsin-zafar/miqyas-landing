import { Organization, WithContext } from 'schema-dts';

export default function OrganizationSchema() {
  const organizationSchema: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MIQYAS',
    url: 'https://miqyas-landing.vercel.app',
    logo: 'https://miqyas-landing.vercel.app/brand.svg',
    sameAs: [
      'https://twitter.com/miqyas',
      'https://www.linkedin.com/company/miqyas',
      'https://www.facebook.com/miqyastech',
      'https://www.instagram.com/miqyastech'
    ],
    description: 'AI-powered size recommendation technology for fashion e-commerce',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-MIQYAS',
      contactType: 'customer service',
      email: 'contact@miqyas.com',
      availableLanguage: ['English']
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema)
      }}
    />
  );
}
