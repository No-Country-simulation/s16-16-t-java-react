import FilterCategories from "../components/FilterCategories";
import Header from "../components/Header"
import ClosseSquare from '../assets/close-square.svg';
import { RiArrowDownSLine } from "react-icons/ri";

function AllProducts() {
  return (
    <>
      <Header />
      <main className="m-auto font-openSans bg-background">
        <article className="max-w-7xl m-auto flex justify-center gap-8 pt-12">
          <FilterCategories />
          <section className="w-[798px] flex flex-col">
            <h1 className="text-left text-2xl font-semibold leading-[28.80px] border-b border-neutral-400">“Mate”</h1>
            <div className="mt-4 flex gap-10 justify-between">
              <div className="flex gap-6">
                <p className="text-left">8 Resultados</p>
                <section className="w-[74px] h-[26px] p-1 bg-primary-normal rounded-lg border border-neutral-200 justify-center items-center gap-2.5 flex">
                  <p className="text-neutral-50 text-sm font-normal font-['Open Sans'] leading-[16.80px]">Mate</p>
                  <button className="w-4 h-4 relative"><img src={ClosseSquare} /></button>
                </section>
              </div>
              <div className="w-[292px] h-10 p-2 bg-primary-dark-active rounded-lg border border-x-neutral-dark-hover justify-between items-center flex">
                <div className="text-white text-lg font-normal leading-snug">Ordenar por: Destacados</div>
                <RiArrowDownSLine className="w-6 h-6" />
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  )
}

export default AllProducts