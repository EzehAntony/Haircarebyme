"use client";

import React, { useEffect } from "react";
import styles from "./product.module.css";
import { useRouter } from "next/navigation";

const Product = () => {
  const router = useRouter();
  return (
    <div
      className={styles.product}
      onClick={() => router.push("/home/product")}
    >
      <img src={`/hair/3.jpg`} alt="" />
      <div className={styles.bag}>
        <i class="bi bi-bag"></i>
      </div>
      <div className={styles.description}>
        <h3>Rondon Avella</h3>
        <h2>
          <span>₦</span> 212
        </h2>
      </div>
    </div>
  );
};

export default Product;
