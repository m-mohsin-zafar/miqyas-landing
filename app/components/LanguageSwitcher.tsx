'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { i18n, Locale } from '../i18n/config';
import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState<Locale>('en');

  useEffect(() => {
    // Extract locale from pathname
    const pathSegments = pathname.split('/');
    const localeInPath = pathSegments[1];
    
    if (i18n.locales.includes(localeInPath as Locale)) {
      setCurrentLocale(localeInPath as Locale);
    } else {
      setCurrentLocale(i18n.defaultLocale);
    }
  }, [pathname]);

  const handleLanguageChange = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    // Get the path without the locale prefix
    let newPath = pathname;
    const pathSegments = pathname.split('/');
    
    if (i18n.locales.includes(pathSegments[1] as Locale)) {
      // Remove current locale from path
      pathSegments.splice(1, 1);
      newPath = pathSegments.join('/') || '/';
    }

    // Add new locale to path
    if (newPath === '/') {
      newPath = `/${newLocale}`;
    } else {
      newPath = `/${newLocale}${newPath}`;
    }

    router.push(newPath);
  };

  return (
    <div className="language-switcher">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`lang-btn ${currentLocale === 'en' ? 'active' : ''}`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="divider">|</span>
      <button
        onClick={() => handleLanguageChange('ar')}
        className={`lang-btn ${currentLocale === 'ar' ? 'active' : ''}`}
        aria-label="Switch to Arabic"
      >
        عربي
      </button>

      <style jsx>{`
        .language-switcher {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .lang-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.25rem 0.5rem;
          font-size: 0.875rem;
          transition: color 0.2s ease;
        }
        .lang-btn:hover {
          color: #666;
        }
        .lang-btn.active {
          font-weight: bold;
          color: #0070f3;
        }
        .divider {
          color: #ccc;
        }
      `}</style>
    </div>
  );
}
