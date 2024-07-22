function MyData() {
  return (
    <div className="mt-[41px] ml-28">
      <h1 className="text-left text-2xl font-semibold leading-[28.80px]">Datos de usuario</h1>
      <form>
        {[
          ['Nombre completo'],
          ['Nombre visible'],
          ['Email'],
        ].map(([label], i) => (
          <div key={i} className="flex flex-col gap-2 justify-start mt-6">
            <label className="text-sm text-left px-2">{label}</label>
            <input
              type={label === 'Email' ? 'email' : 'text'}
              placeholder="Input"
              className="px-4 py-[10px] h-[42px] placeholder:text-neutral-dark-hover text-neutral-darker outline-none bg-neutral-normal rounded-lg border-2 border-primary-dark"
              required
            />
          </div>
        ))}

        <h1 className="text-left text-2xl font-semibold leading-[28.80px] mt-14">Cambio de contraseña</h1>
        {[
          ['Contraseña actual'],
          ['Nueva contraseña'],
          ['Comfirmar nueva contraseña'],
        ].map(([label], i) => (
          <div key={i} className="flex flex-col gap-2 justify-start mt-6">
            <label className="text-sm text-left px-2">{label}</label>
            <input
              type={'text'}
              placeholder="Input"
              className="px-4 py-[10px] h-[42px] placeholder:text-neutral-dark-hover text-neutral-darker outline-none bg-neutral-normal rounded-lg border-2 border-primary-dark"
              required
            />
          </div>
        ))}
        <div className="justify-start items-center flex mt-12">
          <button className="hover:bg-zinc-600/75 rounded-lg bg-zinc-600 px-[10px] h-[50px] text-stone-300 text-base font-semibold ">GUARDAR CAMBIOS </button>
        </div>
      </form>
    </div>
  )
}

export default MyData