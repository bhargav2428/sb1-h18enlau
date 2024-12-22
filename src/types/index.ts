export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  materials: string[];
  stones?: string[];
  dimensions?: string;
  weight?: string;
  certification?: string;
  inStock: boolean;
  featured?: boolean;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  products: string[]; // Product IDs
}

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface UserPreferences {
  currency: string;
  language: string;
  recentlyViewed: string[]; // Product IDs
  wishlist: string[]; // Product IDs
}