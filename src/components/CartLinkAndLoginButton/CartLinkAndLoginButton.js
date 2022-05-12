import React from "react";
import styles from "./CartLinkAndLoginButton.module.css";
import { FaShoppingCart, FaUserPlus, FaUserMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../context/products_context";
import { useCartContext } from "../../context/cart_context";
import { useUserContext } from "../../context/user_context";

const CartLinkAndLoginButton = () => {
  const { closeSidebar } = useProductsContext();

  const { total_items } = useCartContext();

  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <div className={styles.cart_btn_container}>
      <Link to="/cart" className={styles.cart_btn} onClick={closeSidebar}>
        Cart
        <span className={styles.cart_container}>
          <FaShoppingCart className={styles.cart_icon} />
          <span className={styles.cart_value}>
            <p>{total_items}</p>
          </span>
        </span>
      </Link>
      {myUser ? (
        <button
          type="button"
          className={styles.auth_btn}
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout <FaUserMinus className={styles.login_icon} />
        </button>
      ) : (
        <button
          type="button"
          className={styles.auth_btn}
          onClick={loginWithRedirect}
        >
          Login <FaUserPlus className={styles.login_icon} />
        </button>
      )}
    </div>
  );
};

export default CartLinkAndLoginButton;
