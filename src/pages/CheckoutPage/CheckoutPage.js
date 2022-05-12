import React from "react";
import styles from "./CheckoutPage.module.css";
import PageHero from "../../components/PageHero/PageHero";
import Checkout from "../../components/Checkout/Checkout";

const CheckoutPage = () => {
  return (
    <div className={styles.checkout_container}>
      <PageHero title="checkout" />
      <Checkout />
    </div>
  );
};

export default CheckoutPage;
