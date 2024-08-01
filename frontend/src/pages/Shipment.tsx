import { useState, ChangeEvent } from 'react';
import Footer from '../components/Footer';
import { Link } from 'wouter';
import PriceCart from '../components/PriceCart';

export default function Shipment() {
  const [personalData, setPersonalData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  });

  const [shippingData, setShippingData] = useState({
    codigoPostal: '',
    direccion: '',
    localidad: '',
    provincia: ''
  });

  const [userType, setUserType] = useState('particular');

  const handlePersonalDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalData({ ...personalData, [name]: value });
  };

  const handleShippingDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingData({ ...shippingData, [name]: value });
  };

  const handleUserTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserType(e.target.value);
  };

  const handleBack = () => {
    // Lógica para el botón "Volver"
    console.log('Volver');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-grow m-auto w-[1280px] h-[1143px] relative">
      <Link to="/" className="w-[159px] h-[138px] left-[104px] top-[64px] absolute bg-zinc-300 " >
        <img
           className="w-[159px] h-[138px]   "
           alt="Iconamoon arrow up"
           src="/src/assets/img/logluz.png"
         /> 
        </Link>        <div className="left-[285px] top-[242px] absolute justify-start items-center gap-16 inline-flex">
          <div className="justify-start items-center gap-2 flex">
            <input
              type="radio"
              name="userType"
              value="particular"
              checked={userType === 'particular'}
              onChange={handleUserTypeChange}
              className="w-4 h-4 relative bg-sky-500 rounded-full border border-stone-300"
            />
            <div className="text-white text-lg font-normal font-['Open Sans'] leading-snug">Soy Particular</div>
          </div>
          <div className="justify-start items-center gap-2 flex">
            <input
              type="radio"
              name="userType"
              value="empresa"
              checked={userType === 'empresa'}
              onChange={handleUserTypeChange}
              className="w-4 h-4 relative bg-sky-500 rounded-full border border-stone-300"
            />
            <div className="text-white text-lg font-normal font-['Open Sans'] leading-snug">Soy Empresa</div>
          </div>
        </div>
        <div className="left-[378px] top-[64px] absolute justify-start items-center gap-6 inline-flex">
          

          <div className="justify-start items-center gap-2 flex">
            <div className="text-sky-500 text-xl font-semibold font-['Open Sans'] leading-normal">Envío</div>
            <img
              className="w-6 h-6 relative"
              alt="Iconamoon arrow up"
              src="/src/assets/img/chevron-right-roundedsb.png"
            />
          </div>
          <div className="justify-start items-center gap-2 flex">
            <div className="text-white text-xl font-semibold font-['Open Sans'] leading-normal">Método de Pago</div>
            <img
              className="w-6 h-6 relative"
              alt="Iconamoon arrow up"
              src="/src/assets/img/chevron-right-roundeds.png"
            />
          </div>
          <div className="justify-start items-center gap-2 flex">
            <div className="text-white text-xl font-semibold font-['Open Sans'] leading-normal">Resumen de Compra</div>
          </div>


        </div>

        <div className="w-[1279px] px-[470px] pt-6 left-[1px] top-[1005px] absolute border-t border-sky-500 justify-center items-center gap-52 inline-flex">
          <button
            onClick={handleBack}
            className="hover:border-primary-dark-active w-[180px] h-[50px] px-[18px] py-[13px] rounded-lg border-2 border-sky-500 justify-center items-center gap-[37px] flex"
          >
            <div className="text-neutral-50 text-base font-semibold font-['Open Sans'] w-[176px]">VOLVER</div>
          </button>

          <PriceCart />

          <Link
            to='/payment'
            className="w-44 h-[50px] px-[18px] py-[13px] bg-sky-500 rounded-lg justify-center items-center gap-2.5 flex hover:bg-cyan-600"
          >
            <div className="text-neutral-50 text-base font-semibold font-['Open Sans'] w-[176px] ">CONTINUAR</div>
          </Link>
        </div>

        <div className="w-[706px] h-[645px] left-[287px] top-[296px] absolute">
          <div className="w-[706px] h-[218px] left-0 top-0 absolute">
            <div className="w-[341px] -left-[85px]  top-0 absolute text-white text-xl font-semibold font-['Open Sans'] leading-normal">Datos Personales</div>
            <div className="w-[341px] h-[73px] left-0 top-[48px] absolute flex-col justify-start items-start gap-1 inline-flex">
              <div className="self-stretch h-[73px] flex-col justify-start items-start gap-2 flex">
                <div className="px-2 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-neutral-50 text-sm font-normal font-['Open Sans'] leading-[16.80px]">Nombre</div>
                </div>
                <div className="self-stretch h-12 px-4 py-2.5 bg-neutral-200 rounded-lg border-2 border-sky-500 justify-start items-center gap-2.5 inline-flex">
                  <input
                    type="text"
                    name="nombre"
                    value={personalData.nombre}
                    onChange={handlePersonalDataChange}
                    className="grow shrink basis-0 text-zinc-600 text-base font-normal font-['Open Sans'] bg-transparent outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="w-[341px] h-[73px] left-0 top-[145px] absolute flex-col justify-start items-start gap-1 inline-flex">
              <div className="self-stretch h-[73px] flex-col justify-start items-start gap-2 flex">
                <div className="px-2 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-neutral-50 text-sm font-normal font-['Open Sans'] leading-[16.80px]">Email</div>
                </div>
                <div className="self-stretch h-12 px-4 py-2.5 bg-neutral-200 rounded-lg border-2 border-sky-500 justify-start items-center gap-2.5 inline-flex">
                  <input
                    type="email"
                    name="email"
                    value={personalData.email}
                    onChange={handlePersonalDataChange}
                    className="grow shrink basis-0 text-zinc-600 text-base font-normal font-['Open Sans'] bg-transparent outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="w-[341px] h-[73px] left-[365px] top-[48px] absolute flex-col justify-start items-start gap-1 inline-flex">
              <div className="self-stretch h-[73px] flex-col justify-start items-start gap-2 flex">
                <div className="px-2 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-neutral-50 text-sm font-normal font-['Open Sans'] leading-[16.80px]">Apellido</div>
                </div>
                <div className="self-stretch h-12 px-4 py-2.5 bg-neutral-200 rounded-lg border-2 border-sky-500 justify-start items-center gap-2.5 inline-flex">
                  <input
                    type="text"
                    name="apellido"
                    value={personalData.apellido}
                    onChange={handlePersonalDataChange}
                    className="grow shrink basis-0 text-zinc-600 text-base font-normal font-['Open Sans'] bg-transparent outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="w-[341px] h-[73px] left-[365px] top-[145px] absolute flex-col justify-start items-start gap-1 inline-flex">
              <div className="self-stretch h-[73px] flex-col justify-start items-start gap-2 flex">
                <div className="px-2 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-neutral-50 text-sm font-normal font-['Open Sans'] leading-[16.80px]">Teléfono/Celular</div>
                </div>
                <div className="self-stretch h-12 px-4 py-2.5 bg-neutral-200 rounded-lg border-2 border-sky-500 justify-start items-center gap-2.5 inline-flex">
                  <input
                    type="tel"
                    name="telefono"
                    value={personalData.telefono}
                    onChange={handlePersonalDataChange}
                    className="grow shrink basis-0 text-zinc-600 text-base font-normal font-['Open Sans'] bg-transparent outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[706px] h-[145px] left-0 top-[250px] absolute">
            <div className="w-[341px] -left-[85px] top-0 absolute text-white text-xl font-semibold font-['Open Sans'] leading-normal">Método de Envío</div>
            <div className="w-[706px] h-6 left-0 top-[121px] absolute justify-between items-center inline-flex">
              <div className="text-neutral-200 text-sm font-normal font-['Open Sans'] leading-[16.80px]">Cambiar método de envío</div>
              <img
                        className="w-6 h-6 relative cursor-pointer"
                        alt="Iconamoon arrow up"
                        src="/src/assets/img/chevron-right-rounded env.png"
                      />
            </div>
            <div className="w-[706px] h-[78px] p-4 left-0 top-[34px] absolute rounded-lg border border-neutral-200 justify-start items-center gap-8 inline-flex">
              <div className="justify-start items-center gap-4 flex">
                <div className="w-4 h-4 relative">
                <input
                  type="radio"
                  // name="userType"
                  value="domicilio"
                  // checked={userType === 'domicilio'}
                  // onChange={handleUserTypeChange}
                  className="w-4 h-4 relative bg-sky-500 rounded-full border border-stone-300"
                />
                </div>
                <div className="p-2.5 bg-sky-500 rounded-2xl border border-zinc-600 justify-start items-center gap-2.5 flex">
                  <div className="w-6 h-6 px-0.5 py-1 justify-center items-center flex">
                    <div className="w-5 h-4 relative">
                      <img
                        className="w-6 h-6 relative"
                        alt="Iconamoon arrow up"
                        src="/src/assets/img/Groupcar.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[186px] flex-col justify-start items-start gap-0.5 inline-flex">
                <div className="self-stretch text-neutral-50 text-base font-semibold font-['Open Sans']">Envío Clásico - Domicilio</div>
                <div className="self-stretch text-stone-300 text-lg font-semibold font-['Open Sans'] leading-snug">$ 6.000</div>
              </div>
            </div>
          </div>
          <div className="w-[341px] -left-[93px] top-[427px] absolute text-white text-xl font-semibold font-['Open Sans'] leading-normal">Datos del Envío</div>
          <div className="w-[341px] h-[73px] left-0 top-[475px] absolute flex-col justify-start items-start gap-1 inline-flex">
            <div className="self-stretch h-[73px] flex-col justify-start items-start gap-2 flex">
              <div className="px-2 justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-50 text-sm font-normal font-['Open Sans'] leading-[16.80px]">Código Postal</div>
              </div>
              <div className="self-stretch h-12 px-4 py-2.5 bg-neutral-200 rounded-lg border-2 border-sky-500 justify-start items-center gap-2.5 inline-flex">
                <input
                  type="text"
                  name="codigoPostal"
                  value={shippingData.codigoPostal}
                  onChange={handleShippingDataChange}
                  className="grow shrink basis-0 text-zinc-600 text-base font-normal font-['Open Sans'] bg-transparent outline-none"
                />
              </div>
            </div>
          </div>
          <div className="w-[341px] h-[73px] left-0 top-[572px] absolute flex-col justify-start items-start gap-1 inline-flex">
            <div className="self-stretch h-[73px] flex-col justify-start items-start gap-2 flex">
              <div className="px-2 justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-50 text-sm font-normal font-['Open Sans'] leading-[16.80px]">Dirección</div>
              </div>
              <div className="self-stretch h-12 px-4 py-2.5 bg-neutral-200 rounded-lg border-2 border-sky-500 justify-start items-center gap-2.5 inline-flex">
                <input
                  type="text"
                  name="direccion"
                  value={shippingData.direccion}
                  onChange={handleShippingDataChange}
                  className="grow shrink basis-0 text-zinc-600 text-base font-normal font-['Open Sans'] bg-transparent outline-none"
                />
              </div>
            </div>
          </div>
          <div className="w-[341px] h-[73px] left-[365px] top-[572px] absolute flex-col justify-start items-start gap-1 inline-flex">
            <div className="self-stretch h-[73px] flex-col justify-start items-start gap-2 flex">
              <div className="px-2 justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-50 text-sm font-normal font-['Open Sans'] leading-[16.80px]">Localidad</div>
              </div>
              <div className="self-stretch h-12 px-4 py-2.5 bg-neutral-200 rounded-lg border-2 border-sky-500 justify-start items-center gap-2.5 inline-flex">
                <input
                  type="text"
                  name="localidad"
                  value={shippingData.localidad}
                  onChange={handleShippingDataChange}
                  className="grow shrink basis-0 text-zinc-600 text-base font-normal font-['Open Sans'] bg-transparent outline-none"
                />
              </div>
            </div>
          </div>
          <div className="w-[341px] h-[73px] left-[365px] top-[475px] absolute flex-col justify-start items-start inline-flex">
           
              <div className="self-stretch h-[73px] flex-col justify-start items-start gap-2 flex">
                <div className="px-2 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-neutral-50 text-sm font-normal font-['Open Sans'] leading-[16.80px]">Provincia</div>
                </div>
                <div className="self-stretch h-12 px-4 py-2.5 bg-neutral-200 rounded-lg border-2 border-sky-500 justify-start items-center gap-2.5 inline-flex">
                  <input
                    type="text"
                    name="provincia"
                    value={shippingData.provincia}
                    onChange={handleShippingDataChange}
                    className="grow shrink basis-0 text-zinc-600 text-base font-normal font-['Open Sans'] bg-transparent outline-none"
                  />
                </div>
              </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
