import { useState } from 'react';
import JhonDoe from '../assets/jhonDoe.png';

function Especifications() {
  const [option, setOption] = useState<string>('');
  return (
    <>
      <nav className="flex gap-6 border-b w-full">
        {[
          ['Descripción',],
          ['Especificaciones',],
          ['Comentarios'],
        ].map(([option]) => (
          <p key={option} onClick={() => setOption(option)} className="h-[26px] text-neutral-normal-hover hover:text-primary-normal cursor-pointer hover:border-b-[3px] hover:border-neutral-normal text-lg font-semibold leading-snug">{option}</p>
        ))}
      </nav>
      <section>
        {option === 'Descripción'
          ? (
            <div className='mb-16'>
              <p>Figura en 3D - BB-8 de Star Wars</p>
              <p>Tambien conocido como “bebocho”  en latinoamerica es un androide que aparece en Tercera trilogía de Star Wars, iniciando en el Episodio VII - El despertar de la Fuerza junto a Poe Dameron. </p>
            </div>
          )
          : (option === 'Especificaciones'
            ? (
              <section className='flex gap-[29px]'>
                <div className='flex flex-col gap-6 w-[403px]'>
                  <h1 className="font-semibold border-b-2 border-primary-normal">Características Generales</h1>
                  <div>
                    {[
                      ['Material', 'Plástico'],
                      ['Color', 'Si'],
                    ].map(([option, clasification], i) => (
                      <div key={i} className="h-[30px] p-1 bg-[#707070]/60 border-b border-[#c8c8c8] justify-between items-center flex">
                        <p>{option}</p>
                        <p>{clasification}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='flex flex-col gap-6 w-[403px]'>
                  <h1 className="font-semibold border-b-2 border-primary-normal">Dimensiones</h1>
                  <div>
                    {[
                      ['Alto', '12cm'],
                      ['Largo', '8cm'],
                      ['Ancho', '8cm'],
                    ].map(([option, clasification], i) => (
                      <div key={i} className="h-[30px] p-1 bg-[#707070]/60 border-b border-[#c8c8c8] justify-between items-center flex">
                        <p>{option}</p>
                        <p>{clasification}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )
            : (option === 'Comentarios'
              ? (
                <section className="w-[403px] h-20 pl-2 pr-1 pt-2 pb-1 bg-neutral-dark-hover rounded-lg border border-neutral-normal-hover justify-start items-start gap-[13px] inline-flex">
                  <img src={JhonDoe} />
                  <div className='px-2'>
                    <p className=''>Miriam</p>
                    <p className='py-[10px]'>“Me encantó!!!”</p>
                  </div>
                </section>
              )
              : null
            ))}
      </section>
    </>
  )
}

export default Especifications