import useStore from "../zustand/store";

function CalculoPrices() {
  const { setMaxPrice, setMinPrice } = useStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = parseFloat(value);

    // Asignar valores predeterminados si el valor es inválido
    const validValue = Number.isNaN(numericValue) || numericValue <= 0
      ? (name === 'minPrice' ? 10 : 4000)
      : numericValue;

    if (name === 'minPrice') {
      setMinPrice(validValue);
    }
    if (name === 'maxPrice') {
      setMaxPrice(validValue);
    }
  };

  return (
    <div className="w-full h-[98px] pl-2 py-2 flex flex-col gap-6 bg-primary-dark-active rounded-lg border border-neutral-dark-hover">
      <h2 className="text-start">Precio</h2>
      <section className="flex gap-2 items-center">
        <div className="w-[104px] h-[33px] p-2 rounded-lg border border-neutral-400 justify-start items-center gap-2.5 flex">
          <div className="flex gap-2 grow shrink basis-0 text-white text-sm font-normal">
            Min
            <input
              type="number"
              name='minPrice'
              onChange={handleChange}
              className="hide-number-arrows w-full bg-transparent outline-none border-none text-right"
            />
          </div>
        </div>
        <div className="w-2 h-[0px] border-[1px] border-white"></div>
        <div className="w-[104px] h-[33px] p-2 rounded-lg border border-neutral-400 justify-start items-center gap-2.5 flex">
          <div className="flex gap-2 grow shrink basis-0 text-white text-sm font-normal">
            Max
            <input
              type="number"
              name='maxPrice'
              onChange={handleChange}
              className="hide-number-arrows w-full bg-transparent outline-none border-none text-right"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CalculoPrices;