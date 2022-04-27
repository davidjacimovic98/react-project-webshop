import React from "react";
import styles from "./CartLinkAndLoginButton.module.css";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartLinkAndLoginButton = () => {
  return (
    <div className={styles.cart_btn_container}>
      <Link to="/cart" className={styles.cart_btn}>
        Cart
        <span className={styles.cart_container}>
          <FaShoppingCart className={styles.cart_icon} />
          <span className={styles.cart_value}>
            <p>0</p>
          </span>
        </span>
      </Link>
      <button type="button" className={styles.auth_btn}>
        Login <FaUserPlus className={styles.login_icon} />
      </button>
    </div>
  );
};

export default CartLinkAndLoginButton;
