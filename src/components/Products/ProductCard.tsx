import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Product } from './types';
import { useProductModal } from './ProductModalProvider';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { openModal } = useProductModal();

  return (
    <div 
      onClick={() => openModal(product)}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      <div className="overflow-hidden">
        <div 
          className="h-[300px] bg-cover bg-center transform transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${product.image})` }}
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-medium mb-4">{product.name}</h3>
        <p className="text-gray-600 leading-relaxed line-clamp-2 mb-6">{product.shortDescription}</p>
        <div className="flex items-center text-black/70 group-hover:text-black transition-colors">
          <span className="text-sm font-medium mr-1">Show more</span>
          <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}