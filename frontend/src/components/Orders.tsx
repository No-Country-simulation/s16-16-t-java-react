import { useState } from "react"
import ModalProducts from "./ModalProducts";

function Orders() {
  const [modal, setModal] = useState<boolean>(false);
  const handleModal = (state: boolean) => {
    setModal(state)
  }

  return (
    <div className="mt-[41px] ml-28">
      <h1 className="text-left text-2xl font-semibold leading-[28.80px]">Pedidos</h1>
      {/* ----------- 1 product ----------- */}
      <section className="text-left flex flex-col gap-2 mt-6">
        <p className="self-stretch text-neutral-50 text-sm leading-[16.80px]">dd/mm/aaaa</p>
        <div
          onClick={() => setModal(true)}
          className="cursor-pointer h-12 px-4 bg-neutral-normal rounded-lg border-2 border-primary-dark justify-between items-center gap-[30px] flex"
        >
          <p className="text-background  font-semibold">Producto</p>
          <p className="text-primary-dark text-sm font-bold leading-[16.80px]">Ver Detalles</p>
        </div>
        {modal &&
          <ModalProducts setState={(state) => handleModal(state)} />
        }
      </section>
      {/* ----------- 2 product ----------- */}
      <section className="text-left flex flex-col gap-2 mt-6">
        <p className="self-stretch text-neutral-50 text-sm leading-[16.80px]">dd/mm/aaaa</p>
        <div
          onClick={() => setModal(true)}
          className="cursor-pointer h-12 px-4 bg-neutral-normal rounded-lg border-2 border-primary-dark justify-between items-center gap-[30px] flex"
        >
          <p className="text-background  font-semibold">Producto</p>
          <p className="text-primary-dark text-sm font-bold leading-[16.80px]">Ver Detalles</p>
        </div>
        {modal &&
          <ModalProducts setState={(state) => handleModal(state)} />
        }
      </section>
    </div>
  );
}

export default Orders;
