import React from "react";
import styles from "./CartPage.module.css";
import { useCartContext } from "../../context/cart_context";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero/PageHero";
import CartContent from "../../components/CartContent/CartContent";

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <div className={styles.main}>
        <h2>Your cart is empty</h2>
        <Link to="/products">fill it</Link>
      </div>
    );
  }
  return (
    <div>
      <PageHero title="cart" />
      <CartContent />
    </div>
  );
};

export default CartPage;
