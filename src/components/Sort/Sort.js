import React from "react";
import styles from "./Sort.module.css";
import { useFilterContext } from "../../context/filters_context";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();

  return (
    <section className={styles.main}>
      <div className={styles.btn_container}>
        <button
          type="button"
          className={`${grid_view ? styles.active : styles.view_btn}`}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type="button"
          className={`${!grid_view ? styles.active : styles.view_btn}`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">sort by</label>
        <select
          name="sort"
          id="sort"
          className={styles.sort_input}
          value={sort}
          onChange={updateSort}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </section>
  );
};

export default Sort;
