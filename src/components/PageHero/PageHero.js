import React from "react";
import styles from "./PageHero.module.css";
import { Link } from "react-router-dom";

const PageHero = ({ title }) => {
  return (
    <div className={styles.main_div}>
      <h3>
        <Link to="/">Home</Link> / {title}
      </h3>
    </div>
  );
};

export default PageHero;
