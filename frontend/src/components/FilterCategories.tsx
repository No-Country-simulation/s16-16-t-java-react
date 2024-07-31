import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import CalculoPrices from "./CalculoPrices";
// import categoriasJSON from '../zustand/categorias.json';
import useStore from "../zustand/store";

type categoryProps = {
  selectCategories: string[]
}

const FilterCategories: React.FC<categoryProps> = ({ selectCategories }) => {
  const { categories, setSelectedCategory } = useStore();
  const [openCategories, setOpenCategories] = useState<boolean>(false);


  const handleCategories = (categorie: string) => {
    if (!selectCategories.includes(categorie)) {
      setSelectedCategory(categorie);
    }
  }

  const test = categories;

  return (
    <section className="w-[250px] sticky top-10 mt-16">
      <h1 className="text-start text-white text-2xl font-semibold leading-[28.80px]">
        Filtrar Por
      </h1>
      <aside className="mt-2.5 flex flex-col gap-4">
        <article className="select-none bg-primary-dark-active rounded-lg border border-neutral-dark-hover">
          <div
            onClick={() => setOpenCategories(!openCategories)}
            className="cursor-pointer w-full h-10 p-2 justify-between items-center flex">
            <h2>Categorías</h2>
            <section className={`transition-transform duration-[300ms] ${openCategories ? 'rotate-90' : 'rotate-0'}`}>
              <RiArrowRightSLine className="w-6 h-6" />
            </section>
          </div>
          <div className={`transition-height duration-[300ms] ${openCategories ? 'max-h-[1000px]' : 'max-h-0 overflow-hidden'}`}>
            {test?.map((categoria) => (
              <section key={categoria.id}>
                <div className="transition-height">
                  <p
                    onClick={() => handleCategories(categoria.nombre)}
                    className={`text-sm pl-4 py-3 w-full text-start font-thin hover:bg-primary-darker transition 
                    ${selectCategories.includes(categoria.nombre) ? 'bg-primary-darker text-gray-300 select-none cursor-default' : 'cursor-pointer'}
                    ${categoria.nombre === 'Personalizado' ? 'rounded-br-xl transition hover:rounded-bl-xl hover:rounded-br-xl ' : 'rounded-br-none rounded-bl-none'}
                  `}>
                    {categoria.nombre}
                  </p>
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
