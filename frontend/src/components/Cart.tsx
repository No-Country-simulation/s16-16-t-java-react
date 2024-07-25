import React, { useEffect, useRef, useState, MouseEvent } from "react"
import emptyCartIcon from "../assets/carritoVacio.svg"
import { Link } from "wouter"
const Cart = ({open, onClose }) => {
  const [cart, setCart] = useState([''])
  const cartRef = useRef(null)

  const handleClose = (e: MouseEvent<HTMLButtonElement>) =>{
    if (cartRef.current && !cartRef.current.contains(e.target)){
      onClose()
    }
  }

  useEffect(() => {
    // Agrega el event listener cuando el carrito está abierto
    if (open) {
      document.addEventListener('mousedown', handleClose);
    }
    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  }, [open]);


  return (
    <div className="overflow-x-hidden relative">
    <aside
      ref={cartRef}
          className={`fixed top-0 right-0 h-screen w-[453px] bg-primary-dark-active transition-transform duration-1000 z-10 p-6 ${
            open ? 'transform translate-x-0' : 'transform translate-x-full'
          }`}
    >
      <h3 className="text-2xl font-semibold text-start">Mi carrito {cart.length ? `(${cart.length})` : null}</h3>
      {cart.length ? (
        <div></div>
      )
    :
    (
      <div className="w-[388px] p-2 h-full flex flex-col items-center justify-center gap-6 max-h-[777px]">
        <img src={emptyCartIcon}/>
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
