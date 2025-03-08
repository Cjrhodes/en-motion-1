"use client";
import React, { useState, useEffect } from 'react';
import EvaluationForm from 'src/components/form/EvaluationForm';

const InlineModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    console.log('Opening modal from InlineModal');
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    console.log('Closing modal from InlineModal');
    setIsModalOpen(false);
  };

  // Listen for clicks on buttons with specific classes
  useEffect(() => {
    const handleButtonClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if the clicked element is a button that should open the modal
      if (
        target.tagName === 'BUTTON' && 
        (
          target.classList.contains('sliderButton') || 
          target.classList.contains('buyTicketsBtn') ||
          target.textContent?.includes('Free Evaluation') ||
          target.textContent?.includes('Book Session') ||
          target.textContent?.includes('Choose Package') ||
          target.textContent?.includes('Subscribe') ||
          target.textContent?.includes('Get Started') ||
          target.textContent?.includes('Free Quote')
        )
      ) {
        console.log('Modal trigger button clicked in InlineModal');
        openModal();
      }
    };

    // Add event listener
    document.addEventListener('click', handleButtonClick);

    // Clean up
    return () => {
      document.removeEventListener('click', handleButtonClick);
    };
  }, []);

  return (
    <>
      {/* Simple Modal */}
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
            zIndex: 9999,
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
              <h5 style={{ margin: 0 }}>Get Free Evaluation</h5>
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
              <EvaluationForm />
            </div>
          </div>
        </div>
      )}

      {/* Test Button */}
      <button 
        onClick={openModal}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px 20px',
          backgroundColor: '#ac161e',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 9998,
        }}
      >
        Test Modal
      </button>
    </>
  );
};

export default InlineModal;
