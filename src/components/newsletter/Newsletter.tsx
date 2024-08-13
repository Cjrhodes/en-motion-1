
"use client";
import React, { useState } from 'react';
import { useAppDispatch } from "@/redux/hooks";
import styles from './Newsletter.module.css';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <section className={styles.newsletterSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Subscribe to Our Newsletter</h2>
        <p className={styles.description}>Stay updated with our latest news and offers!</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Subscribe</button>
        </form>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </section>
  );
};

export default Newsletter;