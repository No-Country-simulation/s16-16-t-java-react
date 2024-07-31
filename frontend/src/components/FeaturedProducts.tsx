import ProductCard from './ProductCard'
import { useEffect, useState } from 'react'
import { PropProduct } from '../zustand/interfaces'
import { transformProducts } from '../helpers/transformProducts'
import { Link } from 'wouter'
import useStore from '../zustand/store'


const FeaturedProducts = () => {
  const [products, setProducts] = useState<PropProduct[]>([]);
  const { addToCart } = useStore()

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



  return (
    <section className='pb-16 px-[104px]'>
      <div className='w-[67rem] items-center flex justify-between pb-8'>
        <h2 className='text-2xl font-semibold leading-[1.8rem] text-left'>Productos Destacados</h2>
        <Link to={'/allProducts'} className='text-lg font-semibold leading-[1.35rem] text-primary-normal cursor-pointer hover:text-neutral-normal'>Ver todo</Link>
      </div>
      <div className='grid grid-cols-4 grid-rows-2 gap-6'>
        {products
          .filter(product => product.nombre !== 'Producto pepe 2' && product.nombre !== 'Mesa industrial')
          .slice(0, 8)
          .map(product => (
            <ProductCard
              key={product.id}
              image={product.imageUrl || ''}
              title={product.nombre}
              price={`$${product.precio}`}
              addToCart={()=>addToCart(product)}
              id={product.id}
            />
          ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
