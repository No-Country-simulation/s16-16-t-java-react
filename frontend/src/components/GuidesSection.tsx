import { Link } from 'wouter';

const GuidesSection = () => {
  return (
    <section className='py-16 max-w-7xl'>
      <h2 className='text-2xl font-semibold leading-[1.8rem] text-start px-[6.5rem] pb-8'>Guías de Diseño 3D</h2>
      <div className='flex px-[12.188rem] gap-[12.875rem]'>
      <div className='flex flex-col gap-6'>
        <h3 className='text-start text-xl font-semibold leading-6'>Aprende Todo lo que Necesites</h3>
        <p className='text-lg font-normal leading-[1.35rem] text-left'>Explora nuestras detalladas guías para principiantes y expertos. Aprende las mejores prácticas, técnicas avanzadas y consejos útiles para mejorar tus habilidades de diseño 3D.</p>
        <Link to='/designGuide' className='cursor-pointer text-start text-lg font-normal leading-[1.35rem] underline text-primary-normal w-fit hover:text-neutral-normal'>Ver Guías</Link>
      </div>
      <div className='flex flex-col gap-6'>
        <h3 className='text-xl font-semibold leading-6 text-start'>Guías de Materiales</h3>
        <p className='text-lg font-normal leading-[1.35rem] text-start'>Descubre las características, ventajas y aplicaciones de los diferentes materiales utilizados en la impresión 3D. Nuestra tabla comparativa te ayudará a elegir el material perfecto para tus proyectos.</p>
        <Link to='/calculator' className='cursor-pointer w-fit text-start text-lg font-normal leading-[1.35rem] underline text-primary-normal hover:text-neutral-normal'>Explorar las tablas</Link>
      </div>
      </div>
    </section>
  )
}

export default GuidesSection;
