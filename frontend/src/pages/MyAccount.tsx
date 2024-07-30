import Footer from "../components/Footer";
import Header from "../components/Header";
import NavMiCuenta from "../components/NavMiCuenta";
import Orders from "../components/Orders";
import InvoiceData from "../components/InvoiceData";
import PaymentData from "../components/PaymentData";
import MyData from "../components/MyData";
import { useRoute } from "wouter";
// import useStore from "../zustand/store";

function MyAccount() {
  // VIAJANDO LA INFORMACION CON LA RUTA
  // const { state } = useStore();
  // console.log(state);

  const [pathOrder] = useRoute('/myAccount/pedidos');
  const [pathCuenta] = useRoute('/myAccount/cuenta');
  const [pathInvoice] = useRoute('/myAccount/facturacion');
  const [pathPaymant] = useRoute('/myAccount/pagos');


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow my-12">
        <h3 className="pl-[105px] max-w-7xl m-auto text-left text-neutral-normal text-[32px] font-bold">Mi cuenta</h3>
        <article className="max-w-7xl m-auto w-full gap-12 justify-center flex items-start">
          <section className="w-[400px] my-10 py-6 bg-sky-900 rounded-lg flex justify-center">
            <NavMiCuenta />
          </section>
          <section className="w-[615px]">
            {pathOrder ? <Orders />
              : (pathCuenta ? <MyData />
                : (pathInvoice ? <InvoiceData />
                  : (pathPaymant ? <PaymentData />
                    : '')))}
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default MyAccount;