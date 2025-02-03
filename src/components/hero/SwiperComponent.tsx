"use client";

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import styles from './HeroSlider.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface SwiperComponentProps {
  children: React.ReactNode;
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ children }) => {
  return (
    <Swiper
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      speed={1000}
      autoplay={{
        delay: 6500,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      className={styles['hero-slider']}
    >
      {children}
    </Swiper>
  );
};

export default SwiperComponent;
