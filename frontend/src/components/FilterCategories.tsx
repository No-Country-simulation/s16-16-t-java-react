import { RiArrowRightSLine } from "react-icons/ri";

function FilterCategories() {
  return (
    <section className="w-[250px] mt-16">
      <h1 className=" text-start text-white text-2xl font-semibold leading-[28.80px]">
        Filtrar Por
      </h1>
      <aside className="flex flex-col gap-4">
        <div className="mt-2.5 w-full h-10 p-2 bg-primary-dark-active rounded-lg border border-neutral-dark-hover justify-between items-center flex">
          <h2>Categorías</h2>
          <RiArrowRightSLine className="w-6 h-6" />
        </div>
        <div className="w-full h-[95px] pl-2 py-2 bg-primary-dark-active rounded-lg border border-neutral-dark-hover flex flex-col gap-6">
          <h2 className="text-start">Precio</h2>
          <section className="flex gap-2 items-center">
            <div className="w-[104px] h-[33px] p-2 rounded-lg border border-neutral-400 justify-start items-center gap-2.5 flex">
              <div className="flex gap-2 grow shrink basis-0 text-white text-sm font-normal">
                Min
                <input
                  type="number"
                  className="hide-number-arrows w-full bg-transparent outline-none border-none text-right"
                />
              </div>
            </div>
            <div className="w-2 h-[0px] border-[1px] border-white"></div>
            <div className="w-[104px] h-[33px] p-2 rounded-lg border border-neutral-400 justify-start items-center gap-2.5 flex">
              <div className="flex gap-2 grow shrink basis-0 text-white text-sm font-normal ">
                Max
                <input
                  type="number"
                  className="hide-number-arrows w-full bg-transparent outline-none border-none text-right"
                />
              </div>
            </div>
          </section>
        </div>
      </aside>
    </section>
  )
}

export default FilterCategories