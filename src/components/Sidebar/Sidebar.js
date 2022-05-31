import React from "react";
import styles from "./Sidebar.module.css";
import logo from "../../images/logo.svg";
import { FaTimes } from "react-icons/fa";
import { links } from "../../utils/constants";
import { Link } from "react-router-dom";
import CartLinkAndLoginButton from "../CartLinkAndLoginButton/CartLinkAndLoginButton";
import { useProductsContext } from "../../context/products_context";
import { useUserContext } from "../../context/user_context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();

  const { myUser } = useUserContext();

  return (
    <div
      className={
        isSidebarOpen
          ? styles.sidebar_container_active
          : styles.sidebar_container
      }
    >
      <div className={styles.sidebar_header}>
        <img src={logo} alt="logo" />
        <button onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className={styles.sidebar_links}>
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <Link to={url} onClick={closeSidebar} key={id}>
              <li>{text}</li>
            </Link>
          );
        })}
        {myUser && (
          <Link to="/checkout" onClick={closeSidebar}>
            <li className={styles.checkout}>Checkout</li>
          </Link>
        )}
      </ul>
      <div className={styles.cart_and_login}>
        <CartLinkAndLoginButton />
      </div>
    </div>
  );
};

export default Sidebar;
