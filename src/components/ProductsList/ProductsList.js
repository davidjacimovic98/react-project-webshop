import React from "react";
import styles from "./ProductsList.module.css";
import { useFilterContext } from "../../context/filters_context";
import GridView from "../GridView/GridView";
import ListView from "../ListView/ListView";

const ProductsList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return <h5>Sorry, no products matched your search...</h5>;
  }

  if (grid_view === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products}>products list</GridView>;
};

export default ProductsList;
