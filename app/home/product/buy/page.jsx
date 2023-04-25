"use client";
import styles from "./buy.module.css";
import { useState } from "react";
import Snowfall from "react-snowfall";

const buy = () => {
  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    if (quantity === 100) {
    } else {
      setQuantity((prev) => prev + 1);
    }
  };
  const decrement = () => {
    if (quantity === 1) {
    } else {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className={styles.buy}>
      <img src="/hair/4.jpg" alt="" />
      <div className={styles.details}>
        <h1>Alvado morris cin</h1>
        <p>230₦</p>

        <div className={styles.quantity}>
          <h3>total</h3>

          <p>{230 * quantity}</p>
        </div>
        <div className={styles.quantity}>
          <h3>quantity</h3>

          <i class="bi bi-dash" onClick={decrement}></i>
          <h2>{quantity} </h2>
          <i class="bi bi-plus" onClick={increment}></i>
        </div>

        <div className={styles.description}>
          <h3>Description</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            necessitatibus labore quisquam corrupti ipsa eius quas corporis
            nulla quaerat quae.
          </p>
        </div>

        <div className={styles.cart}>
          <button>
            <i class="bi bi-cart4"></i>
            <p>Add to cart</p>
          </button>
        </div>
        <Snowfall color="#fff" speed={[0, 1]} snowflakeCount={"50"} />
      </div>
    </div>
  );
};

export default buy;
