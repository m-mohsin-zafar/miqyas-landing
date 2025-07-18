import { 
  HeroSectionContent, 
  FAQSectionContent, 
  FeatureGridContent,
  HowItWorksContent
} from '@/lib/types/content';

// Import JSON files directly - Next.js supports this
import { heroSectionData, faqSectionData, featureGridData, howItWorksData } from '@/lib/data/sections';

/**
 * Load Hero Section content
 * @returns The Hero Section content
 */
export function getHeroSectionContent(): HeroSectionContent {
  return heroSectionData as HeroSectionContent;
}

/**
 * Load FAQ Section content
 * @returns The FAQ Section content
 */
export function getFAQSectionContent(): FAQSectionContent {
  return faqSectionData as FAQSectionContent;
}

/**
 * Load Feature Grid content
 * @returns The Feature Grid content
 */
export function getFeatureGridContent(): FeatureGridContent {
  return featureGridData as FeatureGridContent;
}

/**
 * Load How It Works content
 * @returns The How It Works content
 */
export function getHowItWorksContent(): HowItWorksContent {
  return howItWorksData as HowItWorksContent;
}
