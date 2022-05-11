import React from "react";
import styles from "./CartColumns.module.css";

const CartColumns = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h5>item</h5>
        <h5>price</h5>
        <h5>amount</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr className={styles.hr} />
    </div>
  );
};

export default CartColumns;
