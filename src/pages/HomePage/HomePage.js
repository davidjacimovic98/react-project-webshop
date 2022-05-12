import React from "react";
import Contact from "../../components/Contact/Contact";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </div>
  );
};

export default HomePage;
