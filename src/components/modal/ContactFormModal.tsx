"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleContactModalClose } from "@/redux/features/contactModalSlice";
import { Modal } from "react-bootstrap";
import EvaluationForm from "../form/EvaluationForm";

const ContactFormModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const isContactModalOpen = useAppSelector((state) => state.contactModal.isContactModalOpen);

  useEffect(() => {
    console.log('Modal open state:', isContactModalOpen);
  }, [isContactModalOpen]);

  const closeContactModal = () => {
    console.log('Closing modal');
    dispatch(toggleContactModalClose());
  };

  return (
    <Modal
      className={`contact-modal modal fade ${isContactModalOpen ? "show" : ""}`}
      id="contactModal"
      onHide={closeContactModal}
      show={isContactModalOpen}
      contentClassName="modal-content-9"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EvaluationForm />
      </Modal.Body>
    </Modal>
  );
};

export default ContactFormModal;
