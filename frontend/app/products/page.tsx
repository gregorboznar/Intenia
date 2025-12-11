import ProductsClient from './ProductsClient';

export const revalidate = 3600; // Revalidate every hour

export default async function ProductsPage() {
  return <ProductsClient />;
}
