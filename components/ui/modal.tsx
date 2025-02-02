import { useRef } from 'react';
import { X } from 'lucide-react';

import ReactPortal from '@/components/ui/react-portal';

import styles from './modal.module.scss';

type ModalProps = {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
};

function Modal({ children, isOpen, handleClose }: ModalProps) {
  const nodeRef = useRef(null);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className={styles.container} ref={nodeRef}>
        <div className={styles.content}>
          <button onClick={handleClose} className={styles.closeBtn}>
            <X data-testid="close-button" size={24} />
          </button>
          {children}
        </div>
      </div>
    </ReactPortal>
  );
}

export default Modal;
