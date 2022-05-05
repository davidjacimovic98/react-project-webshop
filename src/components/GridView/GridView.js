import React from "react";
import styles from "./GridView.module.css";
import Product from "../Product/Product";

const GridView = ({ products }) => {
  return (
    <section>
      <div className={styles.products_container}>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default GridView;
