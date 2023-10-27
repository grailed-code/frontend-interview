import React, { useState } from 'react';
import Modal from './modal';

function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>Modal Component Demo</h1>

      <button onClick={openModal}>Open Modal</button>

      <Modal isOpen={isOpen} handleClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is a simple modal component.</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default ModalDemo;
