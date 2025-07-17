import { NextRequest, NextResponse } from 'next/server';
import { i18n } from './app/i18n/config';

// Get the preferred locale, similar to the above or using a different method
function getLocale(request: NextRequest) {
  // Check if there is a cookie with a preferred locale
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && i18n.locales.includes(cookieLocale as any)) {
    return cookieLocale;
  }

  // Check for Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const locales = acceptLanguage.split(',').map(l => l.split(';')[0].trim());
    for (const locale of locales) {
      // Check if the browser preferred locale is supported
      if (i18n.locales.includes(locale as any)) {
        return locale;
      }
    }
  }

  // Default to the default locale
  return i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname already has a locale
  const pathnameHasLocale = i18n.locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Get the preferred locale
  const locale = getLocale(request);
  
  // If it's the default locale (en), don't redirect the root path
  // This allows the root URL to serve English content without /en in the URL
  if (locale === i18n.defaultLocale && pathname === '/') {
    return;
  }
  
  // For non-default locales or non-root paths, redirect to the localized URL
  const newUrl = new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url);
  
  // Copy all search params
  request.nextUrl.searchParams.forEach((value, key) => {
    newUrl.searchParams.set(key, value);
  });

  return NextResponse.redirect(newUrl);
}

export const config = {
  // Match all request paths except for the ones starting with:
  // - api (API routes)
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  // - manifest.json (PWA manifest)
  // - SVG files and other static assets
  matcher: ['/((?!api|_next/static|_next/image|favicon\.ico|manifest\.json|.*\.svg$|.*\.png$|.*\.jpg$|.*\.jpeg$|.*\.gif$|.*\.webp$|.*\.ico$).*)'],
};
