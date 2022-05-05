import React from "react";
import styles from "./Filters.module.css";
import { useFilterContext } from "../../context/filters_context";
import { getUniqueValues, formatPrice } from "../../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      max_price,
      min_price,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <div className={styles.filters_container}>
      <div className={styles.content}>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className={styles.input}>
            <input
              type="text"
              name="text"
              placeholder="search"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end of search input */}
          {/* categories */}
          <div className={styles.categories_main}>
            <h5>category</h5>
            <div className={styles.categories}>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    name="category"
                    type="button"
                    className={`${
                      category === c.toLowerCase() ? styles.active : styles.btn
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of categories */}
          {/* companies */}
          <div className={styles.companies}>
            <h5>company</h5>
            <select name="company" value={company} onChange={updateFilters}>
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of companies */}
          {/* colors */}
          <div className={styles.colors}>
            <h5>colors</h5>
            <div className={styles.btn_container}>
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        color === "all" ? styles.all_active : styles.all_btn
                      }`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: c }}
                    className={`${
                      color === c ? styles.active_color : styles.color_btn
                    }`}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? (
                      <FaCheck className={styles.check_icon} />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of colors */}
          {/* price */}
          <div className={styles.price_container}>
            <h5>price</h5>
            <p>{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* end of price */}
          {/* shipping */}
          <div className={styles.shipping}>
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
          {/* end of shipping */}
        </form>
        <button
          type="button"
          onClick={clearFilters}
          className={styles.clear_btn}
        >
          clear filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
