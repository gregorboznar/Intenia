import CookiesPage from "@/components/cookies-page"
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const descriptions: Record<string, string> = {
    sl: "Politika piškotkov Intenia Engineering. Spoznajte, kako uporabljamo piškotke in kako upravljate svoje nastavitve zasebnosti.",
    en: "Intenia Engineering Cookie Policy. Learn how we use cookies and how you can manage your privacy settings.",
    fr: "Politique de cookies d'Intenia Engineering. Découvrez comment nous utilisons les cookies et comment vous pouvez gérer vos paramètres de confidentialité.",
  };

  const titles: Record<string, string> = {
    sl: "Politika piškotkov",
    en: "Cookie Policy",
    fr: "Politique de cookies",
  };

  return {
    title: titles[locale] || titles.sl,
    description: descriptions[locale] || descriptions.sl,
    alternates: {
      canonical: '/cookies',
    },
    openGraph: {
      title: titles[locale] || titles.sl,
      description: descriptions[locale] || descriptions.sl,
    },
    twitter: {
      title: titles[locale] || titles.sl,
      description: descriptions[locale] || descriptions.sl,
    },
  };
}

export default function CookiesPageRoute() {
  return <CookiesPage />
}
