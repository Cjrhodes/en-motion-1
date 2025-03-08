// src/components/ContactModal.tsx
"use client";
import React from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";
import ContactForm from '@/components/form/ContactForm';
import { Button } from 'react-bootstrap';


const ContactModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.contactModal.isOpen); // Should be isOpen
  const selectedPackage = useAppSelector((state) => state.contactModal.selectedPackage);

  if (!isOpen) return null;

  return (
    <div
      className="modal"
      style={{
        position: 'fixed',
        top: '20%',
        left: '20%',
        right: '20%',
        background: 'white',
        padding: '20px',
        zIndex: 1000,
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <ContactForm />
      <Button
        variant="secondary"
        onClick={() => dispatch(toggleContactModalOpen(null))}
        style={{ marginTop: '10px' }}
      >
        Close
      </Button>
    </div>
  );
};

export default ContactModal;
