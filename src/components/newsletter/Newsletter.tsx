"use client";
import React, { useState } from 'react';
import styles from './Newsletter.module.css';

interface BlogPost {
  id: number;
  title: string;
  imageUrl: string;
}

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribeClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
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

  const blogPosts: BlogPost[] = [
    { id: 1, title: "10 Tips for Better Sleep", imageUrl: "/img/blog-post-1.jpg" },
    { id: 2, title: "The Benefits of High-Intensity Interval Training", imageUrl: "/img/blog-post-2.jpg" },
    { id: 3, title: "Nutrition Myths Debunked", imageUrl: "/img/blog-post-3.jpg" },
  ];

  return (
    <section id="newsletter" className={styles.newsletterSection}>
      <div className={styles.container}>
        
        <div className={styles.subscribeSection}>
          <h3 className={styles.subscribeTitle}>Subscribe to Our Newsletter</h3>
          <p className={styles.subscribeDescription}>Get the latest fitness tips and articles delivered to your inbox.</p>
          
          <form onSubmit={handleSubscribeClick} className={styles.subscribeForm}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className={styles.emailInput}
            />
            <button type="submit" disabled={status === 'loading'} className={styles.subscribeButton}>
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {status === 'success' && <p className={styles.message}>Thank you for subscribing!</p>}
          {status === 'error' && <p className={styles.errorMessage}>{errorMessage}</p>}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;