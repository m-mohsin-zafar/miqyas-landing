export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'ar'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export function getDirection(locale: Locale) {
  return locale === 'ar' ? 'rtl' : 'ltr';
}
