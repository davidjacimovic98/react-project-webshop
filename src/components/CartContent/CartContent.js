import React from "react";
import styles from "./CartContent.module.css";
import { useCartContext } from "../../context/cart_context";
import CartColumns from "../CartColumns/CartColumns";
import CartItem from "../CartItem/CartItem";
import CartTotals from "../CartTotals/CartTotals";
import { Link } from "react-router-dom";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <div className={styles.container}>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr className={styles.hr} />
      <div className={styles.links}>
        <Link to="/products">continue shopping</Link>
        <button type="button" onClick={clearCart}>
          clear cart
        </button>
      </div>
      <CartTotals />
    </div>
  );
};

export default CartContent;
