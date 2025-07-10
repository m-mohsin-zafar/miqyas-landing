import { Product, WithContext } from 'schema-dts';

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
}

export default function ProductSchema({ name, description, image }: ProductSchemaProps) {
  const productSchema: WithContext<Product> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    brand: {
      '@type': 'Brand',
      name: 'MIQYAS'
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/ComingSoon',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(productSchema)
      }}
    />
  );
}
