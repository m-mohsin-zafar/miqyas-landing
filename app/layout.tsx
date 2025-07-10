import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { defaultMetadata, generateViewport } from './utils/metadata';
import { createOrganizationSchema } from './utils/schema';
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Optimize font display
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Optimize font display
});

// SEO metadata - importing from our centralized metadata utility
export const metadata: Metadata = defaultMetadata;

// Viewport configuration - importing from our centralized metadata utility
export const viewport: Viewport = generateViewport();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate JSON-LD for organization
  const organizationSchema = createOrganizationSchema();
  const jsonLd = {
    '@context': 'https://schema.org',
    ...organizationSchema
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://miqyas-landing.vercel.app" />
        <link rel="alternate" hrefLang="en" href="https://miqyas-landing.vercel.app" />
        
        {/* JSON-LD structured data */}
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px]`}
      >
        {children}
      </body>
    </html>
  );
}
