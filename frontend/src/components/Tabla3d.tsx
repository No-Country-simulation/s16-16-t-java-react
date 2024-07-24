import React from 'react';

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
      { id: 1, imgSrc: "/src/assets/img/image 7.png", text: "PLA", bgColor: "bg-cyan-700", backImgSrc: "/src/assets/img/card-pla-1.svg" },
      { id: 2, imgSrc: "/src/assets/img/image 9.png", text: "ABS", bgColor: "bg-cyan-700", backImgSrc: "/src/assets/img/card-abs-2.svg" },
      { id: 3, imgSrc: "/src/assets/img/image 10.png", text: "ASA", bgColor: "bg-cyan-700", backImgSrc: "/src/assets/img/card-asa-3.svg" }
    ],
    [
      { id: 4, imgSrc: "/src/assets/img/image 45.png", text: "PETG", bgColor: "bg-cyan-700", backImgSrc: "/src/assets/img/card-petg-4.svg" },
      { id: 5, imgSrc: "/src/assets/img/image 46.png", text: "FLEXIBLE", bgColor: "bg-cyan-700", backImgSrc: "/src/assets/img/card-pla-1.svg" },
      { id: 6, imgSrc: "/src/assets/img/image 47.png", text: "MADERA (PLA)", bgColor: "bg-cyan-700", backImgSrc: "/src/assets/img/card-pla-1.svg" }
    ],
    [
      { id: 7, imgSrc: "/src/assets/img/image 48.png", text: "RESINA DURA", bgColor: "bg-cyan-700", backImgSrc: "/src/assets/img/card-pla-1.svg" },
      { id: 8, imgSrc: "/src/assets/img/image 50.png", text: "NYLON PA12", bgColor: "bg-cyan-700", backImgSrc: "/src/assets/img/card-pla-1.svg" },
      { id: 9, imgSrc: "/src/assets/img/image 51.png", text: "RESINA FLEXIBLE", bgColor: "bg-cyan-700", backImgSrc: "/src/assets/img/card-pla-1.svg" }
    ]
  ];

  return (
    <div className="my-16 container p-4">
      <div className="text-neutral-50 text-2xl font-semibold font-['Open Sans'] text-left w-full mb-4 ml-[210px]">
        Tabla comparativa de materiales 3D
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
                    <div className="w-full text-center top-[240px] absolute text-sky-200 text-2xl font-semibold font-['Open Sans'] leading-loose z-10 truncate">{item.text}</div>
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
    </div>
  );
};

export default Tabla3d;
