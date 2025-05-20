import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';

interface SwiperWrapperProps {
  children: React.ReactNode;
}

const SwiperWrapper: React.FC<SwiperWrapperProps> = ({ children }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade]}
      navigation
      pagination={{ clickable: true }}
      effect="fade"
      loop
      className="hero-swiper"
    >
      {React.Children.map(children, (child, idx) => (
        <SwiperSlide key={idx}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperWrapper;