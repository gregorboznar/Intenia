import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
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
    // Add other existing routes here if needed
    // '/cookies' was mentioned in the plan but verify if it exists
    '/cookies': {
      sl: '/piskotki',
      en: '/cookies',
      fr: '/cookies' // or whatever the french word is, checking plan
    }
  }
});

export type Pathnames = typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
