"use client";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleContactModalOpen } from 'src/redux/features/contactModalSlice';
import EvaluationForm from 'src/components/form/EvaluationForm';

const SimpleModal: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.contactModal.isOpen);
  const selectedPackage = useSelector((state: any) => state.contactModal.selectedPackage);

  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    dispatch(toggleContactModalOpen(null));
  };

  // Modal overlay style
  const overlayStyle: React.CSSProperties = {
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

  // Modal content style
  const modalStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '5px',
    maxWidth: '500px',
    width: '100%',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  // Modal header style
  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
    paddingBottom: '10px',
    borderBottom: '1px solid #e9ecef',
  };

  // Close button style
  const closeButtonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: 0,
  };

  return (
    <div style={overlayStyle} onClick={handleClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <div style={headerStyle}>
          <h5>Get Free Evaluation</h5>
          <button style={closeButtonStyle} onClick={handleClose}>
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

export default SimpleModal;
