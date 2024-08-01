import IMG from '../assets/Ilustracion-404.svg'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'wouter'
const Error404 = () => {
  return (
    <>
    <Header/>
    <section className='flex flex-col items-center justify-center bg-background gap-4 pt-[3.75rem] pb-16'>
      <h2 className='text-[1.75rem] font-semibold leading-[2.1rem]'>¡Oops! La página que buscas no está disponible.</h2>
      <p className='text-xl font-normal leading-6'>Parece que nuestras impresoras 3D están tomándose un descanso.</p>
      <img src={IMG}/>
      <button className='py-[0.813rem] px-[1.125rem] bg-primary-normal rounded-lg text-base font-semibold'><Link to='/'>Volver al Inicio</Link></button>
    </section>
    <Footer/>
    </>
  );
}

export default Error404;
