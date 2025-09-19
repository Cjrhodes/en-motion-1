"use client";

import React, { useState } from 'react';
import { useAppSelector } from '@/redux/hooks';
import styles from './EvaluationForm.module.css';

interface FormData {
  email: string;
  phone: string;
}

const EvaluationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const selectedPackage = useAppSelector((state) => state.contactModal.selectedPackage);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          phone: formData.phone,
          formType: 'evaluation',
          tag: selectedPackage || 'FreeEval',
          packageType: selectedPackage
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      setStatus('success');
      setFormData({ email: '', phone: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address"
          required
          className={styles.input}
          aria-label="Email Address"
        />
      </div>

      <div className={styles.formGroup}>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone Number (optional)"
          className={styles.input}
          aria-label="Phone Number"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className={`${styles.submitButton} ${status === 'loading' ? styles.loading : ''}`}
      >
        {status === 'loading' ? (
          <span className={styles.buttonContent}>
            <span className={styles.spinner}></span>
            Submitting...
          </span>
        ) : 'Get Free Evaluation'}
      </button>

      {status === 'success' && (
        <div className={`${styles.message} ${styles.success}`} role="alert">
          <svg className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Thank you! We'll contact you soon.
        </div>
      )}

      {status === 'error' && (
        <div className={`${styles.message} ${styles.error}`} role="alert">
          <svg className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          {errorMessage || 'Something went wrong. Please try again.'}
        </div>
      )}
    </form>
  );
};

export default EvaluationForm;