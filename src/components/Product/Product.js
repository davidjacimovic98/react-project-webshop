import React from "react";
import styles from "./Product.module.css";
import { formatPrice } from "../../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ image, name, price, id }) => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.product_container}>
          <img src={image} alt={name} />
          <Link to={`/products/${id}`}>
            <FaSearch />
          </Link>
        </div>
        <footer>
          <h5>{name}</h5>
          <p>{formatPrice(price)}</p>
        </footer>
      </div>
    </div>
  );
};

export default Product;
