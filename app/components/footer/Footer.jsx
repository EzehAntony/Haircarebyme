"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <div className={styles.footer}>
      <div onClick={() => router.push("/home")}>
        {path === "/home" ? (
          <i class="bi bi-house-fill"></i>
        ) : (
          <i class="bi bi-house"></i>
        )}
      </div>

      <div onClick={() => router.push("/home/profile")}>
        {path === "/home/profile" ? (
          <i class="bi bi-heart-fill"></i>
        ) : (
          <i class="bi bi-heart"></i>
        )}
      </div>

      <div onClick={() => router.push("/home/profile")}>
        {path === "/home/profile" ? (
          <i class="bi bi-person-fill"></i>
        ) : (
          <i class="bi bi-person"></i>
        )}
      </div>

      <div
        className={styles.cart}
        onClick={() => router.push("/home/product/buy")}
      >
        {path === "/home/product/buy" ? (
          <i class="bi bi-bag-fill"></i>
        ) : (
          <i class="bi bi-bag"></i>
        )}

        <div className="count">
          <h3>0</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
