import React from 'react'
import Footer from '../components/Footer'

export default function Payment() {

  const handleBack = () => {
    // Lógica para el botón "Volver"
    console.log('Volver');
  };

  const handleContinue = () => {
    // Lógica para el botón "Continuar"
    console.log('Continuar');
  };

  return (
    <div className='bg-gray-800'>
    <div className="w-[1280px] h-[667px] relative bg-gray-800">
    <div className="w-[159px] h-[138px] left-[104px] top-[64px] absolute bg-zinc-300 " >
        <img
           className="w-[159px] h-[138px]   "
           alt="Iconamoon arrow up"
           src="/src/assets/img/logluz.png"
         /> 
        </div>


    <div className="left-[470px] top-[64px] absolute justify-start items-center gap-6 inline-flex">
    <div className="justify-start items-center gap-2 flex">
            <div className="text-white text-xl font-semibold font-['Open Sans'] leading-normal">Envío</div>
            <img
              className="w-6 h-6 relative"
              alt="Iconamoon arrow up"
              src="/src/assets/img/chevron-right-roundedsb.png"
            />
          </div>
          <div className="justify-start items-center gap-2 flex">
            <div className="text-sky-500 text-xl font-semibold font-['Open Sans'] leading-normal">Método de Pago</div>
            <img
              className="w-6 h-6 relative"
              alt="Iconamoon arrow up"
              src="/src/assets/img/chevron-right-roundeds.png"
            />
          </div>
          <div className="justify-start items-center gap-2 flex">
            <div className="text-white text-xl font-semibold font-['Open Sans'] leading-normal">Resumen de Compra</div>
          </div>
          
    </div>
  


    <div className="w-[1279px] px-[470px] pt-6 left-[1px] top-[529px] absolute border-t border-sky-500 justify-center items-center gap-52 inline-flex">
   
   
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






    
    <div className="left-[102px] top-[242px] absolute text-white text-2xl font-semibold font-['Open Sans'] leading-[28.80px]">Elige un método de pago</div>
    <div className="px-px py-3 left-[102px] top-[303px] absolute justify-center items-center gap-6 inline-flex">

    <div className="w-[159px] h-[138px] px-[10.86px] pt-8 pb-[17px] bg-blue-50 rounded-lg border-2 border-neutral-400 flex-col justify-end items-center gap-6 inline-flex">
  <div className="self-stretch h-[43px] justify-center items-center inline-flex">
  <img
              className="mt-7"
              alt="Iconamoon arrow up"
              src="/src/assets/img/ícono-visa.png"
            />
  </div>
  <div className="text-center text-cyan-950 text-lg font-bold font-['Open Sans'] leading-snug  ">VISA</div>
</div>

<div className="w-[159px] h-[138px] px-[7px] py-8 bg-blue-50 rounded-lg border-2 border-neutral-400 flex-col justify-start items-center gap-3 inline-flex">
  <div className="w-[71px] h-14 relative" >
  <img
              className=""
              alt="Iconamoon arrow up"
              src="/src/assets/img/ícono-mastercard.png"
            />
  </div>
  <div className="text-center text-cyan-950 text-lg font-bold font-['Open Sans'] leading-snug">Mastercard</div>
</div>


<div className="w-[159px] h-[138px] px-[7px] py-8 bg-blue-50 rounded-lg border-2 border-neutral-400 flex-col justify-start items-center gap-3 inline-flex">
  <div className="w-[94px] h-[55.23px] justify-center items-center inline-flex">
    <img className="w-[94px] h-[55.23px]" src="/src/assets/img/ícono-mcercadopago.png" />
  </div>
  <div className="text-center text-cyan-950 text-lg font-bold font-['Open Sans'] leading-snug">Mercado Pago</div>
</div>


      <div className="w-[159px] h-[138px] px-[7px] py-8 bg-blue-50 rounded-lg border-2 border-neutral-400 flex-col justify-start items-center gap-3 inline-flex">
        <div className="w-[47px] h-[55.44px] relative" />
        <img
              className="-mt-3"
              alt="Iconamoon arrow up"
              src="/src/assets/img/ícono-paypal.png"
            />

        <div className="text-center text-cyan-950 text-lg font-bold font-['Open Sans'] leading-snug">Pay-Pal</div>
      </div>



      <div className="w-[159px] h-[138px] px-[7px] py-8 bg-blue-50 rounded-lg border-2 border-neutral-400 flex-col justify-start items-center gap-3 inline-flex">
       
          <div className="w-[103px] h-11 relative">
          <img
              className=" "
              alt="Iconamoon arrow up"
              src="/src/assets/img/ícono-rapipago-pagofacil.png"
            />
        
        </div>
        <div className="text-center text-cyan-950 text-lg font-bold font-['Open Sans'] leading-snug mt-[11px]">Efectivo</div>
      </div>


      <div className="pl-2 pr-4 pt-[29px] pb-[17px] bg-blue-50 rounded-lg border-2 border-neutral-400 flex-col justify-end items-center gap-4 inline-flex">
        <div className="pl-12 pr-[46px] pt-[11px] pb-0.5 border justify-center items-center inline-flex">
          
            <div className="w-[32.80px] h-[24.80px] relative">
            <img
              className=" "
              alt="Iconamoon arrow up"
              src="/src/assets/img/giftcard.png"
            />
        
            </div>
         
        </div>
        <div className="text-center text-cyan-950 text-lg font-bold font-['Open Sans'] leading-snug mt-[10px]">Gift Card</div>
      </div>
    </div>
  </div>
  <Footer/>
  </div>
  )
}
