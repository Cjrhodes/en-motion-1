'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { testimonialData3 } from "@/data/Data";
import styles from './TestimonialSection3.module.css';

const Slider = dynamic(() => import('react-slick'), { ssr: false });
const motion = dynamic(() => import('framer-motion').then((mod) => mod.motion), { ssr: false });

const TestimonialSection3 = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
        <div className={styles.sliderContainer}>
          <Slider {...sliderSettings}>
            {testimonialData3.map((item) => (
              <div key={item.id} className={styles.testimonialSlide}>
                <div className={styles.testimonialContent}>
                  <div className={styles.testimonialImage}>
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className={styles.testimonialText}>
                    <p className={styles.quote}>{item.text}</p>
                    <h3 className={styles.clientName}>{item.name}</h3>
                    <p className={styles.clientTitle}>{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection3;