"use client";
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { toggleContactModalOpen } from '@/redux/features/contactModalSlice';
import EvaluationForm from 'src/components/form/EvaluationForm';

const HtmlContactFormModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.contactModal.isOpen);
  const selectedPackage = useAppSelector((state) => state.contactModal.selectedPackage);

  console.log('HtmlContactFormModal - isOpen:', isOpen, 'selectedPackage:', selectedPackage, 'state:', JSON.stringify(useAppSelector((state) => state.contactModal)));

  // Debug log when component mounts
  useEffect(() => {
    console.log("HtmlContactFormModal: Component mounted");
    return () => console.log("HtmlContactFormModal: Component unmounted");
  }, []);

  // Debug log when modal state changes
  useEffect(() => {
    console.log("HtmlContactFormModal: Modal state changed to:", isOpen);
    console.log("HtmlContactFormModal: Full state:", JSON.stringify({ isOpen, selectedPackage }));
  }, [isOpen, selectedPackage]);

  const handleClose = () => {
    console.log('Closing modal');
    dispatch(toggleContactModalOpen(null));
  };

  if (!isOpen) {
    return null;
  }

  return (
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
      onClick={handleClose}
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
            onClick={handleClose}
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

export default HtmlContactFormModal;
