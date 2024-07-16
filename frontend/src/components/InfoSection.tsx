import React from 'react';
import image1 from '../assets/Rectangle415.png'
import image2 from '../assets/Rectangle414.png'
const InfoSection = () => {
  return (
    <section className='w-full px-[6.5rem] flex flex-col gap-16 bg-gradient-to-b from-background to-[#303030] pt-[34px] pb-[33px]'>
    <div className='flex justify-between w-full'>
      <img src={image1}/>
      <div className='flex flex-col gap-6 items-center'>
        <div className='flex flex-col w-full gap-6'>
          <h3 className='text-xl leading-6 font-semibold text-end'>Trabajos a Medida para Todos</h3>
          <p className='text-lg leading-[1.35rem] font-normal w-[27.625rem] text-end'>Materializa tus ideas con nuestros servicios de impresión 3D personalizados. Ya sea para un regalo especial, un proyecto creativo o una solución práctica, estamos aquí para ayudarte a dar vida a tus visiones.</p>
        </div>
        <button className='border-2 border-primary-normal rounded-lg py-[0.813rem] px-[1.125rem] w-auto h-[50px] text-base font-semibold hover:border-primary-dark-active'>Quiero mi Diseño 3D</button>
      </div>
    </div>
    <div className='flex justify-between w-full'>
      <div className='flex flex-col gap-6 justify-center items-center'>
        <div className='flex flex-col w-full gap-6'>
          <h3 className='text-xl leading-6 font-semibold text-start'>Trabajos a Medida para Todos</h3>
          <p className='text-lg leading-[1.35rem] font-normal w-[27.625rem] text-start'>Materializa tus ideas con nuestros servicios de impresión 3D personalizados. Ya sea para un regalo especial, un proyecto creativo o una solución práctica, estamos aquí para ayudarte a dar vida a tus visiones.</p>
        </div>
        <button className='border-2 border-primary-normal rounded-lg py-[0.813rem] px-[1.125rem] w-[180px] h-[50px] text-base font-semibold hover:border-primary-dark-active'>Conoce Más</button>
      </div>
      <img src={image2}/>
    </div>
    </section>
  );
}

export default InfoSection;
