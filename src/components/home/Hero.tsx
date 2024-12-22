import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80',
    title: 'Timeless Elegance',
    subtitle: 'Discover our exclusive collection of handcrafted jewelry'
  },
  {
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80',
    title: 'Modern Luxury',
    subtitle: 'Where tradition meets contemporary design'
  },
  {
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80',
    title: 'Artisan Crafted',
    subtitle: 'Each piece tells a unique story'
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-serif text-white tracking-wider">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto px-4">
                {slide.subtitle}
              </p>
              <div className="flex space-x-4 justify-center">
                <Button variant="secondary" size="lg">
                  Shop Now
                </Button>
                <Button variant="outline" size="lg">
                  Explore Collection
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}