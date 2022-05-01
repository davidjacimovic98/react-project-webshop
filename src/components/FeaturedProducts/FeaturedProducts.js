import React from "react";
import styles from "./FeaturedProducts.module.css";
import { useProductsContext } from "../../context/products_context";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import Product from "../Product/Product";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return;
  }
  return (
    <div className={styles.featured_container}>
      <div className={styles.featured_header}>
        <h2>featured products</h2>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.featured}>
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
