'use client'

import React, { useState } from 'react';
import styles from './SelfDefenseEvent.module.css';

const SelfDefenseEvent = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          formType: 'event',
          tag: 'SelfDefenseEvent'
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus('success');
        setEmail('');
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead', {
            content_name: 'Women\'s Self-Defense Seminar',
            content_category: 'Event Registration',
            value: 60.00,
            currency: 'USD'
          });
        }
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <section className={styles.eventContainer}>
      <div className={styles.overlay}>
        <div className={styles.heroContent}>
          <div className={styles.leftColumn}>
            <h1 className={styles.title}>WOMEN'S SELF-DEFENSE SEMINAR</h1>
            <h2 className={styles.subtitle}>LEARN PRACTICAL SKILLS FOR REAL-WORLD SAFETY</h2>
            
            <div className={styles.infoStrip}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📅</span>
                <div>
                  <strong>Saturday, January 31, 2026</strong>
                  <span>12:00 PM - 3:00 PM</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <div>
                  <strong>Modern Martial Arts and Fitness</strong>
                  <span>9025 Biscayne Blvd, Miami Shores, FL</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>💰</span>
                <div>
                  <strong className={styles.priceHighlight}>Only $60</strong>
                  <span>3-Hour Session</span>
                </div>
              </div>
            </div>

            <ul className={styles.valuePoints}>
              <li>Situational Awareness & De-escalation</li>
              <li>Hands-On Self-Defense Techniques</li>
              <li>Expert Krav Maga Trained Instructors</li>
            </ul>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.ctaCard}>
              <h3 className={styles.ctaTitle}>Register Now</h3>
              <p className={styles.ctaPrice}>$60</p>
              <p className={styles.ctaDuration}>3-Hour Seminar</p>
              
              <form onSubmit={handleRegister} className={styles.registerForm}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className={styles.emailInput}
                />
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className={styles.registerButton}
                >
                  {status === 'loading' ? 'Registering...' : 'Reserve Your Spot'}
                </button>
              </form>
              
              {status === 'success' && <p className={styles.successMessage}>Thank you for registering! Check your email for details.</p>}
              {status === 'error' && <p className={styles.errorMessage}>{errorMessage}</p>}
              
              <p className={styles.spotsNote}>Limited spots available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfDefenseEvent;
