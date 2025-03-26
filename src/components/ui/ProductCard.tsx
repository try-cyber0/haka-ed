import React from 'react';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: 'sale' | 'new' | 'bestseller';
  rating?: number;
  reviewCount?: number;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  originalPrice,
  image,
  badge,
  rating,
  reviewCount,
  category,
}) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="group relative">
      {/* Product image with badge and favorite button */}
      <div className="relative rounded overflow-hidden aspect-square bg-gray-100">
        <a href={`/products/${id}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Badge (sale, new, bestseller) */}
        {badge && (
          <div className={`absolute top-2 left-2 text-xs font-medium px-2 py-1 rounded text-white ${
            badge === 'sale' ? 'bg-red-500' :
            badge === 'new' ? 'bg-green-500' :
            'bg-haka-primary'
          }`}>
            {badge === 'sale' ? (discount > 0 ? `${discount}%` : 'Sale') :
             badge === 'new' ? 'Neu' : 'Bestseller'}
          </div>
        )}

        {/* Quick view and add to cart buttons (on hover) */}
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-white bg-opacity-90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex space-x-2">
          <button
            className="flex-1 text-xs py-1 border border-haka-primary text-haka-primary hover:bg-haka-primary hover:text-white transition-colors rounded"
            aria-label="Quick view"
          >
            Ansehen
          </button>
          <button
            className="flex-1 text-xs py-1 bg-haka-primary text-white hover:bg-opacity-90 transition-colors rounded"
            aria-label="Add to cart"
          >
            In den Warenkorb
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="mt-3">
        <div className="text-xs text-gray-500 mb-1">{category}</div>
        <h3 className="text-sm font-medium">
          <a href={`/products/${id}`} className="hover:text-haka-primary">
            {title}
          </a>
        </h3>

        {/* Price */}
        <div className="mt-1 flex items-center">
          <span className="font-medium">
            {price.toFixed(2).replace('.', ',')} €
          </span>
          {originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              {originalPrice.toFixed(2).replace('.', ',')} €
            </span>
          )}
        </div>

        {/* Rating */}
        {rating && (
          <div className="mt-1 flex items-center">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            {reviewCount && (
              <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
