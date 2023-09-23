import React from 'react';
import SideNav from './SideNav/SideNav';
import Baner from './Baner/Baner';
import styles from './Home.module.css';
import { PRODUCTS_GET } from '../../api';
import ProductsNav from './Products/ProductsNav';

// const products = [
//   { price: 33.37, description: 'Produto 1', rating: 5 },
//   { price: 64.27, description: 'Produto 2', rating: 5 },
//   { price: 36.6, description: 'Produto 3', rating: 2 },
//   { price: 71.82, description: 'Produto 4', rating: 4 },
//   { price: 73, description: 'Produto 5', rating: 5 },
//   { price: 15.94, description: 'Produto 6', rating: 3 },
//   { price: 78.49, description: 'Produto 7', rating: 5 },
//   { price: 11.69, description: 'Produto 8', rating: 5 },
//   { price: 36.52, description: 'Produto 9', rating: 1 },
//   { price: 15.86, description: 'Produto 10', rating: 5 },
//   { price: 27.63, description: 'Produto 11', rating: 1 },
//   { price: 13.78, description: 'Produto 12', rating: 1 },
//   { price: 91.13, description: 'Produto 13', rating: 5 },
//   { price: 66.19, description: 'Produto 14', rating: 1 },
//   { price: 33.07, description: 'Produto 15', rating: 5 },
//   { price: 17.69, description: 'Produto 16', rating: 4 },
// ];

const Home = () => {
  const [products, setProduct] = React.useState(null);
  React.useEffect(() => {
    async function fetchProducts() {
      const { url, options } = PRODUCTS_GET();
      const data = await fetch(url, options);
      const json = await data.json();
      setProduct(json);
      console.log(json);
    }
    fetchProducts();
  }, []);

  return (
    <section className="container">
      <div className={styles.mainWrapper}>
        <SideNav />
        <Baner />
      </div>
      <div>{products && <ProductsNav data={products} />}</div>
    </section>
  );
};

export default Home;
