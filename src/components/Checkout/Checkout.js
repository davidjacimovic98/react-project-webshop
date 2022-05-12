import React, { useState } from "react";
import styles from "./Checkout.module.css";
import { useUserContext } from "../../context/user_context";
import { useCartContext } from "../../context/cart_context";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { myUser } = useUserContext();
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
  const [isPaid, setIsPaid] = useState(false);

  const paymentSuccessful = () => {
    clearCart();
    setIsPaid(true);
  };

  if (isPaid) {
    return (
      <div className={styles.main}>
        <h3>
          thank you <br />
          your payment was successful!
        </h3>
        <Link to="/">back home</Link>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <h3>Hello, {myUser && myUser.name}</h3>
      <h4>
        Your total is{" "}
        {cart.length > 0 ? formatPrice(total_amount + shipping_fee) : " $0.00"}
      </h4>
      {cart.length < 1 ? (
        <button onClick={paymentSuccessful} disabled>
          Pay
        </button>
      ) : (
        <button onClick={paymentSuccessful}>Pay</button>
      )}
    </div>
  );
};

export default Checkout;
