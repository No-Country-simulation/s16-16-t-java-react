import React, { FunctionComponent } from 'react';
import CartIcon from '../assets/icono-mi-carrito-navbar.svg'
import eyeIcon from '../assets/eyeIcon.svg'
type CardProps = {
  image: string,
  title: string,
  price: string
  }

const ProductCard: FunctionComponent<CardProps> = ({image, title, price}) => {
  return (
    <div className='bg-neutral-dark-active flex flex-col pl-4 pb-4 pr-4 items-start border-[1.2px] border-neutral-dark-hover rounded-lg w-fit'>
      <img src={image} className='h-[14.5rem] w-[13.625rem] border-b-[1.5px]'/>
      <div className='flex flex-col justify-center items-center gap-6 self-stretch py-4 px-2'>
        <h4 className='text-base font-semibold leading-[1.2rem] text-start w-full'>{title}</h4>
        <p className='text-xl font-normal leading-6 text-start w-full'>{price}</p>
      </div>
      <div className='flex items-center gap-4 h-[38px]'>
        <button className='flex w-[157px] py-2 px-1 rounded-[4px] justify-center items-center gap-2 bg-primary-normal hover:bg-primary-normal-hover text-neutral-light'>
          <img src={CartIcon}/>
          <p>Agregar</p>
          </button>
        <button className='flex flex-col justify-center items-center gap-10 rounded-[4px] border-2 border-primary-normal p-[5px] w-[45px] h-[38px] hover:border-primary-dark-active'><img src={eyeIcon}/></button>
      </div>
    </div>
  );
}

export default ProductCard;
