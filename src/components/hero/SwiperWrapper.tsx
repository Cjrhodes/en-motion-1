"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import styles from './HeroSlider.module.css';

interface SwiperWrapperProps {
  children: React.ReactNode[];
}

const SwiperWrapper = ({ children }: SwiperWrapperProps) => {
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
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperWrapper;
