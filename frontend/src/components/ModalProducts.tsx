import iconoCancelar from '../assets/icono-cancelar.svg';
import DetailsProducts from './DetailsProducts'

interface PropsModalProducts {
  setState: (state: boolean) => void
}

const ModalProducts: React.FC<PropsModalProducts> = ({ setState }) => {
  return (
    <section className="top-0 left-0 fixed backdrop-blur-sm h-screen w-screen flex items-center justify-center">
      <article className="relative px-24 py-14 flex items-center justify-center bg-primary-darker rounded-lg">
        <div className="flex flex-col">
          <div
            onClick={() => setState(false)}
            className="absolute right-5 top-5 cursor-pointer"
          >
            <img src={iconoCancelar} className="h-10 w-10 object-cover" />
          </div>
          <section className="select-none flex gap-6 mb-6">
            {[
              ['Producto'],
              ['Fecha de entregaam'],
              ['N° pedido'],
              ['N° seguimiento'],
              ['Estado']
            ].map(([title]) => (
              <div key={title} className="w-[159px] h-12 flex items-center justify-center bg-primary-normal rounded-lg">
                <p className="text-neutral-50 font-semibold">{title}</p>
              </div>
            ))}
          </section>
          <section className="flex flex-col gap-6 max-h-[400px] overflow-hidden overflow-y-auto">
            <DetailsProducts name={'Mate Messi - 10'} stock={1} date={'dd/mm/aaaa'} nrPedido={'-----------'} nrSeguimiento={'-----------'} state={'Enviado/entregado'} />
            <DetailsProducts name={'Mate Messi - 10'} stock={1} date={'dd/mm/aaaa'} nrPedido={'-----------'} nrSeguimiento={'-----------'} state={'Enviado/entregado'} />
          </section>
        </div>
      </article>
    </section>
  )
}

export default ModalProducts