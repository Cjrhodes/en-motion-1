"use client";
import React from 'react';
import styles from './Programs.module.css';
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from 'next/link';

const OnlineTraining: React.FC = () => {
  const title = 'Online Weight Loss Training';
  const description = 'Lose weight with personalized workouts, nutrition guidance, and expert accountability—all from home.';
  const philosophy = 'Sustainable weight loss comes from a plan that fits your life. Our online coaching combines effective exercise, practical nutrition guidance, and consistent support to help you burn fat, build healthier habits, and keep making progress without relying on crash diets or one-size-fits-all programs.';
  const system = 'Your weight-loss plan includes personalized workouts, progress tracking, nutrition guidance, and regular support from our fitness experts. Train with guided on-demand workouts or live virtual sessions while we help you stay accountable and adjust your plan as your fitness and body-composition goals evolve.';
  const image = '/img/online-training.webp';
  const features = ['Personalized Weight-Loss Plan', 'Fat-Burning Workouts', 'Progress & Body-Composition Tracking', 'Nutrition Guidance & Accountability'];

  const dispatch = useAppDispatch(); // Move the hook call inside the component

  const openContactModal = () => {
    dispatch(toggleContactModalOpen(""));
  };


  return (
    <section id="OnlineTraining" className={styles.fullScreenContainer}>
      {/* Ensure image and overlay are correctly placed */}
      <img src={image} alt={title} className={styles.backgroundImage} loading="lazy" decoding="async" />
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.programContainer}>
        <h2 className={styles.programTitle}>{title}</h2>
        <p className={styles.programDescription}>{description}</p>
        <div className={styles.programPhilosophySystem}>
          <h3 className={styles.programSectionHeading}>Philosophy</h3>
          <p>{philosophy}</p>
          <h3 className={styles.programSectionHeading}>System</h3>
          <p>{system}</p>
        </div>
        <div className={styles.programFeatures}>
          <h3 className={styles.programSectionHeading}>Program Features</h3>
          <ul>
            {features.map((feature, index) => (
              <li key={index} className={styles.programFeature}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.sliderBtn}>
          <Link
            href="#"
            className={styles.buyTicketsBtn}
            onClick={openContactModal}
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OnlineTraining;
