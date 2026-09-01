"use client";

import React from "react";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";
import styles from "./Programs.module.css";

const PersonalFitnessProgram: React.FC = () => {
  const dispatch = useAppDispatch();
  const features = [
    "Fitness assessment",
    "Customized exercise plan",
    "Strength, mobility, and conditioning",
  ];

  return (
    <section id="PersonalFitness" className={styles.fullScreenContainer}>
      <img
        src="/img/trx.jpg"
        alt="Personal fitness coaching"
        className={styles.backgroundImage}
      />
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.programContainer}>
        <h2 className={styles.programTitle}>Personal Fitness</h2>
        <p className={styles.programDescription}>
          Build strength, improve conditioning, and feel more confident with a
          fitness plan designed for your goals and experience level.
        </p>
        <div className={styles.programPhilosophySystem}>
          <h3 className={styles.programSectionHeading}>Your Goals, Your Plan</h3>
          <p>
            We make fitness approachable with clear guidance, realistic
            progressions, and support that keeps you moving forward.
          </p>
          <h3 className={styles.programSectionHeading}>Professional Coaching</h3>
          <p>
            Our experienced staff combines strength, mobility, and conditioning
            to create balanced sessions that fit your lifestyle.
          </p>
        </div>
        <div className={styles.programFeatures}>
          <h3 className={styles.programSectionHeading}>Program Features</h3>
          <ul>
            {features.map((feature) => (
              <li key={feature} className={styles.programFeature}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.sliderBtn}>
          <Link
            href="#"
            className={styles.buyTicketsBtn}
            onClick={(event) => {
              event.preventDefault();
              dispatch(toggleContactModalOpen(""));
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PersonalFitnessProgram;