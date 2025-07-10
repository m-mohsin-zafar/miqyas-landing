// Content Types for JSON-driven content

// Hero Section Types
export interface HeroSectionContent {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  badge: {
    text: string;
    icon: string;
  };
  headline: {
    main: string;
    highlight: string;
  };
  subheading: string;
  ctaButtons: {
    text: string;
    icon: string;
    href: string;
    primary: boolean;
  }[];
  compatibilityText: string;
  compatibilityIcons: {
    icon: string;
    title: string;
    color: string;
  }[];
}

// FAQ Section Types
export interface FAQItem {
  q: string;
  a: string;
  icon: string;
  iconColor: string;
  category: string;
}

export interface FAQCategory {
  id: string;
  name: string;
}

export interface FAQSectionContent {
  faqs: FAQItem[];
  categories: FAQCategory[];
}

// Feature Grid Types
export interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

export interface FeatureGridContent {
  features: FeatureItem[];
}

// How It Works Types
export interface HowItWorksStep {
  number: string;
  icon: string;
  title: string;
  description: string;
}

export interface HowItWorksContent {
  title: {
    badge: string;
    heading: string;
    highlight: string;
  };
  steps: HowItWorksStep[];
}
