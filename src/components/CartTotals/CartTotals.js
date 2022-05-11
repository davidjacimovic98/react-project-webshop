import React from "react";
import styles from "./CartTotals.module.css";
import { useCartContext } from "../../context/cart_context";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  return (
    <section className={styles.container}>
      <div className={styles.main}>
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr className={styles.hr} />
          <h4>
            order total :{" "}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        <Link to="/checkout">proceed to checkout</Link>
      </div>
    </section>
  );
};

export default CartTotals;
