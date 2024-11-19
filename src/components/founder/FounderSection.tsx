'use client';

import React from 'react';
import styles from './FounderSection.module.css';

const FounderSection = () => {
  return (
    <div className={styles.founder}>
      <div className="container">
        <h3 className={styles.title}>Meet the Founder</h3>
        
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <div className={styles.imageWrapper}>
              <img 
                src="/img/founder.jpg" 
                alt="Founder"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <h2 className={styles.name}>Miguel Ricaurte</h2>
          </div>
          
          <div className="col-md-8">
            <p className={styles.text}>
              With over a decade of immersion in the world of combat sports and self-defense, our founder brings a unique blend of expertise to help individuals achieve their fitness goals while developing invaluable skills for personal protection.
            </p>
            <p className={styles.text}>
              Transitioning from a competitor to a coach, now holding numerous high-performance certifications, our founder ensures that clients receive comprehensive training in a safe and controlled environment. Their extensive knowledge of Functional Master Training allows for personalized programs that cater to individual needs.
            </p>
            
            <h4 className={styles.text}>Certifications & Expertise:</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.checkmark}>✓</span>
                Certified Functional Master Trainer
              </li>
              <li className={styles.listItem}>
                <span className={styles.checkmark}>✓</span>
                Combat Sports Specialist
              </li>
              <li className={styles.listItem}>
                <span className={styles.checkmark}>✓</span>
                Self-Defense Instructor
              </li>
              <li className={styles.listItem}>
                <span className={styles.checkmark}>✓</span>
                Performance Training Expert
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
