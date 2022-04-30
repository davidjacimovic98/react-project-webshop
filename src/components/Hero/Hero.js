import React from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
import heroBcg from "../../images/hero-bcg.jpeg";
import heroBcg2 from "../../images/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <section className={styles.hero_container}>
      <article className={styles.text_section}>
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          officiis rem nostrum enim suscipit saepe, asperiores sit fuga, ex
          consectetur quo at autem, ipsum sint sed explicabo soluta maiores cum!
        </p>
        <Link to="/products">shop now</Link>
      </article>
      <article className={styles.images}>
        <img src={heroBcg} alt="nice table" className={styles.big_image} />
        <img src={heroBcg2} alt="nice desk" className={styles.small_image} />
      </article>
    </section>
  );
};

export default Hero;
