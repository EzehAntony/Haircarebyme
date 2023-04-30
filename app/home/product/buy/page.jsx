"use client";
import CartProduct from "@/app/components/cartProduct/CartProduct";
import styles from "./buy.module.css";
import { useState } from "react";
import Snowfall from "react-snowfall";
import { useRouter } from "next/navigation";

const buy = () => {
  const router = useRouter()
  return (
    <div className={styles.buy}>
      <header>
        <h1>Cart</h1>
        <i class="bi bi-arrow-left" onClick={() => router.push(-1)} ></i>
      </header>

      <div className={styles.cart}>
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </div>
    </div>
  );
};

export default buy;
