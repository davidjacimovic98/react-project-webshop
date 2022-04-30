import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact_container}>
      <h3>Join our newsletter and get 20% off</h3>
      <div className={styles.contact_body}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque error
          repellendus doloribus quae. Quaerat inventore enim nulla quam,
          repellat incidunt!
        </p>
        <form>
          <input type="email" placeholder="Enter Email" />
          <button type="submit">subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
