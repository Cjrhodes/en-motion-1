"use client";

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { useAppDispatch } from '@/redux/hooks';
import { toggleContactModalOpen } from '@/redux/features/contactModalSlice';
import styles from './HeroSlider.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
  const [showSocialLinks, setShowSocialLinks] = useState(true);
  const dispatch = useAppDispatch();

  const openContactModal = () => {
    dispatch(toggleContactModalOpen());
  };

  useEffect(() => {
    const handleScroll = () => {
      const slider = document.querySelector(`.${styles['hero-slider']}`);
      const socialWrap = document.querySelector(`.${styles['social-wrap']}`);
      if (slider !== null && socialWrap !== null) {
        const sliderTop = slider.getBoundingClientRect().top;
        const scrollPosition = window.scrollY;
        if (scrollPosition > sliderTop) {
          setShowSocialLinks(false);
          socialWrap.classList.add(styles.hidden);
        } else {
          setShowSocialLinks(true);
          socialWrap.classList.remove(styles.hidden);
        }
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <Swiper 
        effect={'fade'}
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
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        className={styles['hero-slider']}
      >
        <SwiperSlide>
          <div
            className={styles['hero-slider-item']}
            style={{
              backgroundImage: `url(/img/girl-kickboxing1.png)`,
            }}
          >
            <div className={styles['hero-slider-text']}>
              <h1>Put More Fight into Your Fit</h1>
              <p>
                Our staff at En Motion comes with extensive martial arts experience. Take classes that mix self-defense training with personal training, or choose dedicated self-defense classes. Get a free evaluation and personalized fitness plan today!
              </p>
              <div className="slider-btn">
                <button
                  onClick={openContactModal}
                  className={styles.sliderButton}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={styles['hero-slider-item']}
            style={{
              backgroundImage: `url(/img/corporate-wellness.jpg)`,
            }}
          >
            <div className={styles['hero-slider-text']}>
              <h1>Elevate Your Team's Health and Productivity</h1>
              <p>
                Enhance your company's success by investing in employee well-being through our corporate wellness programs. Schedule a free evaluation and get a tailored fitness plan for your team!
              </p>
              <div className="slider-btn">
                <button
                  onClick={openContactModal}
                  className={styles.sliderButton}
                >
                  Free Quote
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={styles['hero-slider-item']}
            style={{
              backgroundImage: `url(/img/girlpushup.jpeg)`,
            }}
          >
            <div className={styles['hero-slider-text']}>
              <h1>Discover Your Peak Potential</h1>
              <p>
                Unlock your potential with personalized training sessions tailored to your goals. Start today with a free evaluation and receive a customized fitness plan just for you!
              </p>
              <div className="slider-btn">
                <button
                  onClick={openContactModal}
                  className={styles.sliderButton}
                >
                  Free Evaluation
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Social Wrap */}
      <div className={`${styles['social-wrap']} ${showSocialLinks ? '' : styles.hidden}`}>
        <span className={styles['follow-us']}>Follow Us:</span>
        <ul>
          <li>
            <a href="https://www.facebook.com/profile.php?id=61558229676688" className="title-anim">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/enmotionfit" className="title-anim">
              <i className="fa-brands fa-x"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/enmotionfit/?hl=en" className="title-anim">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      {/* Video Section */}
      <div className={styles['video-section']}>
        <video 
          autoPlay 
          loop 
          muted 
          controls
          playsInline
          preload="auto"
          className={styles['promo-video']}
          width="100%"
          height="100%"
        >
          <source src="/img/promovidenmotion.mp4" type="video/mp4" />
          <source src="/img/promovidenmotion.MOV" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default HeroSlider;
