import pagos from '../assets/icono-pagos-white.svg'
import pagosHover from '../assets/icono-pagos-skyblue.svg'
import Micuenta from '../assets/icono-mi-cuenta-white.svg'
import MicuentaHover from '../assets/icono-mi-cuenta-skyblue.svg'
import facturacion from '../assets/icono-facturacion-white.svg'
import facturacionHover from '../assets/icono-facturacion-skyblue.svg'
import pedidos from '../assets/icono-pedidos-white.svg';
import pedidosHover from '../assets/icono-pedidos-skyblue.svg';
import { useState } from "react";

type hovers = {
  isPedidos: boolean;
  isMiCuenta: boolean;
  isFacturacion: boolean;
  isPagos: boolean;
};

function NavMiCuenta() {
  const [isHovered, setIsHovered] = useState<hovers>({
    isPedidos: false,
    isMiCuenta: false,
    isFacturacion: false,
    isPagos: false
  });
  const iconActive = (icon: string) => setIsHovered(prev => ({ ...prev, [icon]: true }))
  const iconDesactive = (icon: string) => setIsHovered(prev => ({ ...prev, [icon]: false }))
  return (
    <section className="w-[400px] my-10 py-6 bg-sky-900 rounded-lg flex justify-center">
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-2">
          {[
            ['isPedidos', 'Mis pedidos', isHovered.isPedidos ? pedidosHover : pedidos],
            ['isMiCuenta', 'Mi cuenta', isHovered.isMiCuenta ? MicuentaHover : Micuenta],
            ['isFacturacion', 'Datos de facturación', isHovered.isFacturacion ? facturacionHover : facturacion],
            ['isPagos', 'Métodos de pago', isHovered.isPagos ? pagosHover : pagos],
          ].map(([option, text, hovered]) => (
            <div
              key={option}
              onMouseEnter={() => iconActive(option)}
              onMouseLeave={() => iconDesactive(option)}
              className="flex gap-4 cursor-pointer group items-center w-[341px] h-14 px-4 border-b-2 border-neutral-normal">
              <img src={hovered} alt="Pedidos" />
              <p className="group-hover:font-bold group-hover:text-primary-normal">{text}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-start">
          <button className="w-44 h-[50px] px-[18px] py-[13px] bg-sky-500 rounded-lg">
            CERRAR SESIÓN
          </button>
        </div>
      </div>
    </section>
  )
}

export default NavMiCuenta