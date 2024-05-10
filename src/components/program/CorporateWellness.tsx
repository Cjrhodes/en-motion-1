// CorporateWellnessProgram.tsx
import React from 'react';
import styles from './Programs.module.css';

const CorporateWellnessProgram: React.FC = () => {
  const title = 'Corporate Wellness';
  const description = 'Promote a healthy lifestyle for your employees and boost productivity.';
  const philosophy = 'Our corporate wellness philosophy revolves around creating a culture of health and well-being within organizations. We believe that investing in the physical and mental well-being of employees leads to increased productivity, reduced absenteeism, and a more engaged workforce.';
  const system = 'Our corporate wellness system is designed to be comprehensive and tailored to the unique needs of each organization. We conduct detailed assessments to understand the specific challenges and goals, and then develop customized programs that include on-site fitness classes, wellness seminars, health screenings, and nutritional guidance.';
  const image = '/path/to/corporate-wellness-image.jpg';
  const features = ['On-Site Fitness Classes', 'Wellness Seminars', 'Health Assessments', 'Nutritional Guidance'];

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

export default CorporateWellnessProgram;