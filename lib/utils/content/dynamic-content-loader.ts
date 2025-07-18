/**
 * This utility demonstrates how you could fetch content from an API instead of using static JSON imports
 * It can be used to load dynamic content that might change without rebuilding the app
 */

import { 
  HeroSectionContent, 
  FAQSectionContent, 
  FeatureGridContent,
  HowItWorksContent
} from '@/lib/types/content';

// Cache for content to avoid repeated fetches
const contentCache: Record<string, any> = {};

/**
 * Generic function to fetch content from an API
 * @param contentType The type of content to fetch
 * @returns The fetched content
 */
async function fetchContent<T>(contentType: string): Promise<T> {
  // Check if content is already in cache
  if (contentCache[contentType]) {
    return contentCache[contentType] as T;
  }
  
  try {
    // You would replace this with your actual API endpoint
    const response = await fetch(`/api/content/${contentType}`, {
      // Include cache control headers if needed
      cache: 'no-store', // or 'force-cache' for static data
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch ${contentType} content`);
    }
    
    const data = await response.json();
    
    // Cache the content
    contentCache[contentType] = data;
    
    return data as T;
  } catch (error) {
    console.error(`Error fetching ${contentType} content:`, error);
    
    // Fallback to static imports in case of error
    // Map content type to kebab-case for new file structure
    const kebabContentType = contentType.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    const fallbackData = await import(`@/lib/data/sections/${kebabContentType}.json`);
    return fallbackData.default as T;
  }
}

/**
 * Fetch Hero Section content
 */
export async function fetchHeroSectionContent(): Promise<HeroSectionContent> {
  return fetchContent<HeroSectionContent>('heroSection');
}

/**
 * Fetch FAQ Section content
 */
export async function fetchFAQSectionContent(): Promise<FAQSectionContent> {
  return fetchContent<FAQSectionContent>('faqSection');
}

/**
 * Fetch Feature Grid content
 */
export async function fetchFeatureGridContent(): Promise<FeatureGridContent> {
  return fetchContent<FeatureGridContent>('featureGrid');
}

/**
 * Fetch How It Works content
 */
export async function fetchHowItWorksContent(): Promise<HowItWorksContent> {
  return fetchContent<HowItWorksContent>('howItWorks');
}
