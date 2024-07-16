import React from 'react';
import CategoryCard from '../components/CategoryCard';
import FeaturedProducts from '../components/FeaturedProducts';
import InfoSection from '../components/InfoSection';
import Ellipse1 from '../assets/Ellipse1.svg'
import Ellipse2 from '../assets/Ellipse2.svg'
import Ellipse3 from '../assets/Ellipse3.svg'
import CarouselImg from '../assets/Carrousel.png'
import GuidesSection from '../components/GuidesSection';
import VitrinaSection from '../components/VitrinaSection';
import JobsSection from '../components/JobsSection';
import Carousel from '../components/Carousel';

const Home = () => {
  const slides = [
    CarouselImg,
    CarouselImg,
    CarouselImg,
    CarouselImg
  ]
  return (
    <div className='bg-background w-full flex flex-col items-center'>
      <Carousel slides={slides}/>
      <section className='inline-flex items-center content-center gap-6 flex-wrap mt-16'>
      <CategoryCard image={Ellipse1} title='Productos 3D' text='Descubre una variedad de productos únicos y personalizados hechos con tecnología de impresión 3D'/>
      <CategoryCard image={Ellipse2} title='Insumos y Materiales' text='Ofrecemos una variedad de filamentos y resinas de la más alta calidad para asegurar resultados excepcionales en tus impresiones'/>
      <CategoryCard image={Ellipse3} title='Personalización a Medida' text='Lleva tus ideas más allá con nuestros servicios de personalización. Diseñamos y producimos piezas únicas según tus especificaciones'/>
      </section>
      <hr className='border-primary-dark-active w-[67rem] h-[1px] mb-8 mt-8'/>
      <FeaturedProducts/>
      <InfoSection/>
      <GuidesSection/>
      <VitrinaSection/>
      <JobsSection/>
    </div>
  );
}

export default Home;
