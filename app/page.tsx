import { redirect } from 'next/navigation';
import { i18n } from './i18n/config';
import { Metadata } from "next";
import { generateMetadata } from "./utils/metadata";

// Add page-specific metadata
export const metadata: Metadata = generateMetadata({
  title: "MIQYAS | AI-Powered Size Recommendation That Gets It Right",
  description: "Cut returns by up to 40% with MIQYAS - AI-powered size recommendation technology for fashion brands and online stores.",
  openGraph: {
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "MIQYAS - AI sizing technology"
      }
    ]
  }
});

export default function Home() {
  // Redirect to the default locale
  redirect(`/${i18n.defaultLocale}`);
}
