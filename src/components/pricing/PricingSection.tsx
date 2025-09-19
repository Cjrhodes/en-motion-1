"use client";
import React, { useState, useEffect } from 'react';
import styles from './PricingSection.module.css';
import Link from 'next/link';
import { useAppDispatch } from "@/redux/hooks";

// Simple modal component
const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
}> = ({ isOpen, onClose, packageName }) => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!isOpen) return null;
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    
    console.log('Form submitted with:', {
      email,
      phone,
      packageName
    });

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          phone,
          formType: 'pricing',
          tag: packageName,
          packageType: packageName // Use this for the PLAN merge field in Mailchimp
        }),
      });

      if (response.ok) {
        setSuccessMessage('Thank you for subscribing! Please check your email for further information.');
      } else {
        const data = await response.json();
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };
  
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '5px',
          maxWidth: '500px',
          width: '100%',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          color: '#333',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '15px',
            paddingBottom: '10px',
            borderBottom: '1px solid #e9ecef',
          }}
        >
          <h2 style={{ margin: 0 }}>Get Free Evaluation</h2>
          <button 
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: 0,
            }}
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div>
          <p>Selected package: {packageName}</p>
          {successMessage ? (
            <p>{successMessage}</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>
                  Email Address
                </label>
                <input 
                  type="email" 
                  name="email"
                  required
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                  }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>
                  Phone Number (optional)
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                  }}
                />
              </div>
              <button 
                type="submit"
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#ff4d4d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const [description, setDescription] = useState("Choose the perfect training option for your goals");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  
  useEffect(() => {
    setDescription("Choose the perfect training option for your goals");
    
    // Force the window to scroll a bit to trigger the navbar solid background
    window.scrollTo(0, 1);
    
  }, []);
  
  const openContactModal = (packageName: string) => {
    console.log('Opening contact modal with package:', packageName);
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    console.log('Closing modal');
    setIsModalOpen(false);
  };

  console.log('Loading PricingSection component');
  const pricingPlans = [
    {
      name: "Individual Training",
      price: "$85",
      plan: "individual",
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
      plan: "tenpack",
      price: "$845",
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
      name: "12-Session Package",
      plan: "twelvepack",
      price: "$1150",
      period: "save $70",
      description: "Extended training for maximum results",
      features: [
        "12 one-hour sessions",
        "Comprehensive skill development",
        "Advanced techniques",
        "Structured progression",
        "Progress tracking",
        "Flexible scheduling",
        "Save $70 on regular price"
      ],
      buttonText: "Choose Package",
      popular: true
    },
    {
      name: "Monthly Subscription",
      plan: "MonthlySub",
      price: "$335",
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
    },
    {
      name: "CrossFit Training",
      plan: "crossfit",
      price: "$115",
      period: "per session",
      description: "High-intensity functional fitness training",
      features: [
        "Group-based workouts",
        "Strength and conditioning",
        "Scalable exercises",
        "Certified trainers",
        "Community support"
      ],
      buttonText: "Join Now",
      popular: false
    },
    {
      name: "Self-Defense Training",
      plan: "selfdefense",
      price: "$95",
      period: "per session",
      description: "Learn practical self-defense techniques",
      features: [
        "Real-world scenarios",
        "Personal safety skills",
        "Confidence building",
        "Expert instructors",
        "Flexible scheduling"
      ],
      buttonText: "Enroll Today",
      popular: false
    },
    {
      name: "Functional Fitness",
      plan: "functionalfitness",
      price: "$105",
      period: "per session",
      description: "Improve strength and mobility for daily life",
      features: [
        "Customized workouts",
        "Focus on core strength",
        "Balance and stability",
        "Injury prevention",
        "Expert guidance"
      ],
      buttonText: "Start Training",
      popular: false
    },
    {
      name: "Mobility Training",
      plan: "mobility",
      price: "$85",
      period: "per session",
      description: "Enhance flexibility and joint health",
      features: [
        "Stretching routines",
        "Joint mobility drills",
        "Posture improvement",
        "Pain relief techniques",
        "Certified trainers"
      ],
      buttonText: "Get Started",
      popular: false
    }
  ];

  console.log('Number of pricing plans:', pricingPlans.length);
  console.log('Plans:', pricingPlans.map(p => p.name));

  return (
    <section id="Pricing" className={`${styles.fullScreenContainer} ${styles.pricingPage}`}>
      <div className={styles.navbarSpacer}></div>
      <div className={styles.programContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.programTitle}>Training Plans</h2>
          <p className={styles.programDescription}>{description}</p>
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
                  className={`${styles.buyTicketsBtn} ${plan.popular ? styles.popularButton : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    openContactModal(plan.plan);
                  }}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Render the modal */}
      {selectedPackage && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          packageName={selectedPackage}
        />
      )}
    </section>
  );
};

export default PricingSection;
