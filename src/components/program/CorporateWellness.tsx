"use client";
import React from 'react';
import styles from './Programs.module.css';
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from 'next/link';

const CorporateWellness: React.FC = () => {
  const title = 'Corporate Wellness';
  const description = 'Promote a healthy lifestyle for your employees and boost productivity.';
  const philosophy = 'Our corporate wellness philosophy revolves around creating a culture of health and well-being within organizations. We believe that investing in the physical and mental well-being of employees leads to increased productivity, reduced absenteeism, and a more engaged workforce.';
  const system = 'Our corporate wellness system is designed to be comprehensive and tailored to the unique needs of each organization. We conduct detailed assessments to understand the specific challenges and goals, and then develop customized programs that include on-site fitness classes, wellness seminars, health screenings, and nutritional guidance.';
  const image = '/img/teamfitness.jpeg';
  const features = ['On-Site Fitness Classes', 'Wellness Seminars', 'Health Assessments', 'Nutritional Guidance'];

  const dispatch = useAppDispatch(); // Move the hook call inside the component

  const openContactModal = () => {
    dispatch(toggleContactModalOpen(""));
  };


  
  return (
    <section id="CorporateWellness" className={styles.fullScreenContainer}>
    {/* Ensure image and overlay are correctly placed */}
    <img src={image} alt={title} className={styles.backgroundImage} />
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

export default CorporateWellness;