import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { PropProduct } from '../zustand/interfaces';
import { transformProducts } from '../helpers/transformProducts';
// import { useLocation } from 'wouter';
// import useStore from "../zustand/store";

const ResultImg = () => {

  // const [, setLocation] = useLocation();
  // USANDO EL STORE FLOBAL PARA ALMACENAR LA INFORMACION Y VIAJAR A OTRA RUTA
  // const { setState } = useStore();

  // const goToPageWithState = () => {
  //   setState('Soy un valor pasado');
  //   setLocation('/myAccount');
  // };

  // const goToPageWithState2 = () => {
  //   setState('Soy un valor pasado de ota funcion');
  //   setLocation('/myAccount');
  // };


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
        setProducts(transformProducts(data));

      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducts();
  },);

  return (
    <section className='pb-16 px-[104px]'>
      {/* <button onClick={goToPageWithState}>Ir a página</button><br/>
      <button onClick={goToPageWithState2}>Ir a página2</button> */}
      <div className='w-full flex justify-between pb-8'>
        <h2 className='text-2xl font-semibold leading-[1.8rem] text-left'>Productos Destacados</h2>
        <a className='text-lg font-semibold leading-[1.35rem] text-primary-normal cursor-pointer hover:text-neutral-normal'>Ver todo</a>
      </div>
      <div className='grid grid-cols-4 grid-rows-2 gap-6'>
        {products
          .filter(product => product.nombre !== 'Producto pepe 2' && product.nombre !== 'Mesa industrial')
          .slice(0, 7)
          .map(product => (
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
