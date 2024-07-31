
import React, { useState } from 'react';
import Footer from '../components/Footer';

export default function Login2() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisterClick = () => {
    console.log('Botón "REGISTRARSE" presionado');
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleContinueAsGuest = () => {
    // se agrega funcionalidad  al hacer clic al button.
    alert('Continuar como invitado');
  };

  return (
    <div className=" bg-gray-800 ">
        {/* resto 1175-441=734 */}
      <div className="w-[1280px] h-[734px] relative bg-gray-800  ">  
        <div className="w-[159px] h-[138px] left-[104px] top-[64px] absolute bg-zinc-300 " >
        <img
           className="w-[159px] h-[138px]   "
           alt="Iconamoon arrow up"
           src="/src/assets/img/logluz.png"
         /> 
        </div>
        <div className="h-[428px] left-[287px] top-[242px] absolute flex-col justify-start items-start gap-8 inline-flex">
          <div className="self-stretch text-white text-2xl font-semibold font-['Open Sans'] leading-[28.80px] -ml-[172px]">
            Iniciar sesión
          </div>
          <div className="rounded-lg flex-col justify-center items-center gap-8 flex">
            <div className="flex-col justify-start items-center gap-6 flex">
              <div className="h-[73px] flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch h-[73px] flex-col justify-start items-start gap-2 flex">
                  <div className="px-2 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-50 text-sm font-normal font-['Open Sans'] leading-[16.80px]">
                      Email
                    </div>
                  </div>
                  <div className="self-stretch w-[341px] h-12 px-4 py-2.5 bg-neutral-200 rounded-lg border-2 border-sky-500 justify-start items-center gap-2.5 inline-flex">
                    <input
                      type="email"
                      className="grow shrink basis-0 text-zinc-600 text-base font-normal font-['Open Sans'] bg-transparent outline-none"
                      placeholder="Introduce tu email"
                    />
                  </div>
                </div>
              </div>
              <div className="h-[73px] flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch h-[73px] flex-col justify-start items-start gap-2 flex">
                  <div className="px-2 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-50 text-sm font-normal font-['Open Sans'] leading-[16.80px]">
                      Contraseña
                    </div>
                  </div>
                  <div className="self-stretch w-[341px] h-12 px-4 py-2.5 bg-neutral-200 rounded-lg border-2 border-sky-500 justify-start items-center gap-2.5 inline-flex">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="grow shrink basis-0 text-zinc-600 text-base font-normal font-['Open Sans'] bg-transparent outline-none"
                      placeholder="Introduce tu contraseña"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="text-zinc-600 text-base font-normal font-['Open Sans'] bg-transparent outline-none"
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13.875 18.825A10.95 10.95 0 0112 19c-5.523 0-10-3.995-10-7 0-1.472.746-2.83 2-3.855m10.055 6.085A3.978 3.978 0 0112 15c-2.21 0-4-1.79-4-4 0-.45.074-.888.214-1.298m2.908 4.687a3.978 3.978 0 01-.188-1.389 4 4 0 014-4c.34 0 .672.045.986.13m2.77-2.768A10.94 10.94 0 0112 5c-5.523 0-10 3.995-10 7 0 1.472.746 2.83 2 3.855m13.086-1.403a3.978 3.978 0 01-.214 1.298m-.7 2.694a3.978 3.978 0 01-2.24 1.092"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3l18 18"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 19c5.523 0 10-3.995 10-7 0-3.005-4.477-7-10-7S2 8.995 2 12c0 3.005 4.477 7 10 7z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 15a3 3 0 110-6 3 3 0 010 6z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-6 flex">
              <div className="self-stretch h-[124px] flex-col justify-center items-center gap-6 flex">
                <button
                  onClick={handleRegisterClick}
                  className="w-[341px] h-[50px] px-[18px] py-[13px] bg-sky-500 rounded-lg justify-center items-center gap-2.5 inline-flex hover:bg-cyan-600"
                >
                  <div className="text-neutral-50 text-base font-semibold font-['Open Sans']">
                    REGISTRARSE
                  </div>
                </button>
                <div className="w-44 h-[50px] justify-center items-center gap-4 inline-flex">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                    className="w-6 h-6 relative cursor-pointer bg-gray-800 border-white"
                  />
                  <div className="text-white text-base font-semibold font-['Open Sans']">
                    RECORDARME
                  </div>
                </div>
              </div>
              <div className="self-stretch text-center text-neutral-50 text-sm font-normal font-['Open Sans'] leading-[16.80px]">
                ¿Olvidaste la contraseña?
              </div>
            </div>
          </div>
        </div>


        <div >

        
        <div className="w-[342px] h-[313px] flex-col justify-start items-start gap-[26px] inline-flex ml-[555px] mt-[240px]">
      <div className="self-stretch w-[342px] h-[29px] text-white text-2xl font-semibold font-['Open Sans'] leading-[28.80px] -ml-[30px]">
        Continuar como invitado
      </div>
      <div className="self-stretch h-[258px] flex-col justify-start items-center gap-8 flex">
        <div className="self-stretch w-[342px] h-[176px] text-white text-base font-normal font-['Open Sans'] text-justify">
          Puedes comprar como invitado. Solo deberás proporcionar los datos necesarios para realizar tu pedido.
          <br /><br />
          Si deseas, al finalizar la compra, puedes registrarte y guardar tu información para futuras compras.
          <br />
        </div>
        <button
          onClick={handleContinueAsGuest}
          className="w-[341px] h-[50px] px-[18px] py-[13px] hover:bg-cyan-600 bg-sky-500 rounded-lg justify-center items-center gap-2.5 inline-flex"
        >
          <div className="text-neutral-50 text-base font-semibold font-['Open Sans']">
            CONTINUAR COMO INVITADO
          </div>
        </button>
      </div>
    </div>
    </div>
      </div>
      <Footer/>
     
    </div>
   
  );
}