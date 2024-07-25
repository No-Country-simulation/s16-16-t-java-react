import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import robotImg from '../assets/material-symbols_robot-2-outline.svg'
import messageImg from '../assets/material-symbols_mail-outline.svg'
import callImg from '../assets/material-symbols_call.svg'
import SearchInput from '../components/SearchInput';

const Help = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <section className='flex-grow bg-background flex justify-center w-full'>
        <div className='max-w-[67rem] w-full'>
          <h1 className='text-[2rem] font-bold leading-[2.4rem] text-start mt-[3.125rem] mb-8'>¿Necesitas ayuda?</h1>
          <div className='flex justify-center mb-16'>
            <div className='flex justify-center w-full max-w-[34.25rem]'>
              <SearchInput />
            </div>
          </div>
          <div className='flex flex-col items-center mb-7  px-[6.5rem]'>
            <div>
              <h2 className='text-start text-2xl font-semibold leading-[1.8rem] mb-6'>Preguntas frecuentes?</h2>
              <div className='flex items-start gap-6'>
                <div className='p-4 flex flex-col gap-2 bg-primary-dark-active rounded-lg w-[26.063rem]'>
                  <div className="collapse collapse-arrow bg-primary-dark-hover">
                    <input type="checkbox" />
                    <div className="collapse-title font-normal text-base text-start">Qué es la impresión 3D?</div>
                    <div className="collapse-content">
                      <p className='text-sm text-start leading-[1.05rem]'>También conocida como fabricación aditiva, es un proceso de fabricación en el cual un objeto tridimensional se crea capa por capa a partir de un modelo digital. Este proceso utiliza materiales como plásticos, resinas, metales y otros compuestos, dependiendo del tipo de impresora y del objeto que se desea crear.</p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow bg-primary-dark-hover">
                    <input type="checkbox" />
                    <div className="collapse-title font-normal text-base text-start">Qué tipo de archivo usar?</div>
                    <div className="collapse-content">
                      <ul className='list-disc list-inside'>
                        <li className='text-start'><span className='text-sm leading-[1.05rem]'><span className='font-semibold ml-[-8px]'> Imágenes:</span> jpg, gif, png</span></li>
                        <li className='text-start'><span className='font-normal text-sm text-start leading-[1.05rem]'><span className='font-semibold ml-[-8px]'>Documentos:</span> pdf</span></li>
                        <li className='text-start'><span className='font-normal text-sm text-start leading-[1.05rem]'><span className='font-semibold ml-[-8px]'>Archivos comprimidos:</span> zip, rar</span></li>
                        <li className='text-start'><span className='font-normal text-sm text-start leading-[1.05rem]'><span className='font-semibold ml-[-8px]'>Archivos CAD y 3D:</span> dwg, ipt, stp, step, stl, obj, 3mf</span></li>
                        <li className='text-start'><span className='font-normal text-sm text-start leading-[1.05rem]'><span className='font-semibold ml-[-8px]'>Archivos de diseño gráfico:</span> ai, psd</span></li>
                      </ul>
                      <p className='text-sm font-normal italic text-start w-full'>
                        El tamaño máximo de archivo permitido es 80 MB.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow bg-primary-dark-hover">
                    <input type="checkbox" />
                    <div className="collapse-title font-normal text-base text-start">Puedo usar archivos 3D descargados de internet?</div>
                    <div className="collapse-content">
                      <p className='text-sm text-start leading-[1.05rem]'>Sí, puedes usar archivos 3D descargados de Internet. Asegúrate de que cumplan con las licencias y derechos de uso <span className='text-sm font-normal italic'>(Algunos archivos pueden tener restricciones de uso comercial o requieren atribución al creador)</span> y descárgalos de sitios confiables para evitar malware.</p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow bg-primary-dark-hover">
                    <input type="checkbox" />
                    <div className="collapse-title font-normal text-base text-start">Cómo de precisa es la impresora ARM-10?</div>
                    <div className="collapse-content">
                      <p className='text-start text-sm leading-[1.05rem] mb-4'>La impresora <span className='font-semibold'>ARM-10 de Roland</span> es conocida por su alta precisión y resolución en la impresión 3D.</p>
                      <p className='text-sm text-start leading-[1.05rem]'><span className='font-bold'>Alta Resolución:</span> La ARM-10 utiliza tecnología de proyección digital para curar la resina, lo que permite alcanzar una resolución de capa fina y detalles precisos en las piezas impresas.</p>
                      <p className='text-sm text-start leading-[1.05rem]'><span className='font-bold'>Dimensiones Precisas:</span> Es capaz de imprimir detalles finos con precisión dimensional, lo que es ideal para aplicaciones donde la exactitud es crítica.</p>
                      <p className='text-sm text-start leading-[1.05rem]'><span className='font-bold'>Estabilidad de Impresión:</span> La impresora ofrece una alta estabilidad durante el proceso de impresión, minimizando errores y desviaciones.</p>
                      <p className='text-sm text-start leading-[1.05rem] mt-4 italic'>La <span className='font-semibold'>ARM-10</span> es adecuada para aplicaciones que requieren alta precisión, como joyería, diseño de productos y creación de prototipos detallados.</p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow bg-primary-dark-hover">
                    <input type="checkbox" />
                    <div className="collapse-title font-normal text-base text-start">Cómo construye las capas la impresora 3D?</div>
                    <div className="collapse-content">
                      <p className='text-sm text-start leading-[1.05rem] mb-4'>La impresora 3D construye las capas de la siguiente manera:</p>
                      <ul className='list-disc list-inside'>
                        <li className='text-start'><span className='text-sm leading-[1.05rem]'><span className='font-bold ml-[-8px]'>Modelo digital:</span> Utiliza un modelo digital 3D como guía.</span></li>
                        <li className='text-start'><span className='text-sm leading-[1.05rem]'><span className='font-bold ml-[-8px]'>División en capas:</span> El software de la impresora divide el modelo en capas horizontales delgadas.</span></li>
                        <li className='text-start'><span className='text-sm leading-[1.05rem]'><span className='font-bold ml-[-8px]'>Material:</span> El material (como resina, plástico o metal) es depositado o curado capa por capa.</span></li>
                        <li className='text-start'><span className='text-sm leading-[1.05rem]'><span className='font-bold ml-[-8px]'>Construcción de capas:</span> Cada capa se añade sobre la anterior, solidificándose hasta completar el objeto 3D.</span></li>
                      </ul>
                      <p className='text-sm text-start leading-[1.05rem] italic mt-4'>Este proceso se repite hasta que todas las capas forman el objeto completo.</p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow bg-primary-dark-hover">
                    <input type="checkbox" />
                    <div className="collapse-title font-normal text-base text-start">Cuánto demora un pedido?</div>
                    <div className="collapse-content">
                      <p className='text-sm text-start leading-[1.05rem] mb-4'>En realidad depende de si es modelo es relativamente sencillo, o si tiene muchos detalles por reproducir. En muchos casos no supera las 2 horas. También depende de la complejidad de la geometría.</p>
                      <p className='text-sm text-start leading-[1.05rem]'>Si el modelo necesita variables de carácter técnico, es probable que pueda llevar más tiempo en realizar.</p>
                      <p className='text-sm text-start leading-[1.05rem] mt-4'>Independientemente de estos valores, tardamos de media 2-3 días en entregar el proyecto de modelado 3D.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='flex flex-col gap-2 max-w-[27.063rem]'>
                    <div className='flex py-4 px-8 gap-12 rounded-lg border border-neutral-light w-[433px]'><img src={robotImg} /><p className='text-lg font-normal leading-[1.35rem]'>Chatea con nosotros </p></div>
                    <div className='flex py-4 px-8 gap-12 rounded-lg border border-neutral-light w-[433px]'><img src={messageImg} /><p className='text-lg font-normal leading-[1.35rem]'>3dstore@store.com.pe</p></div>
                    <div className='flex py-4 px-8 gap-12 rounded-lg border border-neutral-light w-[433px]'><img src={callImg} /><p className='text-lg font-normal leading-[1.35rem]'>+54 968-523-65</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Help
