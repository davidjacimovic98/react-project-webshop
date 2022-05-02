import React, { useEffect } from "react";
import styles from "./SingleProductPage.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../../context/products_context";
import { single_product_url as url } from "../../utils/constants";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import PageHero from "../../components/PageHero/PageHero";
import ProductImages from "../../components/ProductImages/ProductImages";
import Stars from "../../components/Stars/Stars";
import AddToCart from "../../components/AddToCart/AddToCart";

const SingleProductPage = () => {
  const { id } = useParams();
  const history = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history("/");
      }, 2000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  return (
    <div className={styles.single_product_page_container}>
      <PageHero title={name} product />
      <div className={styles.content}>
        <Link to="/products" className={styles.back_btn}>
          back to products
        </Link>
        <div className={styles.main}>
          <ProductImages images={images} />
          <div className={styles.info}>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5>{formatPrice(price)}</h5>
            <p className={styles.description}>{description}</p>
            <p className={styles.main_info}>
              <span>Available : </span>
              {stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p className={styles.main_info}>
              <span>SKU : </span>
              {sku}
            </p>
            <p className={styles.main_info}>
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
