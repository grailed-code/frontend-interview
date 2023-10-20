import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Modal from '@/components/ui/modal';

describe('Modal component', () => {
  it('renders nothing when isOpen is false', () => {
    const { container } = render(
      <Modal isOpen={false} handleClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(container.firstChild).toBeNull();
  });

  it('renders modal content when isOpen is true', () => {
    const { getByText } = render(
      <Modal isOpen={true} handleClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(getByText('Modal Content')).toBeInTheDocument();
  });

  it('calls handleClose when close button is clicked', () => {
    const handleClose = jest.fn();

    const { getByTestId } = render(
      <Modal isOpen={true} handleClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    const closeButton = getByTestId('close-button');
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
