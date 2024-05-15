"use client";
import React from 'react';
import styles from './Programs.module.css';
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from 'next/link';

const PersonalTrainingProgram: React.FC = () => {
  const title = 'Personal Training';
  const description = 'Achieve your fitness goals with personalized training programs.';
  const philosophy = 'Our personal training philosophy revolves around tailoring programs to meet individual needs and goals. We believe in a holistic approach that combines physical training, nutrition guidance, and mindset coaching for sustainable results.';
  const system = 'Our personal training system starts with a comprehensive assessment to understand your current fitness level, lifestyle, and goals. We then design customized workout plans and provide ongoing support and accountability to help you stay on track.';
  const image = '/img/powerliftgirl.jpeg';
  const features = ['One-on-One Training', 'Custom Workout Plans', 'Nutrition Guidance'];
  const dispatch = useAppDispatch();

  const openContactModal = () => {
    dispatch(toggleContactModalOpen({ packageName: "", packageType: "" }));
  };

  return (
    <section id="PersonalTraining" className={styles.fullScreenContainer}>
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

export default PersonalTrainingProgram;