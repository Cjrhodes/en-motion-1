// SelfDefenseProgram.tsx
import React from 'react';
import styles from './Programs.module.css';

const SelfDefense: React.FC = () => {
  const title = 'Self-Defense Training';
  const description = 'Learn self-defense techniques to protect yourself in various situations.';
  const philosophy = 'Our self-defense program is built on the principles of awareness, preparedness, and empowerment. We believe in equipping individuals with the knowledge and skills necessary to defend themselves while promoting a mindset of confidence and resilience.';
  const system = 'Our self-defense system combines elements from various martial arts disciplines, including striking techniques, grappling, and scenario-based training. We focus on practical and effective methods that can be applied in real-life situations.';
  const image = '/path/to/self-defense-image.jpg';
  const features = ['Striking Techniques', 'Grappling Techniques', 'Scenario-Based Training'];

  return (
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
        <button className={`${styles.button} ${styles.learnMoreButton}`}>Learn More</button>
      </div>
    </div>
  );
};

export default SelfDefense;