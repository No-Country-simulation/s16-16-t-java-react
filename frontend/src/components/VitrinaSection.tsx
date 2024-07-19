import React from 'react';
import image1 from '../assets/Rectangle-417.png'
import image2 from '../assets/Rectangle-418.png'
import image3 from '../assets/Rectangle-419.png'

const VitrinaSection = () => {
  return (
    <section className='bg-primary-darker py-[1.688rem] px-[6.5rem]'>
      <h2 className='text-start pb-8 text-2xl font-semibold leading-[1.8rem]'>Nuestra Vitrina</h2>
      <div className='flex gap-6'>
      <div className='flex flex-col'>
        <img src={image1}/>
        <img/>
        <p className='pt-4 text-start font-semibold leading-[1.35rem]'>Accesorios de maquinarias</p>
      </div>
      <div>
        <img src={image2}/>
        <img/>
        <p className='pt-4 text-start font-semibold leading-[1.35rem]'>Prototipos para universidades</p>
      </div>
      <div>
        <img src={image3}/>
        <img/>
        <p className='pt-4 text-start font-semibold leading-[1.35rem]'>Prototipos ultra detallados</p>
      </div>
      </div>
    </section>
  )
}

export default VitrinaSection;
