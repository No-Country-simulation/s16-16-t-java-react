import logo from '../assets/Logo.svg';

function Footer() {
  return (
    <footer className="font-openSans flex flex-col bg-primary-darker h-30 w-full">
      <div className="max-w-7xl w-[1072px] m-auto px-4 justify-between flex py-16">
        <section className="flex flex-col gap-4">
          <div className="w-16 h-16">
            <a href='/'><img src={logo} className="w-full h-full object-cover rounded-lg" /></a>
          </div>
          <p className="text-base text-left w-80 text-neutral-50">
            Ofrecemos una amplia gama de productos personalizados, materiales de alta calidad y servicios a medida para empresas y particulares. Innovación y creatividad en cada impresión.
          </p>
        </section>
        <section className="flex gap-8">
          <div className="text-left flex flex-col gap-3">
            <h3 className="text-white text-lg font-semibold leading-normal">Servicios</h3>
            <ul className="text-neutral-normal-active">
              <li className="text-sm leading-4">Trabajos a Medida</li>
            </ul>
          </div>
          <div className="text-left flex flex-col gap-3">
            <h3 className="text-white text-lg font-semibold leading-normal">Productos</h3>
            <ul className="text-neutral-normal-active flex flex-col gap-2">
              {[
                ['Accesorios',],
                ['Decoracion',],
                ['Figuras de Acción'],
                ['Industrial'],
                ['Insumos'],
                ['Mates'],
                ['Oficina'],
                ['Productos Pesonalizados'],
              ].map(([option]) => (
                <li key={option} className="text-sm leading-4">{option}</li>
              ))}
            </ul>
          </div>
          <div className="text-left flex flex-col gap-3">
            <h3 className="text-white text-lg font-semibold leading-normal">Ayuda</h3>
            <ul className="text-neutral-normal-active flex flex-col gap-2">
              <li className="text-sm leading-4">Contacto</li>
              <li className="text-sm leading-4">Guías y Tutoriales</li>
              <li className="text-sm leading-4">Contacto</li>
            </ul>
          </div>
        </section>
      </div>
      <div className="max-w-7xl w-[1072px] m-auto flex justify-between px-4 py-8 border-t-2 border-neutral-50 text-primary-normal">
        <p>&#169; 2024</p>
        <p>Equipo de Desarrollo</p>
      </div>
    </footer>
  )
}

export default Footer