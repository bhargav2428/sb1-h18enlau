import React, { createContext, useContext, useReducer } from 'react';
import type { CartItem, Product } from '@/types';

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(
        item => item.productId === action.payload.product.id
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.productId === action.payload.product.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
          total: state.total + action.payload.product.price * action.payload.quantity
        };
      }

      return {
        ...state,
        items: [...state.items, {
          productId: action.payload.product.id,
          quantity: action.payload.quantity,
          price: action.payload.product.price
        }],
        total: state.total + action.payload.product.price * action.payload.quantity
      };
    }

    case 'REMOVE_ITEM': {
      const item = state.items.find(item => item.productId === action.payload);
      if (!item) return state;

      return {
        ...state,
        items: state.items.filter(item => item.productId !== action.payload),
        total: state.total - (item.price * item.quantity)
      };
    }

    case 'UPDATE_QUANTITY': {
      const item = state.items.find(item => item.productId === action.payload.productId);
      if (!item) return state;

      const quantityDiff = action.payload.quantity - item.quantity;

      return {
        ...state,
        items: state.items.map(item =>
          item.productId === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
        total: state.total + (item.price * quantityDiff)
      };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0 };

    default:
      return state;
  }
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}