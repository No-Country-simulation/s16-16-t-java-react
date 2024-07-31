import React from 'react';
import image1 from '../assets/Rectangle-417.png'
import image2 from '../assets/Rectangle-418.png'
import image3 from '../assets/Rectangle-419.png'
import frame from '../assets/Frame303.svg'

const VitrinaSection = () => {
  return (
    <section className='m-auto max-w-7xl py-[1.688rem] px-[6.5rem]'>
      <h2 className='text-start pb-8 text-2xl font-semibold leading-[1.8rem]'>Nuestra Vitrina</h2>
      <div className='flex gap-6'>
      <div>
        <div className='relative'>
        <img src={image1}/>
        <img/>
        <img className='w-9 absolute bottom-0 right-0' src={frame}/>
        </div>
        <p className='pt-4 text-start font-semibold leading-[1.35rem]'>Accesorios de maquinarias</p>
      </div>
      <div>
        <div className='relative'>
        <img src={image2}/>
        <img className='w-9 absolute bottom-0 right-0' src={frame}/>
        </div>
        <img/>
        <p className='pt-4 text-start font-semibold leading-[1.35rem]'>Prototipos para universidades</p>
      </div>
      <div>
        <div className='relative'>
        <img src={image3}/>
        <img className='w-9 absolute bottom-0 right-0' src={frame}/>
        </div>
        <img/>
        <p className='pt-4 text-start font-semibold leading-[1.35rem]'>Prototipos ultra detallados</p>
      </div>
      </div>
    </section>
  )
}

export default VitrinaSection;
