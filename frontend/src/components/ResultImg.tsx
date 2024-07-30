import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { PropProduct } from '../zustand/interfaces';
import { base64ToImg } from '../helpers/Base64ToImg';

const ResultImg = () => {
  const [products, setProducts] = useState<PropProduct[]>([]);

  useEffect(() => {
    // Función para obtener los productos desde el servidor
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://spring-postgres-ds9s.onrender.com/productos');
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }

        const data: PropProduct[] = await response.json();
        const processedProducts = data.map(base64ToImg);
        setProducts(processedProducts);

        return () => {
          processedProducts.forEach(product => {
            if (product.imageUrl) {
              URL.revokeObjectURL(product.imageUrl);
            }
          });
        };
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className='pb-16 px-[104px]'>
      <div className='w-full flex justify-between pb-8'>
        <h2 className='text-2xl font-semibold leading-[1.8rem] text-left'>Productos Destacados</h2>
        <a className='text-lg font-semibold leading-[1.35rem] text-primary-normal cursor-pointer hover:text-neutral-normal'>Ver todo</a>
      </div>
      <div className='grid grid-cols-4 grid-rows-2 gap-6'>
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.imageUrl || ''}
            title={product.nombre}
            price={`$${product.precio}`}
          />
        ))}
      </div>
    </section>
  );
}

export default ResultImg;
