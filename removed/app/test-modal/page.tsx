"use client";
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleContactModalOpen } from '@/redux/features/contactModalSlice';
import HtmlContactFormModal from '@/components/modal/HtmlContactFormModal';

const TestModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const modalState = useAppSelector((state) => state.contactModal);

  // Add a useEffect to log state changes
  React.useEffect(() => {
    console.log('Modal state changed:', JSON.stringify(modalState));
  }, [modalState]);

  const openModal = (packageName: string) => {
    console.log('Opening modal with package:', packageName);
    console.log('Current modal state before dispatch:', JSON.stringify(modalState));
    
    // Create the action
    const action = toggleContactModalOpen(packageName);
    console.log('Action created:', action);
    
    // Dispatch the action
    dispatch(action);
    console.log('Action dispatched');
    
    // Log the state again after a short delay
    setTimeout(() => {
      console.log('Modal state after dispatch (timeout):', JSON.stringify(modalState));
    }, 100);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Test Modal Page</h1>
      <p>This page is for testing the contact modal functionality.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Current Modal State:</h2>
        <pre>{JSON.stringify(modalState, null, 2)}</pre>
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
      
      {/* Include the modal component */}
      <HtmlContactFormModal />
    </div>
  );
};

export default TestModal;
