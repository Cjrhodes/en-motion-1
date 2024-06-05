"use client";

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";
import { useAppDispatch } from "@/redux/hooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './HeroSlider.module.css';

const HeroSlider = () => {
  const dispatch = useAppDispatch();

  const openContactModal = () => {
    dispatch(toggleContactModalOpen({ packageName: "", packageType: "" }));
  };

  const [showSocialLinks, setShowSocialLinks] = useState(true);

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
        pagination={{
          clickable: true,
        }}
        navigation={true}
        speed={1500}
        autoplay={{
          delay: 6500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
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
                <Link
                  href="#"
                  className="buyTicketsBtn"
                  onClick={openContactModal}
                >
                  Get Started
                </Link>
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
                <Link
                  href="#"
                  className="buyTicketsBtn"
                  onClick={openContactModal}
                >
                  Free Quote
                </Link>
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
                <Link
                  href="#"
                  className="buyTicketsBtn"
                  onClick={openContactModal}
                >
                  Free Evaluation
                </Link>
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
          <a href="https://twitter.com/enmotionfit"  className="title-anim">
                          <i className="fa-brands fa-x"></i>
                        </a>
          </li>
          <li>
          <a href="https://www.instagram.com/enmotionfit/?hl=en" className="title-anim">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
          </li>
          <li>
        
       
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeroSlider;
