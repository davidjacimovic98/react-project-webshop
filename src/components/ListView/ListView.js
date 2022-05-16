import React from "react";
import { formatPrice } from "../../utils/helpers";
import styles from "./ListView.module.css";
import { Link } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <section>
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <div key={id} className={styles.main}>
            <img src={image} alt={name} className={styles.image} />
            <div className={styles.content}>
              <h4>{name}</h4>
              <h5 className={styles.price}>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`}>details</Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ListView;
