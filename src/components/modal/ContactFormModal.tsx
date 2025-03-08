"use client";
import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { toggleContactModalOpen } from 'src/redux/features/contactModalSlice';
import EvaluationForm from 'src/components/form/EvaluationForm';

const ContactFormModal: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.contactModal.isOpen);
  const selectedPackage = useSelector((state: any) => state.contactModal.selectedPackage);

  const handleClose = () => {
    dispatch(toggleContactModalOpen(null));
  };

  return (
    <Modal show={isOpen} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Get Free Evaluation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EvaluationForm />
      </Modal.Body>
    </Modal>
  );
};

export default ContactFormModal;
