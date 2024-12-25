import React, { createContext, useContext, useState } from 'react';
import ProductModal from './ProductModal';
import { Product } from './types';

interface ProductModalContextType {
  openModal: (product: Product) => void;
  closeModal: () => void;
}

const ProductModalContext = createContext<ProductModalContextType | undefined>(undefined);

export function ProductModalProvider({ children }: { children: React.ReactNode }) {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => setActiveProduct(product);
  const closeModal = () => setActiveProduct(null);

  return (
    <ProductModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {activeProduct && (
        <ProductModal product={activeProduct} onClose={closeModal} />
      )}
    </ProductModalContext.Provider>
  );
}

export function useProductModal() {
  const context = useContext(ProductModalContext);
  if (!context) {
    throw new Error('useProductModal must be used within ProductModalProvider');
  }
  return context;
}