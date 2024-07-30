import ProductCard from './ProductCard'
// import apiJSON from '../zustand/productos.json';
import BillEmpty from '../assets/Bill_empty.png';
import { PropProduct } from '../zustand/interfaces';
import { useEffect, useState } from 'react';
import { transformProducts } from '../helpers/transformProducts';
import useStore from '../zustand/store';

type ProductsProps = {
  countProducts: (product: number) => void
  selectCategories: string[]
  orderProduct: string
}

const ResultsProducts: React.FC<ProductsProps> = ({ selectCategories, countProducts, orderProduct }) => {
  const { maxPrice, minPrice } = useStore();
  const [products, setProducts] = useState<PropProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://spring-postgres-ds9s.onrender.com/productos');
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
        const data: PropProduct[] = await response.json();

        // obtener los productos pero con la imagen transformada
        setProducts(transformProducts(data));
      } catch (e) {
        console.error('Error al obtener los productos:', e);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [])

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
            sortedProducts.map(product => (
              <ProductCard
                key={product.id}
                image={product.imageUrl || ''}
                title={product.nombre}
                price={`$ ${product.precio}`}
              />
            ))
          ) : (
            <section className='flex flex-col items-center gap-7 w-[50rem]'>
              <img src={BillEmpty}  className='h-52 w-52'/>
              <h1 className='w-[50rem] px-32 text-2xl'>No se encontraron resultados que coincidan con los filtros</h1>
            </section>
          )}
        </article>
      )}
    </div>
  )
}

export default ResultsProducts;
