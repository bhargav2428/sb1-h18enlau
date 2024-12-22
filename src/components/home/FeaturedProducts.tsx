import React from 'react';
import { ProductCard } from '../ui/ProductCard';
import type { Product } from '@/types';

const products: Product[] = [
  {
    id: '1',
    name: 'Diamond Eternity Ring',
    price: 4999,
    description: 'Handcrafted 18k gold ring with brilliant-cut diamonds',
    images: ['https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80'],
    category: 'Rings',
    materials: ['18k Gold', 'Diamond'],
    certification: 'GIA Certified',
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Pearl Pendant Necklace',
    price: 2499,
    description: 'South Sea pearl pendant with diamond accents',
    images: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80'],
    category: 'Necklaces',
    materials: ['18k Gold', 'Pearl', 'Diamond'],
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Sapphire Tennis Bracelet',
    price: 3799,
    description: 'Classic tennis bracelet with blue sapphires',
    images: ['https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80'],
    category: 'Bracelets',
    materials: ['Platinum', 'Sapphire'],
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'Emerald Drop Earrings',
    price: 5299,
    description: 'Colombian emerald and diamond drop earrings',
    images: ['https://images.unsplash.com/photo-1635767798638-3665c302e27c?auto=format&fit=crop&q=80'],
    category: 'Earrings',
    materials: ['18k Gold', 'Emerald', 'Diamond'],
    inStock: true,
    featured: true
  }
];

export function FeaturedProducts() {
  const handleAddToCart = (productId: string) => {
    console.log('Adding to cart:', productId);
  };

  const handleAddToWishlist = (productId: string) => {
    console.log('Adding to wishlist:', productId);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-12">Featured Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
            />
          ))}
        </div>
      </div>
    </section>
  );
}