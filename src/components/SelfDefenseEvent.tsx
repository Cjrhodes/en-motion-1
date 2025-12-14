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
        <div className={styles.headerSection}>
          <h1 className={styles.title}>WOMEN'S SELF-DEFENSE SEMINAR</h1>
          <h2 className={styles.subtitle}>LEARN PRACTICAL SKILLS FOR REAL-WORLD SAFETY</h2>
          <p className={styles.description}>
            We teach effective, real-world self-defense tactics. Our program covers situational awareness, de-escalation, and versatile physical techniques. You'll gain practical skills to boost your confidence and safety in everyday situations.
          </p>
        </div>
        <div className={styles.features}>
          <h3>Features:</h3>
          <ul>
            <li>Situational Awareness</li>
            <li>Weapons Defense</li>
            <li>Travel Safety + Protection</li>
            <li>Life-Saving Self-Defense</li>
            <li>Expert Self-Defense Trainers</li>
            <li>Krav Maga Trained Experts</li>
            <li>De-escalation Techniques</li>
            <li>Vehicle Setting Threat</li>
          </ul>
        </div>
        <div className={styles.eventDetails}>
          <h3 className={styles.eventName}>MODERN MARTIAL ARTS AND FITNESS</h3>
          <p>FRIDAY, DECEMBER 19, 2025 12:00PM-1:00PM</p>
          <p>9025 Biscayne Blvd, Miami Shores, FL</p>
          <p className={styles.price}>Only $60</p>
        </div>
       
        <div className={styles.formContainer}>
          <form onSubmit={handleRegister} className={styles.registerForm}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email to register"
              required
              className={styles.emailInput}
            />
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className={styles.registerButton}
            >
              {status === 'loading' ? 'Registering...' : 'Register for Event'}
            </button>
          </form>
          {status === 'success' && <p className={styles.successMessage}>Thank you for registering!</p>}
          {status === 'error' && <p className={styles.errorMessage}>{errorMessage}</p>}
        </div>
      </div>
    </section>
  );
};

export default SelfDefenseEvent;