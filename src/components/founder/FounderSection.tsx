import React from 'react';
import styles from './FounderSection.module.css';

const FounderSection = () => {
  return (
    <div className={styles.founder}>
      <div className="container">
        <h3 className={styles.title}>Meet Our Team</h3>
        
        <div className="row align-items-center">
          <div className="col-md-12">
            <p className={styles.text}>
              At En Motion, you're trained by a team of professional athletes, certified self-defense instructors, and fight-experienced coaches. Our staff brings real-world combat experience and elite-level training to every session — ensuring you learn techniques that actually work.
            </p>
            
            <h4 className={styles.text}>Our Team Brings:</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.checkmark}>✓</span>
                Professional Athletes with Competitive Fight Experience
              </li>
              <li className={styles.listItem}>
                <span className={styles.checkmark}>✓</span>
                Certified Self-Defense & Krav Maga Instructors
              </li>
              <li className={styles.listItem}>
                <span className={styles.checkmark}>✓</span>
                Nationally Certified Personal Trainers
              </li>
              <li className={styles.listItem}>
                <span className={styles.checkmark}>✓</span>
                Combat Sports & Martial Arts Specialists
              </li>
              <li className={styles.listItem}>
                <span className={styles.checkmark}>✓</span>
                Functional Training & Performance Experts
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
