import React from "react";
import styles from "./HomePage.module.css";
import Contact from "../../components/Contact/Contact";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Contact />
    </div>
  );
};

export default HomePage;
