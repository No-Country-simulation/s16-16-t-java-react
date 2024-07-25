import React from 'react';
import img7 from '../assets/img/image 7.png'
import img9 from '../assets/img/image 9.png'
import img10 from '../assets/img/image 10.png'
import img45 from '../assets/img/image 45.png'
import img46 from '../assets/img/image 46.png'
import img47 from '../assets/img/image 47.png'
import img48 from '../assets/img/image 48.png'
import img50 from '../assets/img/image 50.png'
import img51 from '../assets/img/image 51.png'

import card1 from '../assets/img/card-pla-1.svg'
import card2 from '../assets/img/card-abs-2.svg'
import card3 from '../assets/img/card-asa-3.svg'
import card4 from '../assets/img/card-petg-4.svg'


interface TableItem {
  id: number;
  imgSrc: string;
  text: string;
  bgColor: string;
  backImgSrc: string;
}

const Tabla3d: React.FC = () => {
  const rows: TableItem[][] = [
    [
      { id: 1, imgSrc: img7, text: "PLA", bgColor: "bg-cyan-700", backImgSrc: card1 },
      { id: 2, imgSrc: img9, text: "ABS", bgColor: "bg-cyan-700", backImgSrc: card2 },
      { id: 3, imgSrc: img10, text: "ASA", bgColor: "bg-cyan-700", backImgSrc: card3 }
    ],
    [
      { id: 4, imgSrc: img45, text: "PETG", bgColor: "bg-cyan-700", backImgSrc: card4 },
      { id: 5, imgSrc: img46, text: "FLEXIBLE", bgColor: "bg-cyan-700", backImgSrc: card1 },
      { id: 6, imgSrc: img47, text: "MADERA (PLA)", bgColor: "bg-cyan-700", backImgSrc: card1 }
    ],
    [
      { id: 7, imgSrc: img48, text: "RESINA DURA", bgColor: "bg-cyan-700", backImgSrc: card1 },
      { id: 8, imgSrc: img50, text: "NYLON PA12", bgColor: "bg-cyan-700", backImgSrc: card1 },
      { id: 9, imgSrc: img51, text: "RESINA FLEXIBLE", bgColor: "bg-cyan-700", backImgSrc: card1 }
    ]
  ];

  return (
    <section className="my-16 max-w-7xl m-auto">
      <div className="ml-[105px] flex items-center gap-3 mb-8">
        <span className="bg-primary-dark h-8 w-2 block rounded-xl"></span>
        <h1 className="text-neutral-50 text-2xl font-semibold text-left">
          Tabla comparativa de materiales 3D
        </h1>
      </div>
      <div className="container mx-auto p-4 grid gap-6"> {/* Ajuste de separación horizontal y vertical */}
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="w-full flex justify-center items-center gap-6"> {/* space horizontal */}
            {row.map((item) => (
              <div key={item.id} className="group h-[290px] w-[340px] [perspective:1000px]">
                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                  {/* Parte frontal */}
                  <div className="absolute inset-0 [backface-visibility:hidden]">
                    <div className={`w-[340px] h-[290px] left-0 top-0 absolute ${item.bgColor} rounded-lg border-2 border-sky-500`}></div>
                    <img className="w-[340px] h-[180px] left left-[50%] transform -translate-x-1/2 top-[38px] absolute z-10 cursor-pointer object-contain" src={item.imgSrc} alt={item.text} />
                    <div className="w-full text-center top-[240px] absolute text-sky-200 text-2xl font-semibold leading-loose z-10 truncate">{item.text}</div>
                  </div>
                  {/* Parte trasera */}
                  <div className={`absolute inset-0 h-full w-full rounded-lg ${item.bgColor} flex items-center justify-center [transform:rotateX(180deg)] [backface-visibility:hidden]`}>
                    <img className="object-contain" style={{ width: '340px', height: '300px' }} src={item.backImgSrc} alt="Back Icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tabla3d;
