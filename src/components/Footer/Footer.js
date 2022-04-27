import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <h5>
        &copy; {new Date().getFullYear()}&nbsp;
        <span>ComfySloth</span>
      </h5>
      <h5>&nbsp;All right reserved</h5>
    </div>
  );
};

export default Footer;
