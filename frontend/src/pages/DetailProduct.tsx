import Footer from '../components/Footer'
import Header from '../components/Header'
import iconoInfo from '../assets/icono-info.png';
import check from '../assets/icono-check.svg';
import truck from '../assets/Group-truck.svg';
import carrito from '../assets/icono-mi-carrito-white.svg';
import card from '../assets/Group-tarjeta.svg';
import { Link, useParams } from 'wouter';
import CarrouselCards from '../components/CarrouselCards';
import Especifications from '../components/Especifications';
import useStore from '../zustand/store';
import { useEffect, useState } from 'react';

function DetailProduct() {

const { addToCart, products } = useStore()
const [product, setProduct] = useState({})
const [relatedProducts, setRelatedProducts] = useState([])
const { id } = useParams()

useEffect(() => {
  if (products && products.length > 0) {
    const selectedProduct = products.find((p) => p.id === Number(id));
    if (selectedProduct) {
      setProduct(selectedProduct);
      
      const related = products.filter((p) => p.categoria.id === selectedProduct?.categoria.id && p.id !== Number(id));
      setRelatedProducts(related)
    } else {
      console.error("Producto no encontrado:", id);
    }
  }
}, [id, products])


  return (
    <div className="font-openSans flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className='mt-12 px-[110px] max-w-7xl m-auto text-start font-base font-bold flex gap-2 justify-start w-full'>
          <Link to={'/allProducts'}>Productos / </Link>
          <Link to={'/allProducts'}>{product.categoria ? `${product.categoria.nombre} / ` : 'Sin categoría / '}</Link>
          <span className="text-primary-normal">{product.nombre}</span>
        </div>
        <article className='mt-2 px-[110px] max-w-7xl m-auto text-start font-base font-bold flex gap-28 justify-start w-full'>
          <section className='flex flex-col'>
            <div className='w-[467px] h-[398px] p-10 rounded-lg border border-neutral-dark-hover'>
              <img className="h-full w-full object-cover" src={product.imageUrl} />
            </div>
            <div className='flex flex-wrap gap-2 mt-2'>
              {[
                [product],
                [product],
              ].map(([img], i) => (
                <div key={i} className='hover:bg-neutral-normal/10 cursor-pointer w-[99px] h-[84px] rounded-lg border border-neutral-dark-hover'>
                  <img className="w-full h-full object-cover" src={img} />
                </div>
              ))}
            </div>
          </section>
          <section className='flex flex-col gap-8'>
            <div className='flex flex-col gap-6'>
              <h1 className='text-2xl font-semibold leading-[28.80px]'>{product.nombre}</h1>
              <h2 className="text-[28px] font-semibold leading-[33.60px]">$ {product.precio}</h2>
            </div>
            <div className='flex gap-2 items-center text-base'>
              <img src={iconoInfo} />
              <p className="text-base font-normal">12 Cuotas sin Interés de $408,33</p>
            </div>
            <div className='flex flex-col gap-2 w-[275px] h-[120px] p-4 bg-[#707070]/60 rounded border border-[#969696]'>
              <p className='flex gap-2 items-center'><img src={check} /> <span className='text-lg font-normal leading-snug'>Stock Disponible</span></p>
              <p className='flex gap-2 items-center'><img src={truck} /> <span className='text-lg font-normal leading-snug'>Envíos a todo el País</span></p>
              <p className='cursor-pointer flex gap-2 items-center text-primary-normal hover:text-primary-dark-hover underline'><img src={card} /> <span className='text-lg font-normal leading-snug'>Ver Medios de Pago</span></p>
            </div>
            <button onClick={()=> addToCart(product)} className='w-[157px] h-[38px] px-1 py-2 bg-primary-normal hover:bg-primary-normal-hover rounded justify-center items-center gap-2 flex'>
              <img src={carrito} />
              <p className='text-lg font-semibold'>AGREGAR</p>
            </button>
          </section>
        </article>
        <div className='flex flex-col gap-6 px-[90px] mt-12 max-w-7xl m-auto text-start font-base justify-start w-full'>
          <Especifications name={product.nombre} description={product.descripcion} />
          <div className='mb-32'>
            <h1 className="text-xl font-semibold leading-normal">Podría Interesarte</h1>
            <section className=''>
              <CarrouselCards cards={relatedProducts} />
            </section>
          </div>
        </div>
      </main >
      <Footer />
    </div >
  )
}

export default DetailProduct