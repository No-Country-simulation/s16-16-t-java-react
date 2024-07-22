import { Link } from "wouter"
import Footer from "../components/Footer"
import Header from "../components/Header"
import banner from '../assets/designGuide/banner-footer-buscador.png';
import InfoDesigGuide from "../components/InfoDesigGuide";

function DesignGuide() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow font-openSans">
        <article className="h-[154px] pt-20 w-full border-b-2 border-primary-normal">
          <section className="pl-[118px] max-w-7xl m-auto">
            <div className="text-left text-neutral-normal font-bold">
              <Link to={'/'}>Inicio / </Link>
              <Link to={'/designGuide'} className="text-primary-normal">Guía de diseño.</Link>
            </div>
            <p className="text-left text-neutral-normal text-[32px] font-bold leading-[38.40px]">Guía de diseño</p>
          </section>
        </article>
        <article>
          <section className="pl-[118px] max-w-7xl m-auto flex gap-14">
            <div className="relative"> {/* Asegúrate de que el contenedor padre tenga position relative */}
              <div className="sticky top-10 mt-[50px] flex flex-col gap-2 justify-start w-[250px] text-[15px] font-bold">
                {[
                  ['GROSOR DE PARED', 'Grosor de pared'],
                  ['CALIDAD Y ORIENTACIÓN', 'Calidad de la superficie y orientación de impresión'],
                  ['PUNTOS FRÁGILES', 'Puntos frágiles'],
                  ['PRECISIÓN DEL MODELO', 'Precisión del modelo'],
                  ['SOPORTES', 'Soportes'],
                  ['BASE', 'Base'],
                  ['GRABADOS Y RELIEVES', 'Partes móviles'],
                  ['EMSAMBLAJE', 'Ensamblaje'],
                  ['GRABADOS Y RELIEVES', 'Detalles grabados y en relieve'],
                  ['ROSCAS', 'Roscas'],
                ].map(([option, link]) => (
                  <a key={`${option}-${link}`} href={`#${link}`} className="text-left text-primary-normal hover:text-primary-light-hover cursor-pointer">{option}</a>
                ))}
              </div>
            </div>
            <InfoDesigGuide />
          </section>

        </article>
        <div className="relative max-w-7xl m-auto flex justify-center my-14">
          <img src={banner} alt="banner" title="banner" />
          <Link className="w-44 h-[50px] absolute right-36 top-14 px-[18px] py-[13px] bg-primary-normal rounded-lg" to={'/'}>Buscar ahora</Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default DesignGuide