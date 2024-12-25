import React from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import Services from './components/Services';
import ProductsSection from './components/Products/ProductsSection';
import Newsletter from './components/Newsletter';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Story />
      <ProductsSection />
      <Services />
      <Newsletter />
    </div>
  );
}