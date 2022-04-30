import React from "react";
import styles from "./Services.module.css";
import { services } from "../../utils/constants";
import { GiCompass } from "react-icons/gi";

const Services = () => {
  return (
    <div className={styles.services_container}>
      <div>
        <div className={styles.services_header}>
          <h3>
            custom furniture <br />
            built only for you
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            repudiandae quas magni a. Aliquam impedit aliquid temporibus
            laudantium, tenetur magni.
          </p>
        </div>
        <div className={styles.services_cards}>
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <div key={id} className={styles.services_single_card}>
                <div className={styles.icon}>{icon}</div>
                <h3>{title}</h3>
                <div className={styles.text}>
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
