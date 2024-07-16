import Header from "../components/Header";
import ClosseSquare from '../assets/close-square.svg';
import Footer from "../components/Footer";
import FilterCategories from "../components/FilterCategories";
import ResultsProducts from "../components/ResultsProducts";
import OrderProducts from "../components/OrderProducts";

function AllProducts() {
  const searchOfResults = ['Mate'];
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow m-autos font-openSans">
        <article className="relative max-w-7xl m-auto flex justify-center gap-8 py-12">
          <div>
            <FilterCategories />
          </div>
          <section className="w-[798px] flex flex-col">
            <h1 className="text-left text-2xl font-semibold leading-[28.80px] border-b border-neutral-400">“Mate”</h1>
            <div className="mt-4 flex gap-10 justify-between">
              <div className="flex gap-6">
                <p className="text-left">8 Resultados</p>
                
                {searchOfResults.map((result, i) => (
                  <section key={i} className="w-[74px] h-[26px] p-1 bg-primary-normal rounded-lg border border-neutral-200 justify-center items-center gap-2.5 flex">
                    <p className="text-neutral-50 text-sm font-normal font-['Open Sans'] leading-[16.80px]">{result}</p>
                    <button className="w-4 h-4 relative"><img src={ClosseSquare} alt="Close Square" /></button>
                  </section>
                ))}

              </div>
              <OrderProducts />
            </div>
            <ResultsProducts />
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default AllProducts;
