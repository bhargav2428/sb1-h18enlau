import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { FeaturedProducts } from './components/home/FeaturedProducts';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen">
          <Navbar />
          <Hero />
          <FeaturedProducts />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;