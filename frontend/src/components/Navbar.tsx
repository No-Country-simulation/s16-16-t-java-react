import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "wouter";

function Navbar() {
  return (
    <nav className="h-[50px] flex items-center justify-between">
      <ul className="flex items-center text-neutral-50">
        <Link to={'/'} className="cursor-pointer hover:text-primary-normal pr-6 border-r-2 border-primary-normal">INICIO</Link>
        <li className="cursor-pointer hover:text-primary-normal px-6 flex items-center gap-3 border-r-2 border-primary-normal">
          <p>PRODUCTOS</p>
          <RiArrowDownSLine className="w-6 h-6" />
        </li>
        <li className="cursor-pointer hover:text-primary-normal px-6 border-r-2 border-primary-normal">MODELADO 3D</li>
        <Link to={'/designGuide'} className="cursor-pointer hover:text-primary-normal px-6 border-r-2 border-primary-normal">GUÍA DE DISEÑO</Link>
        <li className="cursor-pointer hover:text-primary-normal px-6">AYUDA</li>
      </ul>
      <button className="transition hover:bg-primary-normal bg-sky-500 rounded-lg px-5 py-3 text-neutral-50">
        CALCULAR PRECIO
      </button>
    </nav>
  )
}

export default Navbar