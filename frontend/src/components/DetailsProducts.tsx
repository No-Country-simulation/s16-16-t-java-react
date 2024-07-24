interface DetailProduct {
  name: string
  stock: number
  date: string
  nrPedido: number | string
  nrSeguimiento: number | string
  state: string
}

const DetailsProducts: React.FC<DetailProduct> = ({ name, stock, date, nrPedido, nrSeguimiento, state }) => {
  return (
    <section className="flex gap-6">
      <div className="w-[159px] flex flex-col items-center justify-center px-[11px] py-2 text-gray-800  text-sm font-semibold border-2 bg-neutral-50 border-primary-dark rounded-lg">
        <span className="leading-[16.80px]">{name}</span>
        <span>x {stock}</span>
      </div>
      <div className="w-[159px] flex flex-col items-center justify-center px-[11px] py-2 text-gray-800  text-sm font-semibold border-2 bg-neutral-50 border-primary-dark rounded-lg">
        <p className="text-center text-sm leading-[16.80px]">{date}</p>
      </div>
      <div className="w-[159px] flex flex-col items-center justify-center px-[11px] py-2 text-gray-800  text-sm font-semibold border-2 bg-neutral-50 border-primary-dark rounded-lg">
        <span className="text-center text-sm leading-[16.80px]"># {nrPedido}</span>
      </div>
      <div className="w-[159px] flex flex-col items-center justify-center px-[11px] py-2 text-gray-800  text-sm font-semibold border-2 bg-neutral-50 border-primary-dark rounded-lg">
        <span className="text-center text-sm leading-[16.80px]"># {nrSeguimiento}</span>
      </div>
      <div className="w-[159px] flex flex-col items-center justify-center px-[11px] py-2 text-gray-800  text-sm font-semibold border-2 bg-neutral-50 border-primary-dark rounded-lg">
        <span className="text-center text-sm leading-[16.80px]">{state}</span>
      </div>
    </section>
  )
}

export default DetailsProducts