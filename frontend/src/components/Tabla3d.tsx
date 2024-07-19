import React from 'react';

interface TableItem {
  id: number;
  imgSrc: string;
  text: string;
  bgColor: string;
  //link: string;
}

const Tabla3d: React.FC = () => {
  const rows: TableItem[][] = [
    [
      {
        id: 1,
        imgSrc: "/src/assets/img/image 7.png",
        text: "PLA",
        bgColor: "bg-cyan-700",
        // link: "https://www.youtube.com/watch?v=example1"
      },
      {
        id: 2,
        imgSrc: "/src/assets/img/image 9.png",
        text: "ABS",
        bgColor: "bg-cyan-700",
        //link: "https://www.youtube.com/watch?v=example2"
      },
      {
        id: 3,
        imgSrc: "/src/assets/img/image 10.png",
        text: "ASA",
        bgColor: "bg-cyan-700",
       // link: "https://www.youtube.com/watch?v=example3"
      }
    ],
    [
      {
        id: 4,
        imgSrc: "/src/assets/img/image 45.png",
        text: "PETG",
        bgColor: "bg-cyan-700",
       // link: "https://www.youtube.com/watch?v=example4"
      },
      {
        id: 5,
        imgSrc: "/src/assets/img/image 46.png",
        text: "FLEXIBLE",
        bgColor: "bg-cyan-700",
        //link: "https://www.youtube.com/watch?v=example5"
      },
      {
        id: 6,
        imgSrc: "/src/assets/img/image 47.png",
        text: "MADERA (PLA)",
        bgColor: "bg-cyan-700",
       // link: "https://www.youtube.com/watch?v=example6"
      }
    ],
    [
      {
        id: 7,
        imgSrc: "/src/assets/img/image 48.png",
        text: "RESINA DURA",
        bgColor: "bg-cyan-700",
       // link: "https://www.youtube.com/watch?v=example7"
      },
      {
        id: 8,
        imgSrc: "/src/assets/img/image 50.png",
        text: "NYLON PA12",
        bgColor: "bg-cyan-700",
        //link: "https://www.youtube.com/watch?v=example8"
      },
      {
        id: 9,
        imgSrc: "/src/assets/img/image 51.png",
        text: "RESINA FLEXIBLE",
        bgColor: "bg-cyan-700",
        //link: "https://www.youtube.com/watch?v=example9"
      }
    ]
  ];

  return (
    <div className='my-16 container p-4'>
      <div className="text-neutral-50 text-2xl font-semibold font-['Open Sans'] text-left w-full mb-4 ml-24">
        Tabla comparativa de materiales 3D
      </div>
      <div className="container mx-auto p-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="w-full flex justify-center items-center gap-14 mb-8">
            {row.map((item) => (
              <div key={item.id} className="w-80 h-72 relative">
                <div className={`w-80 h-72 left-0 top-0 absolute ${item.bgColor} rounded-lg border-2 border-sky-500`}></div>
                <img 
                  className="w-56 h-36 left-[50%] transform -translate-x-1/2 top-[74px] absolute z-10 cursor-pointer object-contain" 
                  src={item.imgSrc} 
                  alt={item.text} 
                 // onClick={() => handleImageClick(item.link)} 
                />
                <div className="w-full text-center top-[240px] absolute text-sky-200 text-2xl font-semibold font-['Open Sans'] leading-loose z-10 truncate">
                  {item.text}
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
