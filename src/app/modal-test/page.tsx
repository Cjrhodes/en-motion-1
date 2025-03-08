"use client";
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ModalTestPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Modal Test Page</h1>
      <p>Click the button below to test a simple Bootstrap modal:</p>
      
      <Button variant="primary" onClick={handleShow}>
        Open Modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Test Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is a test modal to see if Bootstrap modals are working correctly.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
