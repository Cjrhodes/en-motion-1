import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleContactModalOpen } from '@/redux/features/contactModalSlice'; // Adjust the path as necessary
import { Button } from 'react-bootstrap';

const CTASection = () => {
  const dispatch = useDispatch();

  // Handler to open the contact modal
  const openContactModal = () => {
    dispatch(toggleContactModalOpen(""));
  };

  return (
    <section
      className="cta-section text-center py-5 bg-dark text-white"
      style={{
        backgroundImage: 'url(/img/powerliftgirl.jpeg)',
        backgroundSize: 'cover',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      />

      <div className="container">
        <h2>Ready to Transform Your Fitness Journey?</h2>
        <p className="lead py-2">
          Join us today and start your path to a healthier and stronger you with our expert coaching.
        </p>
        <Button variant="primary" size="lg" onClick={openContactModal}>
          Get Started Here
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
