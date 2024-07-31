import React, { useEffect, useRef, useState, MouseEvent, useCallback } from "react"
import emptyCartIcon from "../assets/cart/carritoVacio.svg"
import trashIcon from "../assets/cart/codicon_trash.svg"
import envioIcon from "../assets/cart/Envío-correo.png"
import checkIcon from "../assets/checkbox.svg"
import checkActiveIcon from "../assets/checkboxActive.svg"
import tiendaIcon from "../assets/cart/TiendaIcono.png"
import carritoIcon from "../assets/icono-mi-carrito-white.svg"
import { Link } from "wouter"
import imagenPrueba from '../assets/mate-angel.png';
import Counter from "./Counter"
import useStore from "../zustand/store"

interface CartProps {
  open: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ open, onClose }) => {
  const { cart, removeFromCart } = useStore()
  const [check, setCheck] = useState<boolean>(false);
  const [envio, setEnvio] = useState<boolean>(false);
  const [direccion, setDireccion] = useState<string>('');
  const [checkEnvio, setCheckEnvio] = useState<boolean>(true);

  const totalPrice: number = cart.reduce((total, item) => total + item.precio * item.quantity, 0)
  const cartRef = useRef<HTMLDivElement | null>(null);

  const handleClose = useCallback((e: MouseEvent) => {
    if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
      onClose();
    }
  }, [onClose]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDireccion(e.target.value);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClose as EventListener);
    }
    return () => {
      document.removeEventListener('mousedown', handleClose as EventListener);
    };
  }, [open, handleClose]);


  return (
    <div className="overflow-x-hidden relative">
      <aside
        ref={cartRef}
        className={`fixed top-0 right-0 h-full w-[453px] bg-primary-dark-active transition-transform duration-1000 z-10 p-6 flex flex-col gap-6 ${open ? 'transform translate-x-0' : 'transform translate-x-full'
          }`}
      >
        <h3 className="text-2xl font-semibold text-start">Mi carrito {cart.length ? `(${cart.length})` : null}</h3>
        {cart.length ? (
          <div className="flex flex-col h-[calc(100vh-104px)]">
            <div className="overflow-y-auto no-scrollbar">
              {cart?.map((p, index) => (
                <div className="flex flex-col" key={index}>
                  <div className="flex flex-col gap-4 p-4 pb-8">
                    <div className="flex gap-6 w-full items-center">
                      <img className="py-[19px] h-[93.6px] w-[120.83px] object-cover" src={p.imageUrl} />
                      <div className="w-full flex flex-col gap-6">
                        <div className="flex justify-between gap-12">
                          <p className="font-semibold">{p.nombre}</p>
                          <button onClick={() => removeFromCart(p.id)}><img src={trashIcon} /></button>
                        </div>
                        <div className="flex gap-12 justify-between items-center">
                          <Counter counter={p.quantity}
                            setCounter={(newQuantity: number) => {
                              if (newQuantity === 0) {
                                removeFromCart(p.id);
                              } else {
                                useStore.setState((state) => ({
                                  cart: state.cart.map((item) =>
                                    item.id === p.id ? { ...item, quantity: newQuantity } : item
                                  )
                                }));
                              }
                            }} />
                          <p className="text-lg">${p.precio}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-lg font-semibold">Subtotal (sin envío)</p>
                      <p className="text-lg font-semibold">$ {p.precio * p.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr className='border-neutral-light h-[1px]' />
            {envio ?
              <div className="py-6 gap-4 flex flex-col">
                <div className="flex py-4 items-center justify-between">
                  <p className="text-base font-normal">Entrega para cp <span className="font-bold">{direccion}</span></p>
                  <button className="py-[13px] px-[18px] text-base font-semibold border-2 border-primary-normal rounded-lg" onClick={() => setEnvio(false)}>CAMBIAR CP</button>
                </div>
                <div className="p-4 flex gap-8 border rounded-lg border-neutral-normal-hover">
                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        setCheckEnvio(!checkEnvio)
                        setCheck(false)
                      }}>
                      {checkEnvio ? (
                        <img src={checkActiveIcon} />
                      ) : (
                        <img src={checkIcon} />
                      )}
                    </button>
                    <img src={envioIcon} />
                  </div>
                  <div className="flex-col">
                    <p className="text-base font-semibold">Envío Clásico - Domicilio</p>
                    <p className="text-lg font-semibold text-neutral-normal-active text-start">$ 6.000</p>
                  </div>
                </div>
              </div>
              :
              <div className="p-6 gap-4 flex flex-col">
                <div className="flex gap-4 items-center">
                  <img src={envioIcon} />
                  <p className="text-base font-semibold">Envío Clásico - Domicilio</p>
                </div>
                <div className="flex gap-4">
                  <input value={direccion} onChange={handleInputChange} className="px-4 py-[10px] placeholder:text-neutral-dark-hover text-neutral-darker outline-none bg-neutral-normal rounded-lg border-2 border-primary-dark"
                    placeholder="Input" />
                  <button className="py-[13px] px-[18px] rounded-lg bg-primary-normal text-base font-semibold" onClick={() => setEnvio(true)}>CALCULAR</button>
                </div>
              </div>
            }
            <div className="p-4 flex gap-8 border rounded-lg border-neutral-normal-hover">
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setCheck(!check)
                    setCheckEnvio(false)
                  }}>
                  {check ? (
                    <img src={checkActiveIcon} />
                  ) : (
                    <img src={checkIcon} />
                  )}
                </button>
                <img src={tiendaIcon} />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-start">Retiro por Sucursal </p>
                <p className="text-lg font-semibold text-neutral-normal-active text-start">GRATIS</p>
              </div>
            </div>
            <div className="py-4 gap-9 flex flex-col items-center">
              <div className="flex py-2 px-4 justify-between w-full">
                <p className="text-2xl font-bold">Total:</p>
                <p className="text-2xl font-bold">${totalPrice}</p>
              </div>
              <div className="flex flex-col gap-4 justify-center items-center w-fit">
                <button className="flex gap-2 py-2 px-1 w-full justify-center bg-primary-normal rounded h-[50px] items-center"><img src={carritoIcon} /><p className="text-lg font-semibold">PAGAR</p></button>
                <Link to="/AllProducts" className="text-lg font-semibold">Seguir Comprando</Link>
              </div>
            </div>
          </div>
        )
          :
          (
            <div className="w-[388px] p-2 h-full flex flex-col items-center justify-center gap-6 max-h-[777px]">
              <img src={emptyCartIcon} />
              <p className="text-2xl font-semibold">Carrito de compras vacío</p>
              <p className="text-xl font-normal leading-6 text-center">Es hora de llenarlo con productos increíbles</p>
              <Link to="/allProducts" className="py-[13px] px-[18px] text-base font-semibold border-2 border-primary-normal rounded-lg">Ver Productos</Link>
            </div>
          )}
      </aside>
    </div>
  )
}

export default Cart
