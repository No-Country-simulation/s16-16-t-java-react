import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { PropProduct } from '../zustand/interfaces';
import useStore from '../zustand/store';

type ProductsProps = {
  countProducts: (productCount: number) => void;
  selectCategories: string[];
};

const ResultsProducts: React.FC<ProductsProps> = ({ selectCategories, countProducts }) => {
  const { addToCart, products } = useStore()

  const filteredProducts = products
    .filter(product => product.nombre !== 'Producto pepe 2' && product.nombre !== 'Mesa industrial')
    .filter(product => selectCategories.includes(product.categoria.nombre));

  countProducts(filteredProducts.length > 0 ? filteredProducts.length : products.length);

  return (
    <article className="mt-[17px] grid grid-cols-3 gap-5">
      {(filteredProducts.length > 0 ? filteredProducts : products).map(product => (
        <ProductCard
          key={product.id}
          image={product.imageUrl || ''}
          title={product.nombre}
          price={`$ ${product.precio}`}
          addToCart={() => addToCart(product)}
          id={product.id}
        />
      ))}
    </article>
  );
};

export default ResultsProducts;
