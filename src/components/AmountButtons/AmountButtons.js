import React from "react";
import styles from "./AmountButtons.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <div className={styles.amount_container}>
      <button type="button" className={styles.amount_btn} onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className={styles.amount}>{amount}</h2>
      <button type="button" className={styles.amount_btn} onClick={increase}>
        <FaPlus />
      </button>
    </div>
  );
};

export default AmountButtons;
