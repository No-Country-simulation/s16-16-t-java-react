// import product from '../assets/product.png';
// import product1 from '../assets/mate-messi-10.png';
// import product2 from '../assets/mate-angel.png';
// import product3 from '../assets/mate-stich.png';
import ProductCard from './ProductCard'
import apiJSON from '../zustand/api.json';

function ResultsProducts() {
  return (
    <article className="mt-[17px] grid grid-cols-3 gap-5">
      {apiJSON.map((p, i) => (
        <ProductCard key={i} image={p.imagenes[0].data} title={p.nombre} price={p.precio} />
      ))}
      {/* <ProductCard image={product1} title='Mate Messi - 10' price='$9.500' />
      <ProductCard image={product2} title='Mate Angel' price='$8.500' />
      <ProductCard image={product3} title='Mate Stich' price='$8.500' />
      <ProductCard image={product} title='Figura BB-8 - Star Wars' price='$4.900' />
      <ProductCard image={product1} title='Mate Messi - 10' price='$9.500' />
      <ProductCard image={product2} title='Mate Angel' price='$8.500' />
      <ProductCard image={product3} title='Mate Stich' price='$8.500' />
      <ProductCard image={product} title='Figura BB-8 - Star Wars' price='$4.900' /> */}
    </article>
  )
}

export default ResultsProducts