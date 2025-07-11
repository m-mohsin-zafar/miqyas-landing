export interface Dictionary {
  navigation: {
    product: string;
    features: string;
    howItWorks: string;
    pricing: string;
    faq: string;
    contact: string;
  };
  metadata: {
    title: string;
    description: string;
  };
  launchModal: {
    badge: string;
    title: string;
    description: string;
    launchInfo: {
      timing: string;
      waitlistText: string;
    };
    benefits: {
      title: string;
      items: string[];
    };
    buttons: {
      explore: string;
      joinWaitlist: string;
    };
  };
  hero: {
    badge: string;
    headline: {
      main: string;
      highlight: string;
    };
    subheading: string;
    ctaButtons: {
      demo: string;
      action: string;
    };
    compatibility: string;
  };
  features: {
    title: string;
    badge?: string;
    highlight?: string;
    titleEnd?: string;
    description?: string;
    feature1: {
      title: string;
      description: string;
    };
    feature2: {
      title: string;
      description: string;
    };
    feature3: {
      title: string;
      description: string;
    };
    exploreAllFeatures?: string;
    allFeatures?: Array<{
      icon: string;
      title: string;
      desc: string;
      color: string;
    }>;
  };
  howItWorks: {
    title: {
      badge: string;
      heading: string;
      highlight: string;
    };
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
    summary: string;
  };
  audienceSplit: {
    title: {
      badge: string;
      heading: string;
      highlight: string;
    };
    description: string;
    tabs: {
      retailers: string;
      shoppers: string;
    };
    retailerHeading: string;
    shopperHeading: string;
    retailerBenefits: Array<{
      title: string;
      description: string;
    }>;
    shopperBenefits: Array<{
      title: string;
      description: string;
    }>;
    retailerCta: string;
    shopperCta: string;
  };
  faqSection: {
    badge: string;
    heading: string;
    subheading: string;
    searchPlaceholder: string;
    noResultsText: string;
    clearSearch: string;
    categories: Array<{
      id: string;
      name: string;
    }>;
    faqs: Array<{
      q: string;
      a: string;
      icon: string;
      iconColor: string;
      category: string;
    }>;
    stillHaveQuestions: {
      heading: string;
      description: string;
      contactSupport: string;
      scheduleDemo: string;
    };
    quickLinks: {
      developerResources: {
        title: string;
        link: string;
      };
      caseStudies: {
        title: string;
        link: string;
      };
      gettingStarted: {
        title: string;
        link: string;
      };
    };
  };
  socialProof: {
    badge: string;
    heading: string;
    subheading: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
    testimonials: {
      heading: string;
      subheading: string;
      items: Array<{
        quote: string;
        name: string;
        title: string;
        rating: number;
      }>;
    };
    partners: {
      heading: string;
    };
    press: {
      heading: string;
      featuredIn: string;
      publications: string[];
    };
    research: {
      heading: string;
      description: string;
      buttonText: string;
    };
    awards: {
      heading: string;
      description: string;
      buttonText: string;
    };
    cta: {

      heading: string;
      subheading: string;
      primaryButton: string;
      secondaryButton: string;
    };
  };
  productVisuals: {
    title: {
      badge: string;
      heading: string;
      highlight: string;
    };
    tabs: Array<{
      name: string;
      icon: string;
    }>;
    dashboard: {
      title: string;
      accuracyRate: string;
      accuracyValue: string;
      returnRate: string;
      returnValue: string;
      recentMeasurements: string;
    };
    integration: {
      installTitle: string;
      installCommand: string;
      integrationTitle: string;
      importCode: string;
      usageCode: string;
      paramsCode: string;
      paramsCode2: string;
      closingCode: string;
      resultCode: string;
      platforms: string;
      platformList: string[];
      responseTime: string;
      responseValue: string;
      responseSpeed: string;
    };
    analytics: {
      title: string;
      timeRange: string;
      export: string;
      sizeDistribution: string;
      productType: string;
      total: string;
      sizes: string[];
      returnReduction: string;
      returnValue: string;
      returnComparison: string;
      customerSatisfaction: string;
      satisfactionValue: string;
      satisfactionSource: string;
    };
    video: {
      title: string;
      description: string;
      duration: string;
      quality: string;
    };
    features: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  footer: {
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      button: string;
      success: string;
    };
    company: {
      about: string;
    };
    links: {
      product: string;
      features: string;
      howItWorks: string;
      pricing: string;
      faq: string;
      sizingGuide: string;
      resources: string;
      documentation: string;
      apiReference: string;
      caseStudies: string;
      blog: string;
      partners: string;
      company: string;
      aboutUs: string;
      careers: string;
      contact: string;
      pressKit: string;
      legal: string;
      privacyPolicy: string;
      termsOfService: string;
    };
    copyright: string;
    beta: string;
    launchingSoon: string;
  };
  theme: {
    light: string;
    dark: string;
  };
  contactSection: {
    badge: string;
    heading: string;
    subheading: string;
    formLabels: {
      name: string;
      email: string;
      company: string;
      phone: string;
      website: string;
      message: string;
      requestType: string;
      marketType: string;
    };
    formPlaceholders: {
      name: string;
      email: string;
      company: string;
      phone: string;
      website: string;
      message: string;
    };
    requestTypes: Array<string>;
    marketTypes: Array<{
      value: string;
      label: string;
    }>;
    submitButton: string;
    submittingText: string;
    privacyText: string;
    successMessage: {
      title: string;
      message: string;
    };
    errorMessage: string;
    contactInfo: {
      title: string;
      email: {
        label: string;
        value: string;
      };
      phone: {
        label: string;
        value: string;
      };
      address: {
        label: string;
        value: string;
      };
    };
    whatToExpect: {
      title: string;
      items: Array<string>;
      readyToStart: {
        title: string;
        message: string;
      };
    };
    benefits: {
      title: string;
      items: Array<string>;
    };
    faqNote: {
      title: string;
      description: string;
      buttonText: string;
      footerText: string;
    };
  };
}
