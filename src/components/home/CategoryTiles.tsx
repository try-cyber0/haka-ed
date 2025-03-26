import React from 'react';

interface CategoryTile {
  title: string;
  href: string;
  icon?: string;
}

const categories: CategoryTile[] = [
  { title: 'Küche', href: '/collections/kueche' },
  { title: 'Spülen', href: '/collections/spuelen' },
  { title: 'Bad & WC', href: '/collections/bad-wc' },
  { title: 'Fenster', href: '/collections/fenster' },
  { title: 'Boden & Wohnen', href: '/collections/boden-wohnen' },
  { title: 'Haus & Garten', href: '/collections/haus-garten' },
  { title: 'Neutralseife', href: '/collections/neutralseife' },
  { title: 'Putztücher', href: '/collections/putztuecher' },
  { title: 'Waschen', href: '/collections/waschen' },
];

const CategoryTiles: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.href}
            className="flex flex-col items-center justify-center p-4 bg-white hover:shadow-md transition-shadow rounded text-center"
          >
            <div className="w-16 h-16 mb-2 bg-gray-100 rounded-full flex items-center justify-center">
              {category.icon ? (
                <img src={category.icon} alt={category.title} className="w-10 h-10" />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-haka-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              )}
            </div>
            <span className="text-sm font-medium">{category.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoryTiles;
