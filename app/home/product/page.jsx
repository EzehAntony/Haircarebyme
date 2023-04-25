"use client";
import styles from "./product.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Product from "@/app/components/product/Product";
import { useRouter } from "next/navigation";
const product = () => {
  const router = useRouter();
  return (
    <div className={styles.productpage}>
      <div className={styles.image}>
        <img src="/hair/3.jpg" className={styles.mainImg} alt="" />
      </div>
      <div className={styles.other}>
        <div className={styles.title}>
          <h3>Atlas Crosspin wine </h3>
        </div>
        <p className={styles.price}>₦ 125,000 </p>

        <h3 className={styles.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          reprehenderit magnam laborum.
        </h3>

        <button onClick={() => router.push("/home/product/buy")}>
          <i class="bi bi-bag"></i>
          <h3>Add to cart</h3>
        </button>
        <div className={styles.category}>
          <h1>More from this category</h1>

          <Swiper
            className={styles.swiper}
            centeredSlides={false}
            slidesPerView={"auto"}
            spaceBetween={10}
          >
            <SwiperSlide className={styles.swiperslide}>
              <Product />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperslide}>
              <Product />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperslide}>
              <Product />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperslide}>
              <Product />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default product;
