import { Locale, i18n } from './config';
import type { Dictionary } from './types';

// Function to get dictionary based on locale
export async function getDictionary(locale: Locale): Promise<Dictionary> {
  try {
    return (await import(`./dictionaries/${locale}.json`)).default;
  } catch (error) {
    console.error(`Error loading dictionary for locale: ${locale}`, error);
    // Fallback to default locale if the requested locale dictionary fails to load
    return (await import(`./dictionaries/${i18n.defaultLocale}.json`)).default;
  }
}

// Function to determine if the current locale is RTL
export function isRTL(locale: Locale): boolean {
  return locale === 'ar';
}

// Function to get HTML dir attribute value based on locale
export function getDirection(locale: Locale): 'rtl' | 'ltr' {
  return isRTL(locale) ? 'rtl' : 'ltr';
}

// Function to get text alignment based on locale
export function getTextAlign(locale: Locale): 'right' | 'left' {
  return isRTL(locale) ? 'right' : 'left';
}

// Function to get flex direction based on locale (useful for layouts)
export function getFlexDirection(locale: Locale): 'row-reverse' | 'row' {
  return isRTL(locale) ? 'row-reverse' : 'row';
}
