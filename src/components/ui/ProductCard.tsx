import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from './Button';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
  onAddToWishlist: (productId: string) => void;
}

export function ProductCard({ product, onAddToCart, onAddToWishlist }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Quick actions */}
        <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onAddToWishlist(product.id)}
            className="p-2 rounded-full bg-white/90 hover:bg-white text-gray-900 hover:text-gold-600 transition-colors duration-300"
          >
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
            <p className="mt-1 text-sm text-gray-500">
              ${product.price.toLocaleString()}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onAddToCart(product.id)}
            className="opacity-0 group-hover:opacity-100"
          >
            <ShoppingBag className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}