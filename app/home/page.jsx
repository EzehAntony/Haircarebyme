"use client";
import React, { useRef } from "react";
import styles from "./page.module.css";
import { Montserrat, Poppins } from "next/font/google";
import Product from "../components/product/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Navigation, Pagination } from "swiper";
import Snowfall from "react-snowfall";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Home = () => {
  const ref = useRef(null);
  const g = gsap.utils.selector(ref);
  gsap.registerPlugin(ScrollTrigger);
  const t1 = gsap.timeline();

  return (
    <div className={styles.home} id="home" ref={ref}>
      <header>
        <i class="bi bi-text-center" className={styles.menu}></i>
        <img src="/hermes/hermes.svg" className={styles.logo} alt="" />
      </header>

      <div className={styles.search}>
        <input type="text" />
        <i class="bi bi-search"></i>
      </div>
      <img src="/video.webp" alt="" className={styles.randomImg} />

      <div className={styles.category}>
        <Swiper
          className={styles.swiper}
          spaceBetween={5}
          slidesPerView={"auto"}
        >
          <SwiperSlide className={styles.swiperslide}>
            <button className={montserrat.className}>
              <p>All Categories</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslide}>
            <button className={montserrat.className}>
              <p>Brazilian</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslide}>
            <button className={montserrat.className}>
              <p>Australian</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslide}>
            <button className={montserrat.className}>
              <p>Nigerian</p>
            </button>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslide}>
            <button className={montserrat.className}>
              <p>Monofilament</p>
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.posts}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Home;
