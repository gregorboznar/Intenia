import GalleryClient from './GalleryClient';
import { getGalleryImages } from '@/lib/wordpress';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const descriptions: Record<string, string> = {
    sl: "Oglejte si našo galerijo projektov in dosežkov. Intenia Engineering predstavlja svoje uspešne inženirske projekte in rešitve.",
    en: "View our gallery of projects and achievements. Intenia Engineering showcases its successful engineering projects and solutions.",
    fr: "Découvrez notre galerie de projets et réalisations. Intenia Engineering présente ses projets et solutions d'ingénierie réussis.",
  };

  const titles: Record<string, string> = {
    sl: "Galerija",
    en: "Gallery",
    fr: "Galerie",
  };

  return {
    title: titles[locale] || titles.sl,
    description: descriptions[locale] || descriptions.sl,
    alternates: {
      canonical: '/gallery',
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

interface GalleryImage {
  ID: string;
  post_title: string;
  guid: string;
}

interface GalleryItem {
  id: number;
  image: GalleryImage[];
}

export default async function GalleryPage() {
  try {
    const wpGalleries: GalleryItem[] = await getGalleryImages();

    const allImages = wpGalleries.flatMap((gallery) =>
      (gallery.image || []).map((img) => ({
        ID: img.ID,
        url: img.guid || '',
        title: img.post_title || '',
      }))
    );

    return <GalleryClient images={allImages} />;
  } catch (error) {
    console.error('Error loading gallery:', error);
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Napaka pri nalaganju galerije</h1>
          <p className="text-white/70">Prosimo, poskusite znova pozneje.</p>
        </div>
      </div>
    );
  }
}
