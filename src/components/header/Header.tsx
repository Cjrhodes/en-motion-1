"use client";

import React from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { toggleContactModalOpen } from '@/redux/features/contactModalSlice';
import styles from '../hero/HeroSlider.module.css';
import Image from 'next/image';
import dynamic from 'next/dynamic';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const DynamicSwiperWrapper = dynamic(() => import('./SwiperWrapper'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

const HeroSlider = () => {
  const dispatch = useAppDispatch();

  const openContactModal = () => {
    dispatch(toggleContactModalOpen(""));
  };

  return (
    <>
      <div className={styles['slider-container']}>
        <DynamicSwiperWrapper>
              <div className={styles['hero-slider-item']}>
                <Image
                  src="/img/girl-kickboxing1.jpg"
                  alt="Kickboxing training"
                  fill
                  priority
                  quality={75}
                  sizes="100vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQFBhESIQcTMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABoRAAICAwAAAAAAAAAAAAAAAAECABEDITH/2gAMAwEAAhEDEEA/AMg0/q3U+HxsNpY5aaO3iQJHGVQhVHQAJU8j8NKUqhMerN4DF0z/2Q=="
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
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
              <div className={styles['hero-slider-item']}>
                <Image
                  src="/img/corporate-wellness.jpg"
                  alt="Corporate wellness"
                  fill
                  quality={75}
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
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
              <div className={styles['hero-slider-item']}>
                <Image
                  src="/img/girlpushup.jpeg"
                  alt="Push-up exercise"
                  fill
                  quality={75}
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
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
        </DynamicSwiperWrapper>
      </div>

      {/* Social Wrap */}
      <div className={styles['social-wrap']}>
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
          playsInline
          preload="metadata"
          className={styles['promo-video']}
          width="100%"
          height="100%"
        >
          <source 
            src="/video/promovideo.mp4" 
            type="video/mp4" 
          />
          <p>Your browser does not support the video tag. <a href="/video/promovideo.mp4" download>Download the video</a>.</p>
        </video>
      </div>
    </>
  );
};

export default HeroSlider;