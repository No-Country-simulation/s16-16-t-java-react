import React from 'react';
import logo1 from '../assets/aesub_logo.png.png'
import logo2 from '../assets/artillery3dcn_logo.png.png'
import logo3 from '../assets/bond_technologies_logo.png.png'
import logo4 from '../assets/diamant_polymer_logo.png.png'
import logo5 from '../assets/dremel_logo.png.png'
import logo6 from '../assets/polymaker_logo.png.png'

const JobsSection = () => {
  return (
    <section className='py-16 px-[6.438rem] w-full'>
      <div className='flex items-center'>
      <hr className='border-neutral-light w-full'/>
      <h3 className='shrink-0 px-1'>Calidad Garantizada en cada Trabajo</h3>
      <hr className='border-neutral-light w-full'/>
      </div>
      <div className='flex gap-6'> 
        <img src={logo1}/>
        <img src={logo2}/>
        <img src={logo3}/>
        <img src={logo4}/>
        <img src={logo5}/>
        <img src={logo6}/>
      </div>
      <hr className='border-neutral-light w-full'/>
    </section>
  );
}

export default JobsSection;
