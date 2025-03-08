"use client";

import React, { useState } from 'react';
import { useAppSelector } from '@/redux/hooks';

const EvaluationForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const selectedPackage = useAppSelector((state) => state.contactModal.selectedPackage);

  console.log('Selected package in EvaluationForm:', selectedPackage); // Log the Redux state

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submission started with package:', selectedPackage);
    setStatus('loading');
    
    try {
      console.log('Sending request to /api/subscribe with package:', selectedPackage);
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          phone,
          formType: 'evaluation',
          tag: selectedPackage || 'FreeEval',
          packageType: selectedPackage // Use this for the PLAN merge field in Mailchimp
        }),
      });

      console.log('Response received:', response.status);
      
      if (!response.ok) {
        throw new Error('Submission failed');
      }

      const data = await response.json();
      console.log('Response data from Mailchimp:', data);

      setStatus('success');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    }
  };

  const formStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '400px',
    margin: '0 auto',
  };

  const inputStyles: React.CSSProperties = {
    padding: '0.5rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyles: React.CSSProperties = {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#ac161e',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const disabledButtonStyles: React.CSSProperties = {
    ...buttonStyles,
    backgroundColor: '#cccccc',
    cursor: 'not-allowed',
  };

  const messageStyles: React.CSSProperties = {
    marginTop: '1rem',
    padding: '0.5rem',
    borderRadius: '4px',
    textAlign: 'center',
  };

  const successMessageStyles: React.CSSProperties = {
    ...messageStyles,
    backgroundColor: '#d4edda',
    color: '#155724',
  };

  const errorMessageStyles: React.CSSProperties = {
    ...messageStyles,
    backgroundColor: '#f8d7da',
    color: '#721c24',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        required
        style={inputStyles}
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone Number (optional)"
        style={inputStyles}
      />
      <button 
        type="submit" 
        disabled={status === 'loading'}
        style={status === 'loading' ? disabledButtonStyles : buttonStyles}
      >
        {status === 'loading' ? 'Submitting...' : 'Get Free Evaluation'}
      </button>
      {status === 'success' && (
        <p style={successMessageStyles}>Thank you for your submission!</p>
      )}
      {status === 'error' && (
        <p style={errorMessageStyles}>{errorMessage}</p>
      )}
    </form>
  );
};

export default EvaluationForm;
