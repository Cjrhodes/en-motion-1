"use client";
import React, { useState } from 'react';

const HtmlModalTest: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  
  const openModal = (packageName: string) => {
    console.log('Opening modal with package:', packageName);
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    console.log('Closing modal');
    setIsModalOpen(false);
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    
    console.log('Form submitted with:', {
      email,
      phone,
      packageName: selectedPackage
    });
    
    alert('Form submitted successfully!');
    closeModal();
  };
  
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>HTML Modal Test Page</h1>
      <p>This page is for testing a simple React modal functionality without Redux.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Current Modal State:</h2>
        <pre>{JSON.stringify({ isModalOpen, selectedPackage }, null, 2)}</pre>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Test Buttons:</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button 
            onClick={() => openModal('individual')}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#ff4d4d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Open Modal (Individual)
          </button>
          
          <button 
            onClick={() => openModal('tenpack')}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#ff4d4d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Open Modal (10-Pack)
          </button>
          
          <button 
            onClick={() => openModal('MonthlySub')}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#ff4d4d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Open Modal (Monthly)
          </button>
        </div>
      </div>
      
      {/* Modal */}
      {isModalOpen && (
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
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '5px',
              maxWidth: '500px',
              width: '100%',
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
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
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
            <div>
              <p>Selected package: {selectedPackage}</p>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HtmlModalTest;
