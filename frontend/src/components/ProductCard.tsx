import { FunctionComponent } from 'react';
import CartIcon from '../assets/icono-mi-carrito-white.svg';
import eyeIcon from '../assets/eyeIcon.svg';
import { Link } from 'wouter';

type CardProps = {
  image: string,
  title: string,
  price: string | number,
  addToCart: () => void,
  id: number
};

const ProductCard: FunctionComponent<CardProps> = ({ image, title, price, addToCart, id }) => {
  return (
    <div className="font-openSans w-[250px] bg-neutral-500/60 flex flex-col px-4 pb-4 items-start border-[1.2px] border-neutral-dark-hover rounded-lg">
      <Link to={`/detailProduct/${id}`} className='w-full'>
        <div className='w-[218px] h-[232px] border-b-[1.5px] p-5'>
          <img src={image} className='w-full h-full object-cover' />
        </div>
      </Link>
      <div className='flex flex-col items-start gap-4 w-full py-3 px-1 h-28'>
        <h1 className='text-base font-semibold leading-tight text-start w-full'>{title}</h1>
        <p className='text-xl font-normal leading-normal text-start w-full'>{price}</p>
      </div>
      <div className='flex items-center gap-4'>
        <button onClick={addToCart} className='flex w-[157px] py-2 px-1 rounded-[4px] justify-center items-center gap-2 bg-primary-normal hover:bg-primary-normal-hover text-neutral-light'>
          <img src={CartIcon} />
          <p>Agregar</p>
        </button>
        <button className='flex flex-col justify-center items-center gap-10 rounded-[4px] border-2 border-primary-normal p-[5px] w-[45px] h-[38px] hover:border-primary-dark-active'><img src={eyeIcon} /></button>
      </div>
    </div>
  );
};

export default ProductCard;
