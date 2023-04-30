"use client";
import React, { useLayoutEffect, useRef } from "react";
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
import { Timeline } from "gsap/gsap-core";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Home = () => {
  const ref = useRef(null);
  const g = gsap.utils.selector(ref);
  gsap.registerPlugin(ScrollTrigger);
  const t1 = gsap.timeline({});

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      t1.from(g("#text"), {
        y: -50,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
        repeat: -1,
        repeatDelay: 2,
      });
    });
    return () => ctx.revert;
  });

  return (
    <div className={styles.home} id="home" ref={ref}>
      <header>
        <img src="/logo.jpg" className={styles.logo} alt="" />
        <i class="bi bi-text-center" className={styles.menu}></i>
      </header>

      <div className={styles.search}>
        <input type="text" />
        <i class="bi bi-search"></i>
      </div>
      <div className={styles.textAnimation}>
        <img src="/video.webp" alt="" className={styles.randomImg} />
        <div className={styles.innerText}>
          <h3 id="text">H</h3>
          <h3 id="text">a</h3>
          <h3 id="text">i</h3>
          <h3 id="text">r</h3>
          <h3 id="text">c</h3>
          <h3 id="text">a</h3>
          <h3 id="text">r</h3>
          <h3 id="text">e</h3>
          <h3 id="text">b</h3>
          <h3 id="text">y</h3>
          <h3 id="text">m</h3>
          <h3 id="text">e</h3>
        </div>
      </div>
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
