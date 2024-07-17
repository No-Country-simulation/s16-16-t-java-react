import { RiArrowDownSLine } from "react-icons/ri";

function Navbar() {
  return (
    <nav className="h-[50px] flex items-center justify-between">
      <ul className="flex items-center text-neutral-50">
        <li className="pr-6 border-r-2 border-cyan-600">INICIO</li>
        <li className="px-6 flex items-center gap-3 border-r-2 border-cyan-600">
          <p>PRODUCTOS</p>
          <RiArrowDownSLine className="w-6 h-6" />
        </li>
        <li className="px-6 border-r-2 border-cyan-600">MODELADO 3D</li>
        <li className="px-6 border-r-2 border-cyan-600">GUÍA DE DISEÑO</li>
        <li className="px-6">AYUDA</li>
      </ul>
      <button className="transition hover:bg-cyan-600 bg-sky-500 rounded-lg px-5 py-3 text-neutral-50">
        CALCULAR PRECIO
      </button>
    </nav>
  )
}

export default Navbar