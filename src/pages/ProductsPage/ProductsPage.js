import React from "react";
import styles from "./ProductsPage.module.css";
import PageHero from "../../components/PageHero/PageHero";
import Sort from "../../components/Sort/Sort";
import Filters from "../../components/Filters/Filters";
import ProductsList from "../../components/ProductsList/ProductsList";

const ProductsPage = () => {
  return (
    <div>
      <PageHero title="products" />
      <div className={styles.container}>
        <div className={styles.products}>
          <Filters />
          <div className={styles.content}>
            <Sort />
            <ProductsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
