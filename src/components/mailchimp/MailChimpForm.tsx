// components/MailchimpForm.tsx
import React, { useState } from 'react';

const MailchimpForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <div>
      <h2>Join Our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="mce-EMAIL">Email Address </label>
          <input
            type="email"
            id="mce-EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="submit"
            value={status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            disabled={status === 'loading'}
          />
        </div>
      </form>
      {status === 'success' && (
        <div>Thank you for subscribing!</div>
      )}
      {status === 'error' && (
        <div>{errorMessage}</div>
      )}
    </div>
  );
};

export default MailchimpForm;