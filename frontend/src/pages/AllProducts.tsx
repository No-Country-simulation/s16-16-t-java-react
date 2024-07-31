import Header from "../components/Header";
import ClosseSquare from '../assets/close-square.svg';
import Footer from "../components/Footer";
import FilterCategories from "../components/FilterCategories";
import ResultsProducts from "../components/ResultsProducts";
import OrderProducts from "../components/OrderProducts";
import { useState } from "react";
import useStore from "../zustand/store";

function AllProducts() {
  const { selectedCategory, removeCategory } = useStore();
  const [lengthProduct, setLengthProduct] = useState<number>(0);
  const [orderCategory, setOrderCategory] = useState<string>('');

  const handleOrder = (order: string) => {
    setOrderCategory(order);
  }

  console.log(selectedCategory)
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow m-auto font-openSans">
        <article className="relative max-w-7xl m-auto flex justify-center gap-8 py-12">
          <div>
            <FilterCategories
              selectCategories={selectedCategory}
            />
          </div>
          <section className="w-[798px] flex flex-col">
            <h1 className="text-left text-2xl font-semibold leading-[28.80px] border-b border-neutral-400">
              {selectedCategory[selectedCategory.length - 1] ? `"${selectedCategory[selectedCategory.length - 1]}"` : '"Todos"'}
            </h1>
            <div className="mt-4 flex gap-10 justify-between">
              <div className="flex gap-4 w-full">
                <p className="flex-none text-left">{lengthProduct} Resultados</p>
                <section className="flex grow gap-3 flex-wrap">
                  {selectedCategory.map((result, i) => (
                    <section key={i} className=" h-[26px] p-1 bg-primary-normal rounded-lg border border-neutral-200 justify-center items-center gap-2.5 flex">
                      <p className="text-neutral-50 text-sm font-normal font-['Open Sans'] leading-[16.80px]">{result}</p>
                      <button
                        className="w-4 h-4 relative"
                        onClick={() => removeCategory(result)}
                      >
                        <img src={ClosseSquare} alt="Close Square" />
                      </button>
                    </section>
                  ))}
                </section>
              </div>
              <OrderProducts
                orderProduct={(stringOrder) => handleOrder(stringOrder)}
              />
            </div>
            <ResultsProducts
              orderProduct={orderCategory}
              selectCategories={selectedCategory}
              countProducts={(product) => setLengthProduct(product)}
            />
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default AllProducts;
