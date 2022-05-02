import React, { useState } from "react";
import styles from "./ProductImages.module.css";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className={styles.images_container}>
      <img src={mainImage.url} alt="main image" className={styles.main_image} />
      <div className={styles.gallery}>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMainImage(images[index])}
              className={`${
                image.url === mainImage.url ? styles.active : null
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
