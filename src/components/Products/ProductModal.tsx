import React from 'react';
import { X } from 'lucide-react';
import { Product } from './types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden relative animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="h-[300px] relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${product.image})` }}
          />
        </div>
        
        <div className="p-8">
          <h3 className="text-3xl font-medium mb-4">{product.name}</h3>
          <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">INGREDIENTS</h4>
              <p className="text-gray-800">{product.ingredients}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">PREPARATION</h4>
              <p className="text-gray-800">{product.preparation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}