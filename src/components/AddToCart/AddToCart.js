import React, { useState } from "react";
import styles from "./AddToCart.module.css";
import { FaCheck } from "react-icons/fa";
import AmountButtons from "../AmountButtons/AmountButtons";
import { Link } from "react-router-dom";

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.colors}>
        <span>colors : </span>
        <div className={styles.btn_container}>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  mainColor === color ? styles.active : styles.color_btn
                }`}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? (
                  <FaCheck className={styles.check_icon} />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className={styles.amount_btn_container}>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link to="/cart">add to cart</Link>
      </div>
    </div>
  );
};

export default AddToCart;
