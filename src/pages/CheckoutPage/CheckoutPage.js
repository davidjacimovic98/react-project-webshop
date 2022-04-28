import React from "react";
import styles from "./CheckoutPage.module.css";
import PageHero from "../../components/PageHero/PageHero";

const CheckoutPage = () => {
  return (
    <div className={styles.checkout_container}>
      <PageHero title="checkout" />
      <h1>checkout here</h1>
    </div>
  );
};

export default CheckoutPage;
