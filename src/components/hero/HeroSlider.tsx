"use client";

import React, { useState } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { toggleContactModalOpen } from '@/redux/features/contactModalSlice';
import styles from './HeroSlider.module.css';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const DynamicSwiperWrapper = dynamic(() => import('./SwiperWrapper'));

const HeroSlider = () => {
  const dispatch = useAppDispatch();
  const [videoRequested, setVideoRequested] = useState(false);
  const [loadedSlides, setLoadedSlides] = useState(() => new Set([0]));

  const openContactModal = () => {
    dispatch(toggleContactModalOpen(""));
  };

  return (
    <>
      <div className={styles['slider-container']}>
        <DynamicSwiperWrapper
          onActiveIndexChange={(index) => {
            setLoadedSlides((current) => {
              if (current.has(index)) return current;
              return new Set(current).add(index);
            });
          }}
        >
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
                {loadedSlides.has(1) && (
                  <Image
                    src="/img/corporate-wellness.webp"
                    alt="Corporate wellness"
                    fill
                    quality={75}
                    loading="lazy"
                    fetchPriority="low"
                    sizes="100vw"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                )}
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
                {loadedSlides.has(2) && (
                  <Image
                    src="/img/girlpushup.webp"
                    alt="Push-up exercise"
                    fill
                    quality={75}
                    loading="lazy"
                    fetchPriority="low"
                    sizes="100vw"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                )}
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
            <a href="https://www.facebook.com/profile.php?id=61558229676688" className="title-anim" aria-label="Visit En Motion on Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/enmotionfit" className="title-anim" aria-label="Visit En Motion on X">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/enmotionfit/?hl=en" className="title-anim" aria-label="Visit En Motion on Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
      {/* Video Section */}
      <div className={styles['video-section']}>
        {videoRequested ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/img/video-preview.webp"
            className={styles['promo-video']}
            width="100%"
            height="100%"
          >
            <source src="/video/promovideo-mobile.mp4" type="video/mp4" />
            <p>Your browser does not support the video tag.</p>
          </video>
        ) : (
          <button
            type="button"
            className={styles['video-placeholder']}
            onClick={() => setVideoRequested(true)}
            aria-label="Play En Motion promotional video"
          >
            <Image
              src="/img/video-preview.webp"
              alt=""
              fill
              loading="lazy"
              sizes="100vw"
              className={styles['video-poster']}
            />
            <span className={styles['play-button']} aria-hidden="true">▶</span>
          </button>
        )}
      </div>
    </>
  );
};

export default HeroSlider;
