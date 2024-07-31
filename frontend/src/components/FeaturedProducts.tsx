import ProductCard from './ProductCard'
import { Link } from 'wouter'
import useStore from '../zustand/store'


const FeaturedProducts = () => {
  const { addToCart, products } = useStore()

  return (
    <section className='pb-16 px-[104px]'>
      <div className='w-[67rem] items-center flex justify-between pb-8'>
        <h2 className='text-2xl font-semibold leading-[1.8rem] text-left'>Productos Destacados</h2>
        <Link to={'/allProducts'} className='text-lg font-semibold leading-[1.35rem] text-primary-normal cursor-pointer hover:text-neutral-normal'>Ver todo</Link>
      </div>
      <div className='grid grid-cols-4 grid-rows-2 gap-6'>
        {products
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
