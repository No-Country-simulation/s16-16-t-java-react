import React from 'react'
import Footer from '../components/Footer'

export default function Resumen() {


    const handleBack = () => {
        // Lógica para el botón Volver
        console.log('Volver');
      };
    
      const handleContinue = () => {
        // Lógica para el botón "Continuar"
        console.log('Continuar');
      };

  return (
    <div className='bg-gray-800'>
        <div className="w-[1280px] h-[973px] relative bg-gray-800">
    <div className="w-[159px] h-[138px] left-[104px] top-[64px] absolute bg-zinc-300" />



    <div className="left-[470px] top-[64px] absolute justify-start items-center gap-6 inline-flex">
    <div className="justify-start items-center gap-2 flex">
            <div className="text-white -500 text-xl font-semibold font-['Open Sans'] leading-normal">Envío</div>
            <img
              className="w-6 h-6 relative"
              alt="Iconamoon arrow up"
              src="/src/assets/img/chevron-right-roundedsb.png"
            />
          </div>
          <div className="justify-start items-center gap-2 flex">
            <div className="text-white text-xl font-semibold font-['Open Sans'] leading-normal">Método de Pago</div>
            <img
              className="w-6 h-6 relative"
              alt="Iconamoon arrow up"
              src="/src/assets/img/chevron-right-roundeds.png"
            />
          </div>
          <div className="justify-start items-center gap-2 flex">
            <div className="text-sky-500 text-xl font-semibold font-['Open Sans'] leading-normal">Resumen de Compra</div>
          </div>

    </div>




    
    <div className="w-[1279px] px-[470px] pt-6 left-[1px] top-[835px] absolute border-t border-sky-500 justify-center items-center gap-[200px] inline-flex">
    
    
    <button
            onClick={handleBack}
            className="hover:border-primary-dark-active w-[180px] h-[50px] px-[18px] py-[13px] rounded-lg border-2 border-sky-500 justify-center items-center gap-[37px] flex"
          >
            <div className="text-neutral-50 text-base font-semibold font-['Open Sans'] w-[176px]">VOLVER</div>
          </button>

          <div className='w-[176px]  h-[29px] inline-flex gap-1'>
            <span className="w-[176px]  h-[29px] text-white text-2xl font-semibold font-['Open Sans'] leading-[28.80px] ">TOTAL:</span>
            <span className="text-white text-2xl font-bold font-['Open Sans'] leading-[28.80px] "> $26.000</span>
          </div>

          <button
            onClick={handleContinue}
            className="w-44 h-[50px] px-[18px] py-[13px] bg-sky-500 rounded-lg justify-center items-center gap-2.5 flex hover:bg-cyan-600"
          >
            <div className="text-neutral-50 text-base font-semibold font-['Open Sans'] w-[176px] ">CONTINUAR</div>
          </button>

          
    </div>


    
    <div className="w-[314px] h-[529px] left-[287px] top-[242px] absolute">
      <div className="left-0 top-0 absolute text-white text-2xl font-semibold font-['Open Sans'] leading-[28.80px]">Envío</div>
      <div className="left-0 top-[389px] absolute text-white text-2xl font-semibold font-['Open Sans'] leading-[28.80px]">Método de pago</div>
      <div className="w-[314px] h-[66px] left-0 top-[45px] absolute flex-col justify-start items-start gap-2 inline-flex">
        <div className="w-[314px]"><span className="text-white text-lg font-bold font-['Open Sans'] leading-snug -ml-[22px] ">Envío estándar a domicilio - $6000<br/></span><span className="text-white text-lg font-normal font-['Open Sans'] leading-snug -ml-[145px] ">Miércoles 17 de Junio</span></div>
        <div className="self-stretch text-sky-500 text-xs font-normal font-['Open Sans'] underline leading-[14.40px] -ml-[176px] cursor-pointer">Cambiar método de envío</div>
      </div>
      <div className="h-[222px] py-2.5 left-0 top-[135px] absolute flex-col justify-start items-start gap-2 inline-flex">
        <div className="text-white text-base font-bold font-['Open Sans']">Pedro Pereira</div>
        <div className="text-white text-base font-normal font-['Open Sans']">Av. Entre Ríos 6743</div>
        <div className="text-white text-base font-normal font-['Open Sans']">CP: B1079</div>
        <div className="text-white text-base font-normal font-['Open Sans']">CABA</div>
        <div className="text-white text-base font-normal font-['Open Sans']">Buenos Aires</div>
        <div className="text-white text-base font-normal font-['Open Sans']">Argentina</div>
        <div className="w-[155px] h-[0px] border border-sky-500"></div>
        <div className="self-stretch text-sky-500 text-xs font-normal font-['Open Sans'] underline leading-[14.40px] -ml-[58px] cursor-pointer ">Cambiar dirección</div>
      </div>
      <div className="w-[245px] h-[87px] left-0 top-[442px] absolute justify-start items-start gap-4 inline-flex">
        <div className="w-[120px] h-[65px] p-3 bg-blue-50 rounded-lg border-2 border-neutral-400 flex-col justify-center items-center gap-4 inline-flex">
          {/* <div className="w-[71px] h-14 relative" /> */}
          <img
           
           alt="Iconamoon arrow up"
           src="/src/assets/img/ícono-mastercard2.png"
         /> 
        </div>
        <div className="w-[185px] h-[14px] text-sky-500 text-xs font-normal font-['Open Sans'] underline leading-[14.40px] mt-[75px] -ml-[158px] cursor-pointer">Cambiar método de pago</div>
        <div className="flex-col justify-center items-start gap-2 inline-flex">
          <div className="text-white text-base font-bold font-['Open Sans']  -ml-[48px] ">Pedro Pereira</div>
          <div className="text-white text-base font-normal font-['Open Sans'] -ml-[48px]">**** 4242</div>
        </div>
      </div>
    </div>

    <div className="left-[742px] top-[242px] absolute">
      <div className="left-0 top-0 absolute text-white text-2xl font-semibold font-['Open Sans'] leading-[28.80px]">Productos</div>
      <div className="w-[159px] h-[247px] left-0 top-[41px] absolute flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch text-white text-lg font-normal font-['Open Sans'] leading-snug -ml-[108px]">1 Item</div>
        <div >
          <img className="w-[159px] h-[209px]" src="/src/assets/img/card-checkout-resumen.png" />
          <div className="px-2 py-4  justify-center items-center gap-2.5 inline-flex">
            {/* <div className="w-[111px] text-white text-sm font-semibold font-['Open Sans'] leading-[16.80px]">Juguete Lagarto Articulado</div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  </div>
  )
}
