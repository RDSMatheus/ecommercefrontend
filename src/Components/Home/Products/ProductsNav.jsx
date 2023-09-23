import React from 'react';
import styles from './ProductsNav.module.css';
import Title from '../Title/Title';
import LeftArrow from '../../../assets/left_arrow.svg';
import RightArrow from '../../../assets/right_arrow.svg';
import Heart from '../../../assets/fill_heart.svg';
import Rating from './Rating/Rating';

const ProductsNav = ({ data }) => {
  const [position, setPosition] = React.useState(0);
  const [active, setActive] = React.useState(0);
  const contentRef = React.useRef();
  console.log(contentRef);

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slideNext() {
    console.log(data.length / 4 - 1, active + 1);
    if (data.length / 4 - 1 > active) setActive(active + 1);
  }

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  return (
    <>
      <div className={styles.productsHeader}>
        <Title title="Nossos Produtos" subtitle="Explore Nossos Produtos" />

        <nav className={styles.nav}>
          <button onClick={slidePrev}>
            <img src={LeftArrow} alt="Seta esquerda" />
          </button>
          <button onClick={slideNext}>
            <img src={RightArrow} alt="Seta direita" />
          </button>
        </nav>
      </div>
      <section className={styles.productsContainer}>
        <div
          className={styles.productsContent}
          style={{ transform: `translateX(${position}px)` }}
          ref={contentRef}
        >
          {data &&
            data.map((item) => (
              <div key={item.description} className={styles.item}>
                <span className={styles.heart}>
                  <img src={Heart} alt="Botão de favorito" />
                </span>
                <img src={'https://picsum.photos/200'} alt="item.description" />
                <span className={styles.description}>{item.productName}</span>
                <span className={styles.price}>
                  R$ {item.price.toString().replace('.', ',')}
                </span>
                <Rating rating={item.rating} />
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default ProductsNav;
