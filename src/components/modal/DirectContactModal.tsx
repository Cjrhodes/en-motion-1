"use client";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleContactModalOpen } from 'src/redux/features/contactModalSlice';
import EvaluationForm from 'src/components/form/EvaluationForm';

const DirectContactModal: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.contactModal.isOpen);
  const selectedPackage = useSelector((state: any) => state.contactModal.selectedPackage);

  console.log('DirectContactModal - isOpen:', isOpen, 'selectedPackage:', selectedPackage);

  const handleClose = () => {
    console.log('Closing modal');
    dispatch(toggleContactModalOpen(null));
  };

  // If the modal is not open, don't render anything
  if (!isOpen) {
    return null;
  }

  // Modal styles
  const modalOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1050,
  };

  const modalContentStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '5px',
    maxWidth: '500px',
    width: '100%',
    padding: '20px',
    position: 'relative',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const modalHeaderStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #e9ecef',
    paddingBottom: '10px',
    marginBottom: '15px',
  };

  const closeButtonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0',
    color: '#000',
  };

  return (
    <div style={modalOverlayStyle} onClick={handleClose}>
      <div 
        style={modalContentStyle} 
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
      >
        <div style={modalHeaderStyle}>
          <h5>Get Free Evaluation</h5>
          <button 
            style={closeButtonStyle} 
            onClick={handleClose}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div>
          <EvaluationForm />
        </div>
      </div>
    </div>
  );
};

export default DirectContactModal;
