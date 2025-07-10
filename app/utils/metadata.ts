import type { Metadata, Viewport } from 'next';

// Default metadata for the website
export const defaultMetadata: Metadata = {
  title: {
    default: 'MIQYAS - AI Sizing That Gets It Right',
    template: '%s | MIQYAS'
  },
  description: 'AI-powered sizing solution to reduce returns and boost sales for fashion brands and online stores.',
  keywords: ['AI sizing', 'fashion technology', 'size recommendation', 'ecommerce', 'fit prediction', 'return reduction'],
  authors: [{ name: 'MIQYAS Team' }],
  creator: 'MIQYAS',
  publisher: 'MIQYAS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://miqyas-landing.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'MIQYAS - AI Sizing That Gets It Right',
    description: 'AI-powered sizing solution to reduce returns and boost sales for fashion brands and online stores.',
    url: 'https://miqyas-landing.vercel.app',
    siteName: 'MIQYAS',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // You'll need to create this image
        width: 1200,
        height: 630,
        alt: 'MIQYAS - AI Sizing Solution',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MIQYAS - AI Sizing That Gets It Right',
    description: 'AI-powered sizing solution to reduce returns and boost sales for fashion brands and online stores.',
    creator: '@MIQYAS',
    images: ['/twitter-image.jpg'], // You'll need to create this image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  manifest: '/manifest.json',
  verification: {
    // Add your verification codes if you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

// Helper function to generate viewport configuration
export function generateViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#4F46E5' },
      { media: '(prefers-color-scheme: dark)', color: '#1E1B4B' },
    ],
  };
}

// Type for page-specific metadata
export type PageMetadata = {
  title: string;
  description: string;
  canonicalPath?: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
  };
};

// Helper function to generate metadata for specific pages
export function generateMetadata(pageMetadata: PageMetadata): Metadata {
  const { title, description, canonicalPath, openGraph } = pageMetadata;
  
  return {
    title,
    description,
    alternates: canonicalPath ? {
      canonical: canonicalPath,
    } : undefined,
    openGraph: openGraph ? {
      ...defaultMetadata.openGraph,
      ...openGraph,
      title: openGraph.title || title,
      description: openGraph.description || description,
    } : {
      ...defaultMetadata.openGraph,
      title,
      description,
    },
  };
}
