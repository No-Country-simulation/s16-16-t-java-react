import { Link } from "wouter";

function Navbar() {

  return (
    <nav className="h-[50px] flex items-center justify-between">
      <ul className="flex items-center text-neutral-50">
        <Link to={'/'} className="cursor-pointer hover:text-primary-normal pr-6 border-r-2 border-primary-normal">INICIO</Link>
        <Link to={'/allProducts'} className="cursor-pointer hover:text-primary-normal px-6 border-r-2 border-primary-normal">PRODUCTOS</Link>
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