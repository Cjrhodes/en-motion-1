"use client";
import React from 'react';
import styles from './Programs.module.css';
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from 'next/link';

const OnlineTraining: React.FC = () => {
  const title = 'Online Training';
  const description = 'Access high-quality fitness training from the comfort of your home.';
  const philosophy = 'Our online training philosophy is centered around providing convenient and accessible fitness solutions for individuals with busy lifestyles or those who prefer the flexibility of working out at home. We believe in delivering high-quality training programs that are tailored to individual needs and goals, without compromising on the guidance and support typically found in a traditional gym setting.';
  const system = 'Our online training system combines state-of-the-art video streaming technology with personalized workout plans and progress tracking tools. Clients have access to a vast library of pre-recorded workouts led by certified trainers, as well as the option for live virtual training sessions. Our online platform also includes nutrition guidance, motivational resources, and support from our team of fitness experts.';
  const image = '/img/online-training.jpeg';
  const features = ['Virtual Personal Training', 'Pre-Recorded Workouts', 'Progress Tracking', 'Nutrition Guidance'];

  const dispatch = useAppDispatch(); // Move the hook call inside the component

  const openContactModal = () => {
    dispatch(toggleContactModalOpen({ packageName: "", packageType: "" }));
  };



  return (
    <section id="OnlineTraining" className={styles.fullScreenContainer}>
      <div className={styles.programContainer}>
        <div className={styles.programImageContainer}>
          <img src={image} alt={title} className={styles.programImage} />
        </div>
        <div className={styles.programContent}>
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
      </div>
    </section>
  );
};

export default OnlineTraining;