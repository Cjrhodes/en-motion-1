"use client";
import React from 'react';
import styles from './PricingSection.module.css';
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from 'next/link';

const PricingSection: React.FC = () => {
  const dispatch = useAppDispatch();

  const openContactModal = () => {
    dispatch(toggleContactModalOpen());
  };

  const pricingPlans = [
    {
      name: "Individual Training",
      price: "$90",
      period: "per hour",
      description: "One-on-one self-defense training",
      features: [
        "Personalized instruction",
        "Tailored to your skill level",
        "Goal-oriented training",
        "Flexible scheduling",
        "Individual attention"
      ],
      buttonText: "Book Session",
      popular: false
    },
    {
      name: "10-Session Package",
      price: "$850",
      period: "save $50",
      description: "Best value for consistent training",
      features: [
        "10 one-hour sessions",
        "Structured progression",
        "Progress tracking",
        "Flexible scheduling",
        "Save $50 on regular price"
      ],
      buttonText: "Choose Package",
      popular: true
    },
    {
      name: "Monthly Subscription",
      price: "$340",
      period: "per month",
      description: "Ongoing training & support",
      features: [
        "4 sessions per month",
        "Consistent progress",
        "Regular skill assessment",
        "Priority scheduling",
        "Monthly progress review"
      ],
      buttonText: "Subscribe",
      popular: false
    }
  ];

  return (
    <section id="Pricing" className={`${styles.pricingSection} ${styles.fullScreenContainer}`}>
      <img src="/img/counter_bg6.jpg" alt="background" className={styles.backgroundImage} />
      <div className={styles.backgroundOverlay}></div>
      <div className={`${styles.container} ${styles.programContainer}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.programTitle}>Training Plans</h2>
          <p className={styles.programDescription}>Choose the perfect self-defense training option for your goals</p>
        </div>
        <div className={styles.pricingGrid}>
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''}`}
            >
              {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
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
                <Link
                  href="#"
                  className={`${styles.actionButton} ${plan.popular ? styles.popularButton : ''} ${styles.buyTicketsBtn}`}
                  onClick={openContactModal}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
