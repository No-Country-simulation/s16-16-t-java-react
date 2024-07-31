import { useState } from "react";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";

type selectOrder = { orderProduct: (stringOrder: string) => void };

const OrderProducts: React.FC<selectOrder> = ({ orderProduct }) => {
  const [openOrder, setOpenOrder] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpenOrder(!openOrder)}
        className="cursor-pointer relative w-[400px] h-10 p-2 bg-primary-dark-active rounded-lg border border-x-neutral-dark-hover justify-between items-center flex"
      >
        <div className="text-white text-lg font-normal leading-snug">Ordenar por:</div>
        {openOrder ? <RiArrowDownSLine className="w-6 h-6" /> : <RiArrowRightSLine className="w-6 h-6" />}
        {openOrder &&
          <section className="cursor-pointer select-none top-11 left-0 absolute text-left bg-primary-dark-active w-full">
            {[
              ['bajo'],
              ['alto'],
            ].map(([text]) => (
              <p
                key={text}
                onClick={() => orderProduct(text)}
                className="pl-3 py-1 hover:border-l-[3px] hover:border-primary-normal hover:bg-primary-darker transition"
              >
                Precio más {text}
              </p>
            ))}
          </section>
        }
      </div>
    </>
  )
}

export default OrderProducts