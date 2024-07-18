import BillEmpty from '../assets/Bill_empty.png';

function ProductsEmpty() {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={BillEmpty} />
      <p className="text-center text-2xl font-semibold leading-[28.80px]">Aún no tienes pedidos</p>
      <p className="px-[90px] text-center text-xl leading-normal">Empieza a crear hoy, explorar nuestros productos</p>
      <button className="text-lg px-8 py-2 rounded-lg border-2 border-primary-normal hover:border-primary-dark-active">
        Ver Productos
      </button>
    </div>
  )
}

export default ProductsEmpty