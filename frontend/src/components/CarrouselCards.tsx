import { useState } from 'react';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import ProductCard from './ProductCard';
import useStore from '../zustand/store';
import { PropProduct } from '../zustand/interfaces';

interface Card {
  cards: PropProduct[]
}

const CarrouselCards: React.FC<Card> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const visibleCount = 4;
  const totalCards = cards.length;
  const maxIndex = totalCards - visibleCount;
  const { addToCart } = useStore()
  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="relative max-w-7xl w-[100.5%] m-auto mt-8">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
        >
          {cards.map((card, i) => (
            <div key={i} className={`flex-none w-full sm:w-[280px]`}>
              <ProductCard
                id={card.id}
                addToCart={() => addToCart(card)}
                image={card.imageUrl || ''}
                title={card.nombre}
                price={`$${card.precio}`}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className={`grid place-items-center absolute top-1/2 left-1 text-xl transform -translate-y-1/2 bg-neutral-light/50 rounded-full ${currentIndex === 0 ? 'opacity-50 cursor-default' : ''}`}
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        <MdOutlineKeyboardArrowLeft className='w-[40px] h-[40px] font-thin p-1' />
      </button>
      <button
        className={`grid place-items-center absolute top-1/2 right-4 text-xl transform -translate-y-1/2 bg-neutral-light/50 rounded-full ${currentIndex === maxIndex ? 'opacity-50 cursor-default' : ''}`}
        onClick={handleNext}
        disabled={currentIndex === maxIndex}
      >
        <MdOutlineKeyboardArrowRight className='w-[40px] h-[40px] font-thin p-1' />
      </button>
    </div>
  );
};

export default CarrouselCards;
