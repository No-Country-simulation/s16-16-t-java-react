import ProductCard from './ProductCard'
// import apiJSON from '../zustand/productos.json';
import { PropProduct } from '../zustand/interfaces';
import { useEffect, useState } from 'react';
import { transformProducts } from '../helpers/transformProducts';

type ProductsProps = {
  countProducts: (product: number) => void
  selectCategories: string[]
}

const ResultsProducts: React.FC<ProductsProps> = ({ selectCategories, countProducts  }) => {
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
  })

  const test = products;

  const filteredProducts = test
    .filter(product => product.nombre !== 'Producto pepe 2' && product.nombre !== 'Mesa industrial')
    .filter(product => selectCategories.includes(product.categoria.nombre));


  countProducts(filteredProducts.length > 0 ? filteredProducts.length : test.length);

  return (
    <article className="mt-[17px] grid grid-cols-3 gap-5">
      {(filteredProducts.length > 0 ? filteredProducts : test).map(product => (
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

export default ResultsProducts