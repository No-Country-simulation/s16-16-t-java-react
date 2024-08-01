import React, { FunctionComponent } from 'react';
import { useState } from 'react'
import ButtonNext from '../assets/boton-carrousel-siguiente.svg'
import ButtonPrevoius from '../assets/boton-carrousel-anterior.svg'
type CarouselProp = {
  slides: Array<string>
}

const Carousel: FunctionComponent<CarouselProp> = ({ slides }) => {
  const [current, setCurrent] = useState(0)

  const prevoiusSlide = () => {
    current === 0 ? setCurrent(slides.length - 1) : setCurrent(current - 1)
    console.log(current)

  }
  const nextSlide = () => {
    current === slides.length - 1 ? setCurrent(0) : setCurrent(current + 1)
    console.log(current)
  }
  return (
    <section className='flex items-center justify-center'>
      <div className='overflow-hidden relative m-auto max-w-7xl'>
        <div className='flex transition erase-out duration-40'
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}>
          {slides.map((slide, index) => {
            return <img key={index} src={slide} />
          })}
        </div>
        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
          <button onClick={prevoiusSlide}>
            <img src={ButtonPrevoius} />
          </button>
          <button onClick={nextSlide}>
            <img src={ButtonNext} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Carousel
