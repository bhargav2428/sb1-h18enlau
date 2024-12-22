import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { Button } from '../ui/Button';

const categories = [
  {
    name: 'Rings',
    subcategories: ['Engagement', 'Wedding', 'Statement', 'Vintage']
  },
  {
    name: 'Necklaces',
    subcategories: ['Pendants', 'Chokers', 'Chains', 'Pearls']
  },
  {
    name: 'Bracelets',
    subcategories: ['Tennis', 'Bangles', 'Cuffs', 'Charm']
  },
  {
    name: 'Earrings',
    subcategories: ['Studs', 'Hoops', 'Drops', 'Chandelier']
  },
  {
    name: 'Collections',
    subcategories: ['Summer', 'Bridal', 'Artisan', 'Limited Edition']
  }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 font-serif text-2xl tracking-wider">LUXE</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <div key={category.name} className="relative group">
                <button
                  className="text-gray-800 hover:text-gold-600 px-3 py-2 text-sm font-medium transition-colors"
                  onMouseEnter={() => setActiveCategory(category.name)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  {category.name}
                </button>
                
                {activeCategory === category.name && (
                  <div className="absolute left-0 w-48 py-2 bg-white shadow-xl rounded-md mt-2">
                    {category.subcategories.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gold-600"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" size="sm">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingBag className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {categories.map((category) => (
              <a
                key={category.name}
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gold-600"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}