import { FaTruckFast } from "react-icons/fa6";
import SearchInput from "./SearchInput";
import Navbar from "./Navbar";
import Micuenta from '../assets/icono-mi-cuenta-skyblue.svg'
import Carrito from '../assets/icono-mi-carrito-skyblue.svg'
import logo from '../assets/Asset 1 1.png';
import { Link } from "wouter";

function Header() {
    return (
        <header className="font-openSans">
            <section className="bg-primary-dark">
                <div className="m-auto max-w-7xl h-9 text-sm p-2.5 flex items-center justify-center gap-3">
                    <p className="">¡Envíos a todo el país!</p>
                    <FaTruckFast className="w-5 h-4" />
                </div>
            </section>
            <section className="pt-4 pb-6 bg-primary-darker flex items-center gap-9">
                <section className="max-w-7xl flex items-center gap-9 m-auto">
                    <div className="w-32 h-32 relative bg-neutral-400 rounded-lg">
                        <Link to={'/'}><img src={logo} className="w-full h-full object-cover rounded-lg" /></Link>
                    </div>
                    <article className="flex-col gap-9 flex">
                        <section className="flex items-center gap-6">
                            <SearchInput />
                            <Link to={'/myAccount'} className="flex flex-col items-center gap-2 group">
                                <img src={Micuenta} className="h-12 object-cover"/>
                                <p className="text-white text-sm font-normal leading-4 group-hover:text-primary-normal">Mi Cuenta</p>
                            </Link>
                            <button className="flex flex-col items-center gap-2 relative group">
                                <img src={Carrito} className="h-12 object-cover"/>
                                <p className="text-white text-sm font-normal leading-4 group-hover:text-primary-normal">Mi Carrito</p>
                                <span className="absolute rounded-full w-5 h-5 grid place-items-center right-0 top-[-5px] bg-primary-light-active text-primary-dark font-bold text-sm">
                                    0
                                </span>
                            </button>
                        </section>
                        <Navbar />
                    </article>
                </section>
            </section>
        </header>
    )
}

export default Header