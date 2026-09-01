"use client";

import React from "react";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";
import styles from "./Programs.module.css";

const MassageProgram: React.FC = () => {
  const dispatch = useAppDispatch();
  const features = [
    "Muscle tension relief",
    "Improved mobility and recovery",
    "Personalized pressure and focus areas",
  ];

  return (
    <section id="Massage" className={styles.fullScreenContainer}>
      <img
        src="/img/group-stretch.jpeg"
        alt="Massage and recovery services"
        className={styles.backgroundImage}
      />
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.programContainer}>
        <h2 className={styles.programTitle}>Massage</h2>
        <p className={styles.programDescription}>
          Recover, relax, and move better with personalized massage sessions
          designed around your body and training needs.
        </p>
        <div className={styles.programPhilosophySystem}>
          <h3 className={styles.programSectionHeading}>Our Approach</h3>
          <p>
            Every session focuses on relieving tension, supporting recovery,
            and helping you feel your best in everyday life and training.
          </p>
          <h3 className={styles.programSectionHeading}>Personalized Care</h3>
          <p>
            We tailor each massage to your comfort level, areas of concern,
            activity level, and recovery goals.
          </p>
        </div>
        <div className={styles.programFeatures}>
          <h3 className={styles.programSectionHeading}>Service Benefits</h3>
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
            Request an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MassageProgram;