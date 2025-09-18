"use client";
import React from 'react';
import styles from './PricingSection.module.css';

const SimplePricingSection: React.FC = () => {
  const pricingPlans = [
    {
      name: "Individual Training",
      price: "$85",
      period: "per hour",
      description: "One-on-one self-defense training",
      features: [
        "Personalized instruction",
        "Tailored to your skill level",
        "Goal-oriented training",
        "Flexible scheduling",
        "Individual attention"
      ]
    },
    {
      name: "10-Session Package",
      price: "$845",
      period: "save $50",
      description: "Best value for consistent training",
      features: [
        "10 one-hour sessions",
        "Structured progression",
        "Progress tracking",
        "Flexible scheduling",
        "Save $50 on regular price"
      ]
    },
    {
      name: "12-Session Package",
      price: "$1150",
      period: "save $70",
      description: "Extended training for maximum results",
      features: [
        "12 one-hour sessions",
        "Structured progression",
        "Progress tracking",
        "Flexible scheduling",
        "Save $70 on regular price"
      ]
    },
    {
      name: "Monthly Subscription",
      price: "$335",
      period: "per month",
      description: "Ongoing training & support",
      features: [
        "4 sessions per month",
        "Consistent progress",
        "Regular skill assessment",
        "Priority scheduling",
        "Monthly progress review"
      ]
    }
  ];

  return (
    <section id="Pricing" className={`${styles.fullScreenContainer} ${styles.pricingPage}`}>
      <div className={styles.navbarSpacer}></div>
      <div className={styles.programContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.programTitle}>Training Plans</h2>
          <p className={styles.programDescription}>Choose the perfect training option for your goals</p>
        </div>
        <div className={styles.pricingGrid}>
          {pricingPlans.map((plan, index) => (
            <div key={index} className={styles.pricingCard}>
              <div className={styles.planHeader}>
                <h3>{plan.name}</h3>
                <div className={styles.price}>
                  <span className={styles.amount}>{plan.price}</span>
                  <span className={styles.period}>{plan.period}</span>
                </div>
                <p className={styles.description}>{plan.description}</p>
              </div>
              <ul className={styles.features}>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="bx bx-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className={styles.sliderBtn}>
                <button className={styles.buyTicketsBtn}>
                  Choose Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimplePricingSection;