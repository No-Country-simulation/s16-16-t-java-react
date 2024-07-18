import Footer from "../components/Footer"
import Header from "../components/Header"
import NavMiCuenta from "../components/NavMiCuenta"
import ProductsEmpty from "../components/ProductsEmpty";

function MyAccount() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow my-12">
        <h3 className="pl-[105px] max-w-7xl m-auto text-left text-neutral-normal text-[32px] font-bold">Mi cuenta</h3>
        <article className="max-w-7xl m-auto w-full flex gap-12 items-center justify-center">
          <NavMiCuenta />
          <ProductsEmpty />
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default MyAccount