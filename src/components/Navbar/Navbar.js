import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../images/logo.svg";
import { FaBars } from "react-icons/fa";
import { links } from "../../utils/constants";
import { Link } from "react-router-dom";
import CartLinkAndLoginButton from "../CartLinkAndLoginButton/CartLinkAndLoginButton";
import { useProductsContext } from "../../context/products_context";

const Navbar = () => {
  const { openSidebar } = useProductsContext();

  return (
    <div className={styles.container}>
      <div className={styles.navbar_header}>
        <img src={logo} alt="logo" className={styles.logo} />
        <button className={styles.open_sidebar_btn} onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className={styles.nav_links}>
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          );
        })}
      </ul>
      <div className={styles.cart_and_login}>
        <CartLinkAndLoginButton />
      </div>
    </div>
  );
};

export default Navbar;
