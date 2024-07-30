import React, { useState } from 'react';
import DropdownAccordion from './DropdownAccordion';

export default function Calculadora() {
  const [fileName, setFileName] = useState<string>('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  return (
    <div className='flex-col justify-start items-start gap-16 inline-flex mt-16  '>
      <div className="w-[337px] h-[29px]  flex justify-start "><span className= "text-[#f9f9f9] text-base font-bold font-['Open Sans'] cursor-pointer">Inicio / </span><span className="cursor-pointer text-[#16afe0] text-base font-bold font-['Open Sans']">Guía de diseño.</span></div>
      <div className="text-neutral-50 text-[32px] font-bold font-['Open Sans'] leading-[38.40px] mb-[15px] -mt-16 ">Calculadora de impresión 3D</div>

      <div className="justify-start items-center gap-2 inline-flex -mt-12 -ml-3">
    <div className="w-10 h-10 relative  left-3" >
    <img
           
            alt="Iconamoon arrow up"
            src="/src/assets/img/icono-numero-1-modelado3D.svg"
          /> 
           </div>
    <div className="w-[253px] h-[29px] text-neutral-50 text-2xl font-semibold font-['Open Sans']">Sube tu modelo 3D</div>
  </div>

  
<div className='top-[490px] -mt-12 inline-flex'>
      <div className="w-[614px] h-[490px] bg-cyan-950 rounded-lg border-2 border-cyan-600 flex-col justify-center items-center gap-12 inline-flex mr-[490px] ">
        <div className="w-96 h-14 px-4 py-2.5 bg-cyan-600 rounded-lg justify-center items-center gap-3.5 inline-flex hover:shadow-md hover:shadow-cyan-700 transition-shadow duration-200">
          <input 
            type="file" 
            className="hidden" 
            id="file-upload" 
            onChange={handleFileUpload} 
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <img className="mx-auto" src="/src/assets/img/botón-subida-calculadora.svg" alt="Texto alternativo de la imagen" />
          </label>
          {fileName && <div className="text-white">{fileName}</div>}
        </div>
        <div className="self-stretch h-24 flex-col justify-start items-center gap-4 flex">
          <div className="self-stretch text-center text-stone-300 text-sm font-medium font-['Open Sans']">
            o si lo prefieres, puedes
          </div>
          <a 
            href="https://www.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center border-1 border-cyan-600 rounded-lg hover:shadow-md hover:shadow-cyan-700 transition-shadow duration-200"
          >
            <img 
              src="/src/assets/img/botón-encontrar-calculadora.png" 
              alt="Texto alternativo de la imagen" 
              className="h-14 object-contain"
            />
          </a>
        </div>
      </div>

      <div className='-mt-[52px] -ml-[466px] '>
      <div className="w-[433px] h-[546px] py-[5px] flex-col justify-center items-start gap-16 inline-flex">
  <div className="self-stretch h-[102px] flex-col justify-start items-start gap-4 flex">
 
    <div className="justify-start items-center gap-2 inline-flex ">
    <div className="w-10 h-10 relative  " >
    <img
           
            alt="Iconamoon arrow up"
            src="/src/assets/img/icono-numero-2-modelado3D.png"
          /> 
           </div>
    <div className="w-[253px] h-[29px] text-neutral-50 text-2xl font-semibold font-['Open Sans'] -ml-10">Material y color</div>
  </div>
    
    <div className="w-[433px] h-[46px] relative ">
      <DropdownAccordion/>
      {/* <div className="w-6 h-6 left-[393px] top-[11px] absolute" />  */}

    </div>
  </div>
  <div className="h-[153px] flex-col justify-center items-start gap-4 flex">
    <div className="self-stretch justify-start items-center gap-2 inline-flex ">
    <div className="w-10 h-10 relative  " >
    <img
           
            alt="Iconamoon arrow up"
            src="/src/assets/img/icono-numero-3-modelado3D.png"
          /> 
           </div>
      <div className="text-neutral-50 text-2xl font-semibold font-['Open Sans'] leading-[28.80px]">Relleno interior</div>
    </div>
    <div className="w-[433px] justify-between items-center inline-flex">
    <div className="w-[81px] flex-col justify-start items-center gap-1 inline-flex">
          <div className="h-[75px] px-[11px] py-5 bg-sky-200 rounded-lg border-1 border-cyan-600 justify-center items-center inline-flex">
            <div className="w-[59px] h-[35px] relative flex-col justify-start items-start flex" >
            <div className='w-[81px]  absolute rotate-0 -left-[11px] -bottom-5 rounded-lg border-2 border-cyan-600' >
    <img 
           
            alt="Iconamoon arrow up"
            src="/src/assets/img/Mesh 3 1.png"
          /> 
           </div>
            </div>
          </div>
          <div className="self-stretch text-center text-sky-200 text-[13px] font-medium font-['Open Sans']">20-30%</div>
        </div>
        <div className="w-[81px] flex-col justify-start items-center gap-1 inline-flex">
          <div className="h-[75px] px-[11px] py-5 bg-sky-200 rounded-lg border-1 border-cyan-600 justify-center items-center inline-flex">
            <div className="w-[59px] h-[35px] relative flex-col justify-start items-start flex" >
            <div className='w-[81px]  absolute rotate-0 -left-[11px] -bottom-5 rounded-lg border-2 border-cyan-600' >
    <img 
           
            alt="Iconamoon arrow up"
            src="/src/assets/img/Mesh 3 1.png"
          /> 
           </div>
            </div>
          </div>
          <div className="self-stretch text-center text-sky-200 text-[13px] font-medium font-['Open Sans']">50-60%</div>
        </div>
        <div className="w-[81px] flex-col justify-start items-center gap-1 inline-flex">
          <div className="h-[75px] px-[11px] py-5 bg-sky-200 rounded-lg border-1 border-cyan-600 justify-center items-center inline-flex">
            <div className="w-[59px] h-[35px] relative flex-col justify-start items-start flex" >
            <div className='w-[81px]  absolute rotate-0 -left-[11px] -bottom-5 rounded-lg border-2 border-cyan-600' >
    <img 
           
            alt="Iconamoon arrow up"
            src="/src/assets/img/Mesh 3 2.png"
          /> 
           </div>
            </div>
          </div>
          <div className="self-stretch text-center text-sky-200 text-[13px] font-medium font-['Open Sans']">90-100%</div>
        </div>
      </div>
   
  </div>
  <div className="self-stretch h-[153px] flex-col justify-start items-start gap-4 flex">
    <div className="self-stretch h-[153px] flex-col justify-start items-start gap-4 flex">
      <div className="justify-start items-center gap-1 inline-flex">
      <div className="w-10 h-10 relative  " >
    <img
           
            alt="Iconamoon arrow up"
            src="/src/assets/img/icono-numero-4-modelado3D.png"
          /> 
           </div>
        <div className="text-neutral-50 text-2xl font-semibold font-['Open Sans'] leading-[28.80px] ml-2">Acabado superficial</div>
      </div>
      <div className="w-[433px] justify-between items-center inline-flex">
        <div className="w-[81px] flex-col justify-start items-center gap-1 inline-flex">
          <div className="w-[81px] h-[75px]  grow shrink basis-0 px-2.5 py-5 bg-sky-200 rounded-lg border-2 border-cyan-600 justify-center items-center inline-flex">
            <div className="w-[61px] h-[35px] relative flex-col justify-start items-start flex" >
            <div  >
    <img
           
            alt="Iconamoon arrow up"
            src="/src/assets/img/Rugoso 1.png"
          /> 
           </div>
            </div>
          </div>
          <div className="self-stretch text-center text-sky-200 text-[13px] font-medium font-['Open Sans']">Rugoso</div>
        </div>
        <div className="w-[81px] flex-col justify-start items-center gap-1 inline-flex">
          <div className="h-[75px] px-[11px] py-5 bg-sky-200 rounded-lg border-2 border-cyan-600 justify-center items-center inline-flex">
            <div className="w-[59px] h-[35px] relative flex-col justify-start items-start flex" >
            <div  >
    <img
           
            alt="Iconamoon arrow up"
            src="/src/assets/img/Medio 1.png"
          /> 
           </div>
            </div>
          </div>
          <div className="self-stretch text-center text-sky-200 text-[13px] font-medium font-['Open Sans']">Medio</div>
        </div>
        <div className="w-[81px] flex-col justify-start items-center gap-1 inline-flex">
          <div className="h-[75px] pl-[9px] pr-[8.28px] py-5 bg-sky-200 rounded-lg border-2 border-cyan-600 justify-center items-center inline-flex">
            <div className="w-[63.72px] h-[35px] relative flex-col justify-start items-start flex" >
            <div  >
    <img
           
            alt="Iconamoon arrow up"
            src="/src/assets/img/Fino 1.png"
          /> 
           </div>
            </div>
          </div>
          <div className="self-stretch text-center text-sky-200 text-[13px] font-medium font-['Open Sans']">Fino</div>
        </div>
      </div>
    </div>
  </div>
</div>


      </div>



      </div>
      





      
      <div className=" -mt-[32px]  border: 2px solid"> 

<div className="w-[433px] h-[89px] relative flex-col justify-start items-start inline-flex  ">
  <div className="w-36 h-10 py-2.5 flex-col justify-center items-start gap-4 inline-flex  -mt-[12px] ">
    <div className="self-stretch justify-start items-center gap-2 inline-flex">
    <div className="flex flex-col w-[140px] h-10 items-start justify-center gap-4 px-0 py-2.5 relative">
     <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto] mt-[-10.00px] mb-[-10.00px]"> 
     
      <div className="!relative !w-10 !h-10 ">
      <img
           
            alt="Iconamoon arrow up"
            src="/src/assets/img/icono-numero-5-modelado3D.png"
          /> 
      </div>
      <div className="text-neutral-50 text-2xl font-semibold font-['Open Sans'] leading-7">Escala</div> </div> </div>

      <div className="w-[205px] h-[35px] pl-44 pr-2.5 py-1.5 justify-end items-center inline-flex ml-[42px]">
   
   <div >
   <input  className="bg-background text-sky-200 text-xs font-light font-['Open Sans'] w-[195px] h-[35px] rounded-lg border-2 border-cyan-600 justify-start items-center gap-2.5 flex"
         type="number" 
         autoComplete="off" 
         placeholder='%'
         min="0" 
         step="1" 
         id="scale_w" 
       />
   </div>

 

 </div>

    </div>

    
  </div>

  <div className="h-9 flex-col justify-start items-start gap-2 inline-flex mt-5">
    <div className="self-stretch justify-start items-center gap-4 inline-flex">
    <div >
      <input  className="bg-background text-sky-200 text-xs font-light font-['Open Sans'] w-28 h-9 p-2.5 rounded-lg border-2 border-cyan-600 justify-start items-center gap-2.5 flex"
          type="number" 
          autoComplete="off" 
          placeholder='Largo'
          min="0" 
          step="0.1" 
          id="scale_y" 
        />
    </div>
    <div >
    <input  className="bg-background text-sky-200 text-xs font-light font-['Open Sans'] w-28 h-9 p-2.5 rounded-lg border-2 border-cyan-600 justify-start items-center gap-2.5 flex"
          type="number" 
          autoComplete="off" 
          placeholder='Ancho'
          min="0" 
          step="0.1" 
          id="scale_x" 
        />
    </div>
    <div >
    <input  className="bg-background text-sky-200 text-xs font-light font-['Open Sans'] w-28 h-9 p-2.5 rounded-lg border-2 border-cyan-600 justify-start items-center gap-2.5 flex"
          type="number" 
          autoComplete="off" 
          placeholder='Alto'
          min="0" 
          step="0.1" 
          id="scale_z" 
        />
    </div>
      <div className="text-sky-200 text-sm font-medium font-['Open Sans']">cm</div>
    </div>
  </div>
</div>



<div className="w-40 h-24 flex-col justify-center items-start gap-4 inline-flex">
  <div className="justify-center items-center gap-2 inline-flex">
    <div className="w-10 h-10 relative flex-col justify-start items-start flex" >
    <div className="!relative !w-10 !h-10 ">
      <img
           
            alt="Iconamoon arrow up"
            src="/src/assets/img/iconoir_number-6-square-solid.png"
          /> 
      </div>
    </div>
    <div className="text-neutral-50 text-2xl font-semibold font-['Open Sans'] leading-7">Precio:</div>
  </div>
  <div className="w-[181px] h-[42px] p-2.5 rounded-lg border-2 border-cyan-600 flex-col justify-center items-start gap-2.5 inline-flex">
  <div className="w-[13px] text-sky-200 text-base font-normal font-['Open Sans']">$</div>
</div>
</div>


<div className="transition hover:bg-cyan-600 cursor-pointer w-[249px] h-[54px] px-[18px] py-[13px] bg-sky-500 rounded-lg justify-center items-center gap-2.5 inline-flex ml-[150px]">
  <div className="text-neutral-50 text-base font-semibold font-['Open Sans']">LO QUIERO</div>
</div>

      </div>
     

    </div>
  );
}


















