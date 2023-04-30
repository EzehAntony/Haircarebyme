"use client";

import React, { useEffect } from "react";
import styles from "./product.module.css";
import { useRouter } from "next/navigation";

const CartProduct = () => {
  const router = useRouter();
  return (
    <div
      className={styles.cartProduct}
      onClick={() => router.push("/home/product/")}
    >
      <img src="/hair/3.jpg" alt="" />
      <div className={styles.other}>
        <div className={styles.top}>
          <h1>Avaldo revera</h1>
          <i class="bi bi-x"></i>
        </div>
        <div className="price">
          <h3>250</h3>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
