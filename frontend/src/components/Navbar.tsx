import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "wouter";

function Navbar() {
  const [modalProduct, setModalProduct] = useState<boolean>(false);
  return (
    <nav className="h-[50px] flex items-center justify-between">
      <ul className="flex items-center text-neutral-50">
        <Link to={'/'} className="cursor-pointer hover:text-primary-normal pr-6 border-r-2 border-primary-normal">INICIO</Link>
        <li onClick={() => setModalProduct(!modalProduct)} className="group relative cursor-pointer px-6 flex items-center gap-3 border-r-2 border-primary-normal">
          <p className="group-hover:text-primary-normal">PRODUCTOS</p>
          <RiArrowDownSLine className="w-6 h-6 group-hover:text-primary-normal" />
          {
            modalProduct &&
            <div className="absolute top-10 rounded-xl left-0 z-40 bg-primary-dark-active flex flex-col">
              <Link className="w-44 py-3 hover:bg-primary-dark-hover rounded-tr-xl hover:rounded-tr-xlrounded-tl-xl  hover:rounded-tl-xl" to={'/allProducts'}>En General</Link>
              <Link className="w-44 py-3 hover:bg-primary-dark-hover" to={'/allProducts'}>Productos 3D</Link>
              <Link className="w-44 py-3 hover:bg-primary-dark-hover rounded-br-xl hover:rounded-br-xl rounded-bl-xl hover:rounded-bl-xl" to={'/allProducts'}>Insumos</Link>
            </div>
          }
        </li>
        <li className="cursor-default text-zinc-50/20 px-6 border-r-2 border-primary-normal">MODELADO 3D</li>
        <Link to={'/designGuide'} className="cursor-pointer hover:text-primary-normal px-6 border-r-2 border-primary-normal">GUÍA DE DISEÑO</Link>
        <Link to={'/ayuda'} className="cursor-pointer hover:text-primary-normal px-6">AYUDA</Link>
      </ul>
      <Link to={'/calculator'} className="transition hover:bg-primary-dark-hover bg-primary-normal rounded-lg px-5 py-3 text-neutral-50">
        CALCULAR PRECIO
      </Link>
    </nav>
  )
}

export default Navbar