import ProductCard from './ProductCard'
// import apiJSON from '../zustand/productos.json';
import { PropProduct } from '../zustand/interfaces';
import { useEffect, useState } from 'react';
import { transformProducts } from '../helpers/transformProducts';

type ProductsProps = {
  countProducts: (product: number) => void
  selectCategories: string[]
  orderProduct: string
}

const ResultsProducts: React.FC<ProductsProps> = ({ selectCategories, countProducts, orderProduct }) => {
  const [products, setProducts] = useState<PropProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://spring-postgres-ds9s.onrender.com/productos');
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
        const data: PropProduct[] = await response.json();

        // obtener los productos pero con la imagen transformada
        setProducts(transformProducts(data));
      } catch (e) {
        console.error('Error al obtener los productos:', e);
      }
    }
    fetchProducts();
  }, [])

  const filteredProducts = selectCategories.length > 0
    ? products.filter(product => selectCategories.includes(product.categoria.nombre))
    : products;

  // CONTEO DE LOS PRODUCTOS PARA ENVIARLOS AL COMPONENTE PADRE
  useEffect(() => {
    countProducts(filteredProducts.length);
  }, [filteredProducts, countProducts]);


  // Ordenar productos por precio
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (orderProduct === 'alto') {
      return a.precio - b.precio; // Orden ascendente
    } else if (orderProduct === 'bajo') {
      return b.precio - a.precio; // Orden descendente
    }
    return 0;
  });

  return (
    <article className="mt-[17px] grid grid-cols-3 gap-5">
      {sortedProducts.map(product => (
        <ProductCard
          key={product.id}
          image={product.imageUrl || ''}
          title={product.nombre}
          price={`$ ${product.precio}`}
        />
      ))}
    </article>
  )
}

export default ResultsProducts;
