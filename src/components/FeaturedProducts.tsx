import React from 'react';

const products = [
  {
    id: 1,
    name: 'Diamond Eternity Ring',
    price: '$4,999',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Pearl Pendant Necklace',
    price: '$2,499',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Sapphire Tennis Bracelet',
    price: '$3,799',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Emerald Drop Earrings',
    price: '$5,299',
    image: 'https://images.unsplash.com/photo-1635767798638-3665c302e27c?auto=format&fit=crop&q=80'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-12">Featured Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white px-4 py-2 rounded-full text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}