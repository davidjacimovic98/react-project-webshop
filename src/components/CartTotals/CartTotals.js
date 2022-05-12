import React from "react";
import styles from "./CartTotals.module.css";
import { useCartContext } from "../../context/cart_context";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/user_context";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();

  const { myUser, loginWithRedirect } = useUserContext();
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
        {myUser ? (
          <Link to="/checkout">proceed to checkout</Link>
        ) : (
          <button className={styles.btn_login} onClick={loginWithRedirect}>
            login
          </button>
        )}
      </div>
    </section>
  );
};

export default CartTotals;
