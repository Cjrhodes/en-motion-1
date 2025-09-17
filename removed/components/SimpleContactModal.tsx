"use client";
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import EvaluationForm from './form/EvaluationForm';

interface SimpleContactModalProps {
  buttonText?: string;
  buttonClassName?: string;
}

const SimpleContactModal: React.FC<SimpleContactModalProps> = ({ 
  buttonText = "Free Evaluation", 
  buttonClassName = "nav-link buyTicketsBtn rounded-pill" 
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    console.log("SimpleContactModal: Opening modal");
    setShowModal(true);
    // Force a re-render by setting state twice
    setTimeout(() => {
      console.log("SimpleContactModal: Modal state after open:", showModal);
    }, 100);
  };

  const handleClose = () => {
    console.log("SimpleContactModal: Closing modal");
    setShowModal(false);
  };

  // Debug log when component mounts
  React.useEffect(() => {
    console.log("SimpleContactModal: Component mounted");
    return () => console.log("SimpleContactModal: Component unmounted");
  }, []);

  // Debug log when modal state changes
  React.useEffect(() => {
    console.log("SimpleContactModal: Modal state changed to:", showModal);
  }, [showModal]);

  return (
    <>
      <button
        className={buttonClassName}
        onClick={handleOpen}
        style={{ color: '#f8f9fa', backgroundColor: '#ac161e' }}
      >
        {buttonText}
      </button>

      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        contentClassName="modal-content-9"
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EvaluationForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SimpleContactModal;
