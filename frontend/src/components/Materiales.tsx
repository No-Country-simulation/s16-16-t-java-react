import headerTable from '../assets/img/Header.png';
import table from '../assets/img/Frame 888.png';
import to from '../assets/img/to.png';

export default function Materiales() {
  return (
    <>
      <section className="mt-16 max-w-7xl m-auto">
        <div className="ml-[105px] flex items-center gap-3 mb-8">
          <span className="bg-primary-dark h-8 w-2 block rounded-xl"></span>
          <h1 className="text-neutral-50 text-2xl font-semibold text-left">
            Tabla comparativa de materiales 3D
          </h1>
        </div>
        <img className="mx-auto" src={headerTable} alt="Texto alternativo de la imagen" />
        <img className="mx-auto -mt-1" src={table} alt="Texto alternativo de la imagen" />
        <img className="mt-3 mr-[105px] mx-auto" src={to} alt="Texto alternativo de la imagen" />
      </section>
    </>
  )
}



