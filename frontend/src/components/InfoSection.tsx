import React from 'react';
import image1 from '../assets/Rectangle415.png'
import image2 from '../assets/Rectangle414.png'
import { Link } from 'wouter';
const InfoSection = () => {
  return (
    <section className='w-full m-auto max-w-7xl px-[6.5rem] flex flex-col gap-16 pt-[34px] pb-[33px]'>
    <div className='flex justify-between w-full'>
      <img src={image1}/>
      <div className='flex flex-col gap-6 items-center'>
        <div className='flex flex-col w-full gap-6'>
          <h3 className='text-xl leading-6 font-semibold text-end'>Trabajos a Medida para Todos</h3>
          <p className='text-lg leading-[1.35rem] font-normal w-[27.625rem] text-end'>Materializa tus ideas con nuestros servicios de impresión 3D personalizados. Ya sea para un regalo especial, un proyecto creativo o una solución práctica, estamos aquí para ayudarte a dar vida a tus visiones.</p>
        </div>
        <Link to='/calculator' className='border-2 border-primary-normal rounded-lg py-[0.813rem] px-[1.125rem] w-auto h-[50px] text-base font-semibold hover:border-primary-dark-active'>Quiero mi Diseño 3D</Link>
      </div>
    </div>
    <div className='flex justify-between w-full'>
      <div className='flex flex-col gap-6 justify-center items-center'>
        <div className='flex flex-col w-full gap-6'>
          <h3 className='text-xl leading-6 font-semibold text-start'>Trabajos a Medida para Todos</h3>
          <p className='text-lg leading-[1.35rem] font-normal w-[27.625rem] text-start'>Desde prototipos hasta producción en serie, ofrecemos servicios de impresión 3D adaptados a las necesidades de tu empresa. Colaboramos contigo para crear productos personalizados que optimicen tus operaciones y resaltan tu marca.</p>
        </div>
        <Link to='/calculator' className='border-2 border-primary-normal rounded-lg py-[0.813rem] px-[1.125rem] w-[180px] h-[50px] text-base font-semibold hover:border-primary-dark-active'>Conoce Más</Link>
      </div>
      <img src={image2}/>
    </div>
    </section>
  );
}

export default InfoSection;
