import React from 'react';
import ProductCard from './ProductCard'
import product from '../assets/product.png'
const FeaturedProducts = () => {
  return (
    <section className='pb-16 px-[104px]'>
      <div className='w-full flex justify-between pb-8'>
        <h2 className='text-2xl font-semibold leading-[1.8rem] text-left '>Productos Destacados</h2> 
        <a className='text-lg font-semibold leading-[1.35rem] text-primary-normal cursor-pointer hover:text-neutral-normal'>Ver todo</a>
      </div>
      <div className='grid grid-cols-4 grid-rows-2 gap-6'>
      <ProductCard image={product} title='Figura BB-8 - Star Wars' price='$4.900'/>
      <ProductCard image={product} title='Figura BB-8 - Star Wars' price='$4.900'/>
      <ProductCard image={product} title='Figura BB-8 - Star Wars' price='$4.900'/>
      <ProductCard image={product} title='Figura BB-8 - Star Wars' price='$4.900'/>
      <ProductCard image={product} title='Figura BB-8 - Star Wars' price='$4.900'/>
      <ProductCard image={product} title='Figura BB-8 - Star Wars' price='$4.900'/>
      <ProductCard image={product} title='Figura BB-8 - Star Wars' price='$4.900'/>
      <ProductCard image={product} title='Figura BB-8 - Star Wars' price='$4.900'/>
      </div>
    </section>
  );
}

export default FeaturedProducts;
