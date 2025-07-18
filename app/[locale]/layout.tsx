import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { defaultMetadata } from '@/lib/utils/metadata';
import { createOrganizationSchema } from '@/lib/utils/schema';
import Script from 'next/script';
import { i18n, Locale, getDirection } from '@/lib/i18n/config';
import { LanguageSwitcher } from "@/components/common";
import { ThemeSwitcher } from "@/components/common";
import Link from "next/link";

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

// Generate metadata with locale
export async function generateMetadata({ 
  params
}: { 
  params: Promise<{ locale: Locale }> 
}): Promise<Metadata> {
  // Await and get the locale from params
  const { locale } = await params;
  
  // Validate that the incoming locale is valid
  const validLocale = i18n.locales.includes(locale) ? locale : i18n.defaultLocale;
  
  return {
    ...defaultMetadata,
    // Add locale-specific metadata
    title: {
      template: `%s | MIQYAS - ${validLocale === 'ar' ? 'مقياس' : 'MIQYAS'}`,
      default: `MIQYAS - ${validLocale === 'ar' ? 'مقياس - حل المقاسات المدعوم بالذكاء الاصطناعي' : 'AI-Powered Sizing Solution'}`
    },
    alternates: {
      canonical: validLocale === i18n.defaultLocale ? '/' : `/${validLocale}`,
      languages: {
        'en': '/',
        'ar': '/ar'
      }
    }
  };
}

// Define valid locales for static generation
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  // Await the params to get the locale
  const { locale: rawLocale } = await params;
  
  // Validate that the incoming locale is valid
  let locale = rawLocale;
  if (!i18n.locales.includes(locale)) {
    // This shouldn't happen with static generation, but just in case
    locale = i18n.defaultLocale;
  }

  // Get direction based on locale
  const dir = getDirection(locale);

  // Generate JSON-LD for organization
  const organizationSchema = createOrganizationSchema();
  const jsonLd = {
    '@context': 'https://schema.org',
    ...organizationSchema
  };

  return (
    <div lang={locale} dir={dir} className="flex flex-col min-h-screen">
      {/* Add metadata for language alternates */}
      <Script id="language-alternates" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'url': `https://miqyas-landing.vercel.app${locale === i18n.defaultLocale ? '' : `/${locale}`}`,
          'alternateName': [
            { '@language': 'en', 'url': 'https://miqyas-landing.vercel.app' },
            { '@language': 'ar', 'url': 'https://miqyas-landing.vercel.app/ar' }
          ]
        })}
      </Script>
      
      {/* JSON-LD structured data */}
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className={`flex flex-col min-h-screen`}>
        <header className="p-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow-sm">
          <Link href={locale === i18n.defaultLocale ? '/' : `/${locale}`} className="flex items-center">
            <div className="bg-indigo-600 text-white font-bold text-xl rounded-lg w-8 h-8 flex items-center justify-center mr-2">M</div>
            <span className="font-extrabold text-xl tracking-tight text-gray-900 dark:text-white">MIQYAS</span>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeSwitcher locale={locale} />
            <LanguageSwitcher />
          </div>
        </header>
        <main className={`flex-grow ${dir === 'rtl' ? 'rtl-content' : ''}`}>
          {children}
        </main>
      </div>
    </div>
  );
}
