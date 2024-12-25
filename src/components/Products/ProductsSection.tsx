import React from 'react';
import ProductCard from './ProductCard';
import { products } from './data';
import { ProductModalProvider } from './ProductModalProvider';

export default function ProductsSection() {
  return (
    <ProductModalProvider>
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-medium text-center mb-24 tracking-tight">Signature Dishes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </ProductModalProvider>
  );
}