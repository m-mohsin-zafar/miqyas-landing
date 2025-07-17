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
      // If we're at the root path or any path without a locale prefix,
      // we're using the default locale
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

    // For default locale (en), don't add locale to path
    if (newLocale === i18n.defaultLocale) {
      router.push(newPath);
      return;
    }
    
    // For non-default locales, add locale to path
    if (newPath === '/') {
      newPath = `/${newLocale}`;
    } else {
      newPath = `/${newLocale}${newPath}`;
    }

    router.push(newPath);
  };

  return (
    <div className="flex items-center rounded-full bg-gray-100 dark:bg-gray-800 p-1 shadow-sm">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 ${
          currentLocale === 'en' 
            ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm' 
            : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange('ar')}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 ${
          currentLocale === 'ar' 
            ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm' 
            : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
        }`}
        aria-label="Switch to Arabic"
      >
        عربي
      </button>
    </div>
  );
}
