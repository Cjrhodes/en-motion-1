"use client";
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { toggleContactModalOpen } from '@/redux/features/contactModalSlice';
import EvaluationForm from 'src/components/form/EvaluationForm';
import styles from './HtmlContactFormModal.module.css';

const HtmlContactFormModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.contactModal.isOpen);
  const selectedPackage = useAppSelector((state) => state.contactModal.selectedPackage);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    dispatch(toggleContactModalOpen(null));
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => document.removeEventListener('keydown', handleEscapeKey);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.modalOverlay}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 id="modal-title" className={styles.modalTitle}>
            Get Your Free Evaluation
          </h2>
          <button
            className={styles.closeButton}
            onClick={handleClose}
            aria-label="Close modal"
            type="button"
          >
            <svg
              className={styles.closeIcon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className={styles.modalBody}>
          {selectedPackage && (
            <p className={styles.selectedPackage}>
              Selected: <strong>{selectedPackage}</strong>
            </p>
          )}
          <p className={styles.description}>
            Take the first step towards your fitness goals. Fill out the form below and we'll get in touch within 24 hours.
          </p>
          <EvaluationForm />
        </div>
      </div>
    </div>
  );
};

export default HtmlContactFormModal;