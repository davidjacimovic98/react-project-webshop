import React from "react";
import styles from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className={styles.error_container}>
      <h1>404</h1>
      <p>Sorry, the page you tried cannot be found</p>
      <Link to="/">back home</Link>
    </div>
  );
};

export default ErrorPage;
