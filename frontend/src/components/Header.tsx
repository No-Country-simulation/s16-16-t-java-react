import { FaTruckFast, FaRegCircleUser } from "react-icons/fa6";
import { PiShoppingCartBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Header() {
    const [cleanInput, setCleanInput] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearch(value);
        setCleanInput(value !== '');
    }
    const handleClear = () => {
        setSearch('');
        setCleanInput(false);
    }

    return (
        <header className="font-openSans">
            <section className="bg-primary-dark">
                <div className="m-auto max-w-7xl h-9 text-sm p-2.5 flex items-center justify-center gap-3">
                    <p className="">¡Envíos a todo el país!</p>
                    <FaTruckFast className="w-5 h-4" />
                </div>
            </section>
            <section className="pt-4 pb-6 bg-neutral-darker flex items-center gap-9">
                <section className="max-w-7xl flex items-center gap-9 m-auto">
                    <div className="">
                        <span className="block w-32 h-32 relative bg-neutral-400 rounded-lg"></span>
                    </div>
                    <article className="flex-col gap-9 flex">
                        <section className="flex items-center gap-6">
                            <div className="rounded-lg border-2 border-cyan-600 w-[720px] flex items-center bg-neutral-normal-hover">
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={search}
                                    className="rounded-lg pl-6 w-full h-14 font-normal leading-snu text-lg bg-neutral-normal-hover placeholder:text-neutral-500 text-neutral-darker border-none outline-none"
                                    placeholder="¿Qué estás buscando?"
                                />
                                {cleanInput &&
                                    <IoClose
                                        onClick={handleClear}
                                        className="cursor-pointer h-7 w-7 fill-neutral-darker"
                                    />
                                }
                                <div className="ml-14 pr-6">
                                    <IoIosSearch className="cursor-pointer text-3xl fill-cyan-600" />
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <FaRegCircleUser className="text-primary-normal text-5xl" />
                                <p className="text-white text-sm font-normal leading-4">Mi Cuenta</p>
                            </div>
                            <div className="flex flex-col items-center gap-2 relative">
                                <PiShoppingCartBold className="text-primary-normal text-5xl" />
                                <p className="text-white text-sm font-normal leading-4">Mi Carrito</p>
                                <span className="absolute rounded-full w-5 h-5 grid place-items-center right-0 top-[-5px] bg-primary-light-active text-primary-dark font-bold text-sm">
                                    0
                                </span>
                            </div>
                        </section>
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
                    </article>
                </section>
            </section>
        </header>
    )
}

export default Header