import { Article, WithContext } from 'schema-dts';

interface BlogSchemaProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  url: string;
}

export default function BlogPostSchema({ 
  title, 
  description, 
  image, 
  datePublished, 
  dateModified, 
  authorName, 
  url 
}: BlogSchemaProps) {
  const blogSchema: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'MIQYAS',
      logo: {
        '@type': 'ImageObject',
        url: 'https://miqyas-landing.vercel.app/brand.svg'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(blogSchema)
      }}
    />
  );
}
