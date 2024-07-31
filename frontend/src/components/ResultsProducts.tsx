import ProductCard from './ProductCard'
import BillEmpty from '../assets/Bill_empty.png';
import { useEffect } from 'react';
import { PropProduct } from '../zustand/interfaces';
import useStore from '../zustand/store';

type ProductsProps = {
  countProducts: (product: number) => void
  selectCategories: string[]
  orderProduct: string
}

const ResultsProducts: React.FC<ProductsProps> = ({ selectCategories, countProducts, orderProduct }) => {
  const { maxPrice, minPrice, addToCart, products, loading } = useStore();


  // console.log(minPrice, maxPrice);
  // FILTRADO GENERAL
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectCategories.length < 1 || selectCategories.includes(product.categoria.nombre);
    const priceMatch = product.precio >= minPrice && product.precio <= maxPrice;
    return categoryMatch && priceMatch;
  });

  // CONTEO DE LOS PRODUCTOS PARA ENVIARLOS AL COMPONENTE PADRE
  useEffect(() => {
    countProducts(filteredProducts.length);
  }, [filteredProducts, countProducts]);


  // Ordenar productos por precio
  const sortedProducts: PropProduct[] = [...filteredProducts].sort((a, b) => {
    if (orderProduct === 'alto') {
      return a.precio - b.precio; // Orden ascendente
    } else if (orderProduct === 'bajo') {
      return b.precio - a.precio; // Orden descendente
    }
    return 0;
  });

  return (
    <div>
      {loading ? (
        <div className="flex flex-row gap-2 items-center justify-center mt-20">
          <div className="w-12 h-12 rounded-full bg-primary-normal animate-bounce [animation-delay:.7s]"></div>
          <div className="w-12 h-12 rounded-full bg-primary-normal animate-bounce [animation-delay:.3s]"></div>
          <div className="w-12 h-12 rounded-full bg-primary-normal animate-bounce [animation-delay:.7s]"></div>
        </div>
      ) : (
        <article className="mt-[17px] grid grid-cols-3 gap-5">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.imageUrl || ''}
                title={product.nombre}
                addToCart={() => addToCart(product)}
                price={`$ ${product.precio}`}
                id={product.id}
              />
            ))
          ) : (
            <section className='flex flex-col items-center gap-7 w-[50rem]'>
              <img src={BillEmpty} className='h-52 w-52' />
              <h1 className='w-[50rem] px-32 text-2xl'>No se encontraron resultados que coincidan con los filtros</h1>
            </section>
          )}
        </article>
      )}
    </div>
  )
}

export default ResultsProducts;
