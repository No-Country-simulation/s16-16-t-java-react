

import React, { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import closedEyeIcon from "../assets/eyeClosedIcon.svg"
import eyeIcon from "../assets/eyeIconVariant.svg"
import checkIcon from "../assets/checkbox.svg"
import checkActiveIcon from "../assets/checkboxActive.svg"

const Login = () => {
  const [toggle, setToggle] = useState(true)
  const [check, setCheck] = useState(false)

  const handleSubmit = () => {}
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow my-12">
        <h2 className="pl-[105px] max-w-7xl m-auto text-left text-neutral-normal text-[32px] font-bold">
          Iniciar sesión
        </h2>
        <article className="max-w-[890px] rounded-lg m-auto py-[3.5rem] justify-center flex items-start bg-primary-dark-active my-10">
          <form className="flex flex-col w-full items-center justify-center gap-12">
            <div className="flex gap-6">
              <div className="flex flex-col gap-2 w-[309px]">
                <label htmlFor="" className="text-sm text-left px-2">
                  Email
                </label>
                <input
                  className="px-4 py-[10px] h-[42px] placeholder:text-neutral-dark-hover text-neutral-darker outline-none bg-neutral-normal rounded-lg border-2 border-primary-dark"
                  type="text"
                  placeholder="Input"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 w-[309px]">
                <label htmlFor="" className="text-sm text-left px-2">
                  Email
                </label>
                <div className="flex px-4 py-[10px] h-[42px] gap-[10px] bg-neutral-normal rounded-lg border-2 border-primary-dark ">
                  <input
                    className="placeholder:text-neutral-dark-hover text-neutral-darker bg-inherit w-full outline-none"
                    type={toggle ? "password" : "text"}
                    placeholder="Input"
                    required
                  />
                  <button type="button" onClick={() => setToggle(!toggle)}>
                    {toggle ? (
                      <img src={closedEyeIcon} />
                    ) : (
                      <img src={eyeIcon} />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex  gap-12">
                <button
                  type="submit"
                  className="px-[18px] py-[13py] bg-primary-normal rounded-lg h-[50px]"
                >
                  REGISTRARSE
                </button>
                <div className="flex items-center justify-center gap-6">
                  <button
                    onClick={() => {
                      setCheck(!check)
                    }}
                  >
                    {check ? (
                      <img src={checkActiveIcon} />
                    ) : (
                      <img src={checkIcon} />
                    )}
                  </button>
                  <p>RECORDARME</p>
                </div>
              </div>
              <p>¿Olvidaste la contraseña?</p>
            </div>
          </form>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default Login
