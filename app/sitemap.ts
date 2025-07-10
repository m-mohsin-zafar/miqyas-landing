import { MetadataRoute } from 'next';

/**
 * Dynamic sitemap generator for Next.js
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL should match your production domain
  const baseUrl = 'https://miqyas-landing.vercel.app';
  
  // Current timestamp for lastModified
  const currentDate = new Date().toISOString();
  
  // Define your site's routes and their SEO properties
  const routes = [
    {
      path: '/',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      path: '/about',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      path: '/contact',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      path: '/features',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      path: '/faq',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const, 
      priority: 0.7,
    },
    // Add more routes as your site grows
  ];
  
  // Convert to sitemap format
  return routes.map(route => ({
    url: `${baseUrl}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
