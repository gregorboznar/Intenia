import createMiddleware from 'next-intl/middleware';
import { defineRouting } from 'next-intl/routing';

const routing = defineRouting({
  locales: ['sl', 'en', 'fr'],
  defaultLocale: 'sl',
  pathnames: {
    '/': '/',
    '/products': {
      sl: '/izdelki',
      en: '/products',
      fr: '/produits'
    },
    '/gallery': {
      sl: '/galerija',
      en: '/gallery',
      fr: '/galerie'
    },
    '/cookies': {
      sl: '/piskotki',
      en: '/cookies',
      fr: '/cookies'
    }
  }
});

export default createMiddleware(routing);

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
