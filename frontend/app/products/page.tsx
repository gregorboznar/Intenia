import ProductsClient from './ProductsClient';
import { getIndustrialProducts } from '@/lib/wordpress';

export default async function ProductsPage() {
  try {
    const wpProducts = await getIndustrialProducts();

    const products = wpProducts.map((product: any) => ({
      id: product.id,
      name: product.title?.rendered || product.title || '',
      description: product.acf?.short_description || product.excerpt?.rendered || product.content?.rendered?.substring(0, 150) || '',
      image: product.acf?.image?.url || product.uagb_featured_image_src?.full?.[0] || '/images/placeholder.jpg',
      category: product.acf?.category || 'Produkt',
    }));

    return <ProductsClient products={products} />;
  } catch (error) {
    console.error('Error loading products:', error);
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Napaka pri nalaganju produktov</h1>
          <p className="text-white/70">Prosimo, poskusite znova pozneje.</p>
        </div>
      </div>
    );
  }
}
