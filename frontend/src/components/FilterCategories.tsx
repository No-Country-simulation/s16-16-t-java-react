import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import CalculoPrices from "./CalculoPrices";
import apiJSON from '../zustand/productos.json';
// import { useLocation } from 'wouter';
// import useStore from "../zustand/store";


function FilterCategories() {
  // const [, setLocation] = useLocation();
  // USANDO EL STORE FLOBAL PARA ALMACENAR LA INFORMACION Y VIAJAR A OTRA RUTA
  // const { setState } = useStore();

  // const goToPageWithState = () => {
  //   setState('Soy un valor pasado');
  //   setLocation('/myAccount');
  // };

  // const goToPageWithState2 = () => {
  //   setState('Soy un valor pasado de ota funcion');
  //   setLocation('/myAccount');
  // };

  const [openCategories, setOpenCategories] = useState<boolean>(false);
  const [openStates, setOpenStates] = useState<{ [key: string]: boolean }>({
    Productos_3D: false,
    Insumos: false,
  });

  // CODIGO PROVICIONAL PARA PROBAR FILTRADO
  // const categorias = [
  //   {
  //     "categoria": {
  //       "id": 1,
  //       "nombre": "Productos_3D",
  //       "tipos": ['Accesorios', 'Decoración', 'Figuras de Acción', 'Industrial', 'Mates', 'Oficina', 'Productos Personalizados']
  //     }
  //   },
  //   {
  //     "categoria": {
  //       "id": 1,
  //       "nombre": "Insumos",
  //       "tipos": ['Accesorios de Impresión', 'Almacenamiento y Cuidado', 'Filamentos', 'Polvos', 'Resinas']
  //     }
  //   }
  // ];

  const test = apiJSON;


  const handleToogle = (catego: string) => {
    setOpenStates(prev => ({ ...prev, [catego]: !prev[catego] }));
  };

  return (
    <section className="w-[250px] sticky top-10 mt-16">
      {/* <button onClick={goToPageWithState}>Ir a página</button><br/>
      <button onClick={goToPageWithState2}>Ir a página2</button> */}
      <h1 className="text-start text-white text-2xl font-semibold leading-[28.80px]">
        Filtrar Por
      </h1>
      <aside className="mt-2.5 flex flex-col gap-4">
        <article className="select-none bg-primary-dark-active rounded-lg border border-neutral-dark-hover">
          <div
            onClick={() => setOpenCategories(!openCategories)}
            className="cursor-pointer w-full h-10 p-2 justify-between items-center flex">
            <h2>Categorías</h2>
            <section className={`transition-transform duration-[205ms] ${openCategories ? 'rotate-90' : 'rotate-0'}`}>
              <RiArrowRightSLine className="w-6 h-6" />
            </section>
          </div>
          <div className={`transition-height duration-[205ms] ${openCategories ? 'max-h-[1000px]' : 'max-h-0 overflow-hidden'}`}>
            {test.map((ct, i) => (
              <section key={i}>
                <div
                  onClick={() => handleToogle(ct.categoria.nombre)}
                  className={`cursor-pointer pl-2 hover:bg-primary-darker transition w-full h-10 p-2 justify-between items-center flex
                    ${ct.categoria.nombre === 'Insumos' ? (openStates[ct.categoria.nombre] ? 'rounded-br-none rounded-bl-none' : 'rounded-bl-xl rounded-br-xl hover:rounded-bl-xl hover:rounded-br-xl') : ''}
                  `}
                >
                  <h2 className="text-sm">{ct.categoria.nombre}</h2>
                  <section className={`transition-transform duration-[205ms] ${openStates[ct.categoria.nombre] ? 'rotate-90' : 'rotate-0'}`}>
                    <RiArrowRightSLine className="w-6 h-6" />
                  </section>
                </div>

                <div className={`transition-height duration-[205ms]  ${openStates[ct.categoria.nombre] ? 'max-h-[1000px]' : 'max-h-0 overflow-hidden'}`}>
                  {ct.categoria.tipos.map((item, idx) => (
                    <p key={idx} className={`cursor-pointer text-sm pl-4 py-3 w-full text-start font-thin hover:bg-primary-darker transition duration-[205ms]
                      ${item === 'Resinas' ? 'rounded-br-xl transition hover:rounded-bl-xl hover:rounded-br-xl ' : 'rounded-br-none rounded-bl-none'}
                    `}>
                      {item}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
        <CalculoPrices />
      </aside>
    </section>
  );
}

export default FilterCategories;
