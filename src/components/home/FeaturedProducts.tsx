import React from 'react';
import ProductCard from '../ui/ProductCard';
import product1 from '../../assets/product-1.png';
import product2 from '../../assets/product-2.png';
import product3 from '../../assets/product-3.png';
import product4 from '../../assets/product-4.png';

// Mock data for featured products
const featuredProducts = [
  {
    id: 'silbertuch',
    title: 'Hygiene-Silbertuch 1 Stk.',
    price: 39.95,
    image: product1,
    badge: 'bestseller' as const,
    rating: 4.8,
    reviewCount: 228,
    category: 'Hygiene',
  },
  {
    id: 'colorwaschmittel-3kg',
    title: 'Colorwaschmittel 3kg, 77WL',
    price: 32.95,
    image: product2,
    badge: 'bestseller' as const,
    rating: 4.9,
    reviewCount: 777,
    category: 'Waschen',
  },
  {
    id: 'euterpflege-spezial-200ml',
    title: 'EUTERPFLEGE Care + Repair Creme 200ml',
    price: 9.95,
    image: product3,
    badge: 'bestseller' as const,
    rating: 4.9,
    reviewCount: 2824,
    category: 'Körper & Pflege',
  },
  {
    id: 'wenigeristmehr-reinigungs-box',
    title: 'Kennenlern-Box "Weniger ist Mehr"',
    price: 14.95,
    originalPrice: 18.80,
    image: product4,
    badge: 'sale' as const,
    rating: 4.7,
    reviewCount: 130,
    category: 'Reinigung',
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">UNSERE FAVORITEN</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              badge={product.badge}
              rating={product.rating}
              reviewCount={product.reviewCount}
              category={product.category}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/collections/bestseller"
            className="inline-block text-haka-primary hover:text-haka-primary-dark font-medium underline"
          >
            Mehr entdecken
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
