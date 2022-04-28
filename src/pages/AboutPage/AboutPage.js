import React from "react";
import styles from "./AboutPage.module.css";
import aboutImg from "../../images/hero-bcg.jpeg";
import PageHero from "../../components/PageHero/PageHero";

const AboutPage = () => {
  return (
    <div className={styles.about_container}>
      <PageHero title="about" />
      <div className={styles.about_info}>
        <img src={aboutImg} alt="nice desk" />
        <div className={styles.text_info}>
          <h2>our story</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            consequatur aliquid quos hic quibusdam nobis ipsum assumenda
            incidunt, explicabo ipsa voluptatum recusandae quis est doloremque
            voluptates sapiente provident maxime ad! Delectus amet voluptatem ad
            doloribus suscipit sunt eos officia quidem, eius ex quod illum
            consequatur tempora odio iste! Ex, minus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
